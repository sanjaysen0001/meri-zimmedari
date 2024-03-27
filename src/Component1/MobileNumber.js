import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import imagelogo from "../image/logo.png";
import Webcam from "react-webcam";
import * as tf from "@tensorflow/tfjs";
import axiosConfig from "../axiosConfig";
import { Link, useNavigate } from "react-router-dom";

import "./Otpveri";
const faceLandmarksDetection = require("@tensorflow-models/face-landmarks-detection");

const MobileNumber = () => {
  let userId = useParams();

  const webcamRef = useRef(null);
  const [showWebcam, setShowWebcam] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [count, setCount] = useState(0);
  const [maxLeft, setMaxLeft] = useState(0);
  const [maxRight, setMaxRight] = useState(0);
  const [model, setModel] = useState(null);
  const [text, setText] = useState("modal loading...");
  const [Registration, setRegistration] = useState(false);
  const [backloading, setBackloading] = useState(false);
  const [registered, setRegistered] = useState(false);
  const [formData, setFormData] = useState({
    image: null,
  });
  // for face close

  // const [modal, setModal] = useState(false);
  const [phone, setPhone] = useState("");
  const [isError, setIsError] = useState(false);
  const [IsID, setIsID] = useState(false);
  // const navigate = useNavigate();

  useEffect(() => {
    let userData = JSON.parse(localStorage.getItem("UserZimmedari"));
    let myArray = window.location.href.split("/");
    console.log(myArray);
    let id = myArray[myArray.length - 1];
    console.log(id);
    if (id == userData._id) {
      setIsID(true);
    }
    console.log("Login IDs", userData._id);
  }, []);
  useEffect(() => {
    tf.setBackend("webgl");
    loadModel();
  }, []);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        setText("detecting...");
        detectPoints();
      }, 2000);
    }
  }, [isOpen]);

  const loadModel = async () => {
    console.log("loading modal...Loginn!");
    faceLandmarksDetection
      .load(faceLandmarksDetection.SupportedPackages.mediapipeFacemesh, {
        maxFaces: 1,
      })
      .then(model => {
        setModel(model);
        console.log(model);
        setText("ready for capture");
      })
      .catch(err => {
        console.log(err);
      });
  };
  const handleClick = () => {
    console.log("Handle Click");
    const newIsOpen = !isOpen;
    const newCount = isOpen ? count : 0;
    setIsOpen(newIsOpen);
    setCount(newCount);
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
    // console.log("Image Captured", imageSrc);
    setShowWebcam(false);
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

  const handleMobile = () => {
    let payload = {
      mobileNo: phone,
    };
    // if (phone.length === 10) {
    //   axiosConfig
    //     .post("/save-mobile", payload)
    //     .then(response => {
    //       console.log(response.data.message);
    //     })
    //     .catch(error => {
    //       console.log("Mobile Number Not Registered");
    //       console.log(error.message);
    //     });
    //   navigate("/login/otp", { state: phone });
    // } else {
    //   setIsError(true);
    // }
  };
  const handleChange = e => {
    const value = e.target.value;
    setPhone(value);
    if (value.length === 10) {
      setIsError(false);
    } else {
      setIsError(true);
    }
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
                <div class=" col-md-2 col-sm-9 ">
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
          <div className="col-md-4 col-sm-10 col-lg-4 col-xl-4 ">
            <div
              className="gdfhagfjhagjhfgagfjhaf"
              style={{
                margin: "1rem",
                marginTop: "4rem",
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
                <div
                  style={{
                    fontSize: "20px",
                    fontWeight: "600",
                    textAlign: "center",
                  }}
                >
                  Meri Zimmedari
                </div>
              </div>

              <div style={{ margin: "2rem" }}>
                <div className="mt-3">
                  {IsID ? (
                    <>
                      <form>
                        <fieldset
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
                              width: "8rem",
                            }}
                            for="exampleInputPassword1"
                            class="form-label"
                          >
                            Mobile Number
                          </legend>
                          <button
                            id="country"
                            name="country"
                            style={{ border: "none", backgroundColor: "white" }}
                          >
                            <option
                              value="+91"
                              style={{
                                background: "transparent",
                                fontSize: "16px",
                              }}
                            >
                              IND (+91)
                            </option>
                          </button>
                          <input
                            required
                            maxLength={10}
                            className=""
                            style={{
                              border: "none",
                              outline: "none",
                              width: "60%",
                              fontSize: "17px",
                              paddingTop: "8px",
                            }}
                            type="tel"
                            id="mobile"
                            name="mobile"
                            pattern="[0-9]{10}"
                            error={isError}
                            value={phone}
                            onChange={handleChange}
                          />

                          {isError && (
                            <p
                              style={{
                                color: "red",
                                padding: "5px",
                                fontSize: "16px",
                                marginTop: "13px",
                              }}
                            >
                              Enter valid 10-digit mobile number
                            </p>
                          )}
                        </fieldset>

                        <div className="mt-5">
                          <button
                            type="button"
                            class="btn "
                            style={{
                              width: "100%",
                              backgroundColor: "#4478c7",
                              color: "white",
                              height: "2.8rem",
                            }}
                            onClick={handleMobile}
                          >
                            Submit
                          </button>
                        </div>
                      </form>
                    </>
                  ) : (
                    <h3>This is second conditions </h3>
                  )}
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNumber;
