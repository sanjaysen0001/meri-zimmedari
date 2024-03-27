import React, { useEffect, useState, useRef } from "react";
import Webcam from "react-webcam";

import * as tf from "@tensorflow/tfjs";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import imagelogo from "../image/logo.png";
import BlinkEye from "../image/eyedrop.gif";
import swal from "sweetalert";

import axiosConfig from "../axiosConfig";
import {
  Modal,
  ModalHeader,
  Button,
  Col,
  Form,
  Input,
  Label,
  Row,
} from "reactstrap";
const faceLandmarksDetection = require("@tensorflow-models/face-landmarks-detection");
const Register = args => {
  const webcamRef = useRef(null);
  const navigate = useNavigate();

  const [showWebcam, setShowWebcam] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [count, setCount] = useState(0);
  const [maxLeft, setMaxLeft] = useState(0);
  const [maxRight, setMaxRight] = useState(0);
  const [LoginData, setLogin] = useState({});
  const [model, setModel] = useState(null);
  const [text, setText] = useState("modal loading...");
  const [Registration, setRegistration] = useState(false);
  const [backloading, setBackloading] = useState(false);
  const [registered, setRegistered] = useState(false);
  const [isCheck, setIsCheck] = useState(false);
  const [isTrue, setIsTrue] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    image: null,
  });
  const [formError, setFormError] = useState({
    IsName: false,
    IsEmail: false,
    IsImage: false,
  });
  const [modal, setModal] = useState(false);
  const toggle = () => {
    setModal(!modal);
    handlePicture();
  };
  const [LoginButton, setLoginButton] = useState("Submit");
  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    tf.setBackend("webgl");
    loadModel();
    // console.log(text);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        setText("detecting...");
        detectPoints();
      }, 1000);
    }
  }, [isOpen]);

  const loadModel = async () => {
    faceLandmarksDetection
      .load(faceLandmarksDetection.SupportedPackages.mediapipeFacemesh, {
        maxFaces: 1,
      })
      .then(model => {
        setModel(model);
        setText("ready for capture");
      })
      .catch(err => {
        console.log(err);
      });
  };
  const handleClick = () => {
    const newIsOpen = !isOpen;
    console.log(newIsOpen);
    const newCount = isOpen ? count : 0;
    setIsOpen(newIsOpen);
    setCount(newCount);
    setLoading(!loading);
  };
  const capture = () => {
    setShowWebcam(true);
    handleClick();
  };
  const handlePicture = () => {
    capture();
    setRegistration(true);
  };
  const handleCapture = () => {
    alert("Image captured");
    const imageSrc = webcamRef.current.getScreenshot();
    setFormData({
      ...formData,
      image: imageSrc,
    });
    setShowWebcam(false);
    toggle();
  };
  const detectPoints = async () => {
    if (isOpen == false) return;
    try {
      const video = await webcamRef.current.video;
      const predictions = await model.estimateFaces({
        input: video,
        returnTensors: false,
        flipHorizontal: true,
        predictIrises: true,
      });

      if (predictions.length > 0) {
        // Somente 1 face
        const keypoints = predictions[0].scaledMesh;
        if (detectarBlink(keypoints)) {
          // TODO :: Found blink, do someting
          const countN = count + 1;
          setCount(countN);
          setIsOpen(false);
          handleCapture();
          handleClick();
          if (!isOpen) {
            // stop detection
            setText("");
            return null;
          }
        }
      } else {
        setMaxLeft(0);
        setMaxRight(0);
      }
    } catch (error) {
      // console.log(error);
    }
    if (!isOpen) {
      // stop detection
      setText("");
      return null;
    }
    setTimeout(async () => {
      await detectPoints();
    }, 100);
  };
  const calculateDistance = (x1, y1, x2, y2) => {
    return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
  };

  const detectarBlink = keypoints => {
    const leftEye_left = 263;
    const leftEye_right = 362;
    const leftEye_top = 386;
    const leftEye_buttom = 374;
    const rightEye_left = 133;
    const rightEye_right = 33;
    const rightEye_top = 159;
    const rightEye_buttom = 145;

    const leftVertical = calculateDistance(
      keypoints[leftEye_top][0],
      keypoints[leftEye_top][1],
      keypoints[leftEye_buttom][0],
      keypoints[leftEye_buttom][1]
    );
    const leftHorizontal = calculateDistance(
      keypoints[leftEye_left][0],
      keypoints[leftEye_left][1],
      keypoints[leftEye_right][0],
      keypoints[leftEye_right][1]
    );
    const eyeLeft = leftVertical / (2 * leftHorizontal);

    const rightVertical = calculateDistance(
      keypoints[rightEye_top][0],
      keypoints[rightEye_top][1],
      keypoints[rightEye_buttom][0],
      keypoints[rightEye_buttom][1]
    );
    const rightHorizontal = calculateDistance(
      keypoints[rightEye_left][0],
      keypoints[rightEye_left][1],
      keypoints[rightEye_right][0],
      keypoints[rightEye_right][1]
    );
    const eyeRight = rightVertical / (2 * rightHorizontal);

    const baseCloseEye = 0.1;
    const limitOpenEye = 0.14;
    if (maxLeft < eyeLeft) {
      setMaxLeft(eyeLeft);
    }
    if (maxRight < eyeRight) {
      setMaxRight(eyeRight);
    }
    // console.log("isopen:::::", isOpen);
    let result = false;
    //    if ((maxLeft > limitOpenEye) && (maxRight > limitOpenEye)) {
    if (eyeLeft < baseCloseEye && eyeRight < baseCloseEye) {
      result = true;
      setIsOpen(false);
      // console.log("isopen11", isOpen);
    }
    // console.log("isopen", isOpen);
    //    }

    // console.log(result);

    return result;
  };
  function dataURItoBlob(dataURI) {
    const byteString = atob(dataURI.split(",")[1]);
    const mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: mimeString });
  }

  const HandleSubmitData = async e => {
    e.preventDefault();

    setLoginButton("Submitting...");

    let formdata = new FormData();
    formdata.append("image", dataURItoBlob(formData.image));
    formdata.append("firstName", LoginData?.name);
  };
  const handleSubmit = async e => {
    e.preventDefault();
    if (formData.name) {
      setFormError(prevData => ({ ...prevData, IsName: false }));
    } else {
      setFormError(prevData => ({ ...prevData, IsName: true }));
    }
    if (formData.email) {
      setFormError(prevData => ({ ...prevData, IsEmail: false }));
    } else {
      setFormError(prevData => ({ ...prevData, IsEmail: true }));
    }
    if (formData.image) {
      setFormError(prevData => ({ ...prevData, IsImage: false }));
    } else {
      setFormError(prevData => ({ ...prevData, IsImage: true }));
    }

    let MobileNUM = JSON.parse(localStorage.getItem("MobileNUM"));
    if (formError.IsName && formError.IsEmail && formError.IsImage) {
      try {
        setIsCheck(false);
        const formDataToSend = new FormData();
        formDataToSend.append("mobileNo", Number(MobileNUM));
        formDataToSend.append("firstName", formData.name);
        formDataToSend.append("email", formData.email);
        formDataToSend.append("image", dataURItoBlob(formData.image));
        setBackloading(true);
        debugger;
        setIsTrue(true);
        axiosConfig
          .post("/register", formDataToSend)
          .then(response => {
            localStorage.removeItem("MobileNUM");
            console.log(response.data);
            if (response.data.message) {
              setIsTrue(false);
              // setIsCheck(false);
              swal("success", response.data.message);
            }
          })
          .catch(error => {
            setIsTrue(true);
            console.log(error);
          });
        setRegistered(true);
        setFormData({
          email: "",
          name: "",
          image: null,
        });
      } catch (error) {
        console.error("Error registering:", error);
      }
    }
    //   else {
    //     console.log("object")
    // }
  };

  return (
    <>
      <div className="container-fluid " style={{ display: "inline-block" }}>
        <div
          class="header"
          style={{ marginLeft: "-15px", boxShadow: "0 0 10px  #2374ee" }}
        >
          <div class="container-fluid">
            <div class="row d_flex">
              <a href="https://merizimmedari.com/" target="_blank">
                <div class=" col-md-2 col-sm-9 " style={{ width: "100%" }}>
                  <a href="https://merizimmedari.com/" target="_blank">
                    <img
                      src={imagelogo}
                      target="_blank"
                      href="https://merizimmedari.com/"
                      style={{ width: "96px" }}
                      alt="#"
                    />
                  </a>
                </div>
              </a>
              <div class="col-md-10 col-sm-12 chgdfagdjagdagfagsf">
                <nav class="navigation navbar navbar-expand-md navbar-dark ">
                  <button
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarsExample04"
                    aria-controls="navbarsExample04"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarsExample04">
                    <ul class="navbar-nav mr-auto">
                      <li class="nav-item ">
                        <a
                          class="nav-link"
                          href="https://merizimmedari.com/WhatWeDo.html"
                        >
                          What We Do ?
                        </a>
                      </li>
                      <li class="nav-item ">
                        <a
                          class="nav-link"
                          href="https://merizimmedari.com/HowWeDo.html"
                        >
                          How It Works ?
                        </a>
                      </li>
                      <li class="nav-item ">
                        <a
                          class="nav-link"
                          href="https://merizimmedari.com/FAQ.html"
                        >
                          FAQ
                        </a>
                      </li>

                      <li class="nav-item ">
                        <a
                          class="nav-link"
                          href="https://merizimmedari.com/contact.html"
                        >
                          Contact Us
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          class="nav-link"
                          href="https://user.merizimmedari.com/#/"
                          target="_blank"
                        >
                          sign-in<span style={{ fontSize: "22px" }}>/</span>
                          Sign-up
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div className="row " style={{ paddingTop: "5rem" }}>
          <div className="col-md-4 col-sm-1 col-lg-4 col-xl-4">
            <div></div>
          </div>
          <div className="col-md-4 col-sm-10 col-lg-4 col-xl-4">
            <div
              className="gdfhagfjhagjhfgagfjhaf"
              style={{
                margin: "1rem",
                marginTop: "3rem",
                borderRadius: "20px",
                backgroundColor: "white",
                paddingBottom: "1rem",
              }}
            >
              <div
                style={{
                  backgroundColor: "rgb(194, 215, 233)",
                  width: "100%",
                  borderTopLeftRadius: "20px",
                  borderTopRightRadius: "20px",
                  paddingLeft: "2rem",
                }}
              >
                <div style={{ fontSize: "20px", fontWeight: "600" }}>
                  Sign-up to Meri Zimmedari
                </div>
              </div>

              <div style={{ margin: "2rem" }}>
                <div className="mt-4">
                  <form>
                    <fieldset
                      className="mt-4"
                      style={{
                        color: "rgb(82, 114, 161)",
                        fontSize: "20px",
                        fontFamily: "Calibri",
                        border: "1px solid rgb(114, 158, 216)",
                        borderRadius: "10px",
                        height: "4rem",
                        width: "100%",
                      }}
                    >
                      <legend
                        style={{
                          color: "rgb(82, 114, 161)",
                          marginBottom: "-5px",
                          fontSize: "16px",
                          paddingLeft: "5px",
                          fontFamily: "Calibri",
                          marginLeft: "15px",
                          width: "6rem",
                        }}
                        for="exampleInputPassword1"
                        class="form-label"
                      >
                        Enter Name
                        <span style={{ marginLeft: "2px", color: "red" }}>
                          *
                        </span>
                      </legend>

                      <input
                        style={{
                          border: "none",
                          fontSize: "17px",
                          marginTop: "6px",
                          paddingRight: "10px",
                          outline: "none",
                          width: "100%",
                          paddingLeft: "15px",
                        }}
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={e => {
                          setFormData({ ...formData, name: e.target.value });
                        }}
                        required
                      />
                    </fieldset>
                    {formError.IsName && (
                      <p
                        style={{
                          color: "red",
                          padding: "5px",
                          fontSize: "16px",
                          marginTop: "13px",
                        }}
                      >
                        Enter Name is required!
                      </p>
                    )}
                    <fieldset
                      className="mt-4"
                      style={{
                        color: "rgb(82, 114, 161)",
                        fontSize: "20px",
                        fontFamily: "Calibri",
                        border: "1px solid rgb(114, 158, 216)",
                        borderRadius: "10px",
                        height: "4rem",
                        width: "100%",
                      }}
                    >
                      <legend
                        style={{
                          color: "rgb(82, 114, 161)",
                          marginBottom: "-5px",
                          fontSize: "16px",
                          paddingLeft: "5px",
                          fontFamily: "Calibri",
                          marginLeft: "15px",
                          width: "7.5rem",
                        }}
                        for="exampleInputPassword1"
                        class="form-label"
                      >
                        Enter E-Mail ID
                        <span style={{ marginLeft: "2px", color: "red" }}>
                          *
                        </span>
                      </legend>

                      <input
                        style={{
                          border: "none",
                          fontSize: "16px",
                          marginTop: "5px",
                          paddingRight: "10px",
                          outline: "none",
                          width: "100%",
                          paddingLeft: "15px",
                        }}
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={e => {
                          setFormData({ ...formData, email: e.target.value });
                        }}
                        required
                      />
                    </fieldset>
                    {formError.IsEmail && (
                      <p
                        style={{
                          color: "red",
                          padding: "5px",
                          fontSize: "16px",
                          marginTop: "13px",
                        }}
                      >
                        Enter Email is required!
                      </p>
                    )}
                    <div className="mt-4">
                      <button
                        type="button"
                        class="btn"
                        style={{
                          width: "100%",
                          backgroundColor: "#4478c7",
                          color: "white",
                          height: "2.8rem",
                        }}
                        onClick={toggle}
                      >
                        Upload Live Selfie
                        <span style={{ marginLeft: "2px", color: "red" }}>
                          *
                        </span>
                      </button>
                      {formError.IsImage && (
                        <p
                          style={{
                            color: "red",
                            padding: "5px",
                            fontSize: "16px",
                            marginTop: "13px",
                          }}
                        >
                          Enter Capture Image is required!
                        </p>
                      )}
                    </div>

                    <div
                      className="termsconditions pt-2"
                      style={{ width: "100%" }}
                    >
                      <input
                        type="checkbox"
                        className="terms"
                        id="terms"
                        name="terms"
                        checked={isCheck}
                        onChange={e => {
                          setIsCheck(e.target.checked);
                        }}
                        style={{ width: "5%", float: "left", marginTop: "5px" }}
                      />

                      <label
                        className="pl-2"
                        for="terms"
                        style={{ width: "95%", fontSize: "15px" }}
                      >
                        <span style={{ color: "black" }}>I agree to the</span>
                        <span style={{ marginLeft: "3px" }}>
                          <Link to={"/termsConditions"}>
                            Terms & conditions
                          </Link>
                        </span>
                        <span style={{ marginLeft: "3px", color: "black" }}>
                          and
                        </span>

                        <span style={{ marginLeft: "3px" }}>
                          <Link to={""}>Privacy Policy</Link>
                        </span>
                      </label>
                    </div>

                    <div className="">
                      <button
                        type="button"
                        class="btn "
                        disabled={isCheck ? false : true}
                        style={{
                          width: "100%",
                          height: "2.8rem",
                          backgroundColor: "#4478c7",
                          color: "white",
                        }}
                        onClick={handleSubmit}
                      >
                        {isTrue ? "Waiting For Registration" : "Submit"}
                        {/* Submit */}
                      </button>
                    </div>
                    <div className="mt-2">
                      <span
                        className="nav-link-inner--text"
                        style={{ color: "black" }}
                      >
                        Already have account?
                        <Link to={"/"} style={{ textDecoration: "none" }}>
                          <span
                            style={{ color: "rgb(57, 103, 204)" }}
                            className="ml-1"
                          >
                            Sign-in
                          </span>
                        </Link>
                      </span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>Image Capture Modal</ModalHeader>
        <div className="p-3">
          <Form onSubmit={HandleSubmitData}>
            <Row>
              <Col lg="12" sm="12" md="12">
                <div
                  className="mainDiv text-center"
                  style={{ fontSize: "20px", fontWeight: "600" }}
                >
                  <span className="mx-2"> Blink Eyes</span>
                  <img
                    className="blinkEye"
                    src={BlinkEye}
                    alt="aa"
                    style={{ height: "50px" }}
                  />
                  <span className="mx-2"> to capture selfie</span>
                </div>
                {model == null ? (
                  <>
                    <h4>Wait while model loading...</h4>
                  </>
                ) : (
                  <>
                    <div className="max-w-md mx-auto  p-4 border rounded-md shadow-lg">
                      <form onSubmit={handleSubmit}>
                        {showWebcam && (
                          <div className="mb-4 mt-4">
                            <Webcam
                              audio={false}
                              ref={webcamRef}
                              screenshotFormat="image/jpeg"
                              className="mb-2"
                              style={{ width: "100%" }}
                            />
                            {/* <button
                              type="button"
                              onClick={handleCapture}
                              className="bg-blue-500 btn btn-info text-white px-4 py-2 rounded-md hover:bg-blue-600"
                            >
                              Take Picture
                            </button> */}
                          </div>
                        )}
                        {formData.image && (
                          <div className="mb-2 d-flex justify-content-center">
                            <img
                              style={{ borderRadius: "12px" }}
                              src={formData.image}
                              alt="Captured"
                              className="mb-1"
                            />
                          </div>
                        )}
                        {/* <button
                            type="submit"
                            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                          >
                            login
                          </button>
                          {backloading && <p>Wait for a minute.</p>}
                          {registered && <p>Registered.</p>} */}
                      </form>
                      {/* <div>
                          <p>
                            Not a user?{" "}
                            <span onClick={() => navigate("/signup")}>
                              Register
                            </span>
                          </p>
                        </div> */}
                    </div>
                  </>
                )}
              </Col>
            </Row>
            {/* <Row>
              <Col lg="12" sm="12" md="12">
                <div className="d-flex justify-content-center pt-2 mt-2">
                  <Button type="submit" color="primary">
                    {LoginButton && LoginButton}
                  </Button>
                </div>
              </Col>
            </Row> */}
          </Form>
        </div>
      </Modal>
      {/* //   iske uper edit */}
    </>
  );
};

export default Register;
