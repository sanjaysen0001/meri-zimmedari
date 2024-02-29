import React, { useEffect, useState, useRef } from "react";
import Webcam from "react-webcam";

import { useNavigate } from "react-router-dom";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import * as tf from "@tensorflow/tfjs";
import { Button, Col, Form, Input, Label, Row } from "reactstrap";
// import axiosConfig from "./../axiosConfig";
// import axiosConfigOne from "./../axiosCofigOne";
// import { Login, Pan_Verify, SaveData } from "../EndPoint/EndPoint";
// import logo from ".././assets/images/logo.png";
import { RiLogoutCircleRLine } from "react-icons/ri";
import swal from "sweetalert";
import { FaCheck } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";

const faceLandmarksDetection = require("@tensorflow-models/face-landmarks-detection");

const Loginform = args => {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const [formData, setFormData] = useState({
    mobile: "",
    image: null,
  });
  const webcamRef = useRef(null);
  const [showWebcam, setShowWebcam] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const [PanVerify, setPanVerify] = useState(false);
  const [text, setText] = useState("modal loading...");
  const [count, setCount] = useState(0);
  const [model, setModel] = useState(null);
  const [maxLeft, setMaxLeft] = useState(0);
  const [maxRight, setMaxRight] = useState(0);
  const [backloading, setBackloading] = useState(false);
  const [Registration, setRegistration] = useState(false);
  const [registered, setRegistered] = useState(false);
  const [LoginData, setLogin] = useState({});
  const [LoginScreen, setLoginScreen] = useState(false);
  const [LoginButton, setLoginButton] = useState("Submit");

  useEffect(() => {
    tf.setBackend("webgl");
    loadModel();
    // let userData = JSON.parse(localStorage.getItem("userData"));
    // if (!!userData) {
    //   // navigate("/home");
    //   setLoginScreen(false);
    // }
  }, []);

  const loadModel = async () => {
    console.log("loading modal...");
    // Load the MediaPipe Facemesh package.
    faceLandmarksDetection
      .load(faceLandmarksDetection.SupportedPackages.mediapipeFacemesh, {
        maxFaces: 1,
      })
      .then(model => {
        console.log(model);
        setModel(model);
        setText("ready for capture");
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleClick = () => {
    console.log("handleClick");
    const newIsOpen = !isOpen;
    const newCount = isOpen ? count : 0;
    setIsOpen(newIsOpen);
    setCount(newCount);
  };
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        setText("detecting...");
        console.log("detecting...");
        detectPoints();
      }, 2000);
    }
  }, [isOpen]);

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
          //console.log("cant", countN);
          console.log("isopen", isOpen);
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
      console.log(error);
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
    console.log("isopen:::::", isOpen);
    let result = false;
    //    if ((maxLeft > limitOpenEye) && (maxRight > limitOpenEye)) {
    if (eyeLeft < baseCloseEye && eyeRight < baseCloseEye) {
      result = true;
      setIsOpen(false);
      console.log("isopen", isOpen);
    }
    console.log("isopen", isOpen);
    //    }

    console.log(result);

    return result;
  };

  const calculateDistance = (x1, y1, x2, y2) => {
    return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
  };

  const videoConstraints = {
    width: 720,
    height: 480,
    facingMode: "user",
  };
  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleInputChange = e => {
    if (e.target.name == "panNo") {
      setLogin({
        ...LoginData,
        [e.target.name]: e.target.value.toUpperCase(),
      });
    } else {
      setLogin({
        ...LoginData,
        [e.target.name]: e.target.value,
      });
    }
  };
  const capture = () => {
    setShowWebcam(true);
    handleClick();
  };

  const handleCapture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setFormData({
      ...formData,
      image: imageSrc,
    });
    setShowWebcam(false);
    toggle();
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

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("mobile", formData.mobile);
      formDataToSend.append("image", dataURItoBlob(formData.image));
      setBackloading(true);
      // const response = await axiosConfigOne
      //   .post("/login", formDataToSend, {
      //     headers: {
      //       "Content-Type": "multipart/form-data",
      //     },
      //   })
      //   .then(res => {
      //     console.log(res);
      //   });
    

      // console.log("Response", response);
      setRegistered(true);
      navigate("/home");

      // Reset form after successful submission
      setFormData({
        mobile: "",
        image: null,
      });
    } catch (error) {
      console.error("Error registering:", error);
    }
  };
  const HandleSubmitData = async e => {
    e.preventDefault();

    setLoginButton("Submitting...");

    // console.log(LoginData);
    // console.log(formData);
    let formdata = new FormData();
    formdata.append("image", dataURItoBlob(formData.image));
    formdata.append("panNo", LoginData?.panNo);
    formdata.append("name", LoginData?.name);

    if (PanVerify) {
      // await axiosConfigOne
      //   .post("/register", formdata)
      //   .then(res => {
      //     swal("Sucess", "Data Saved Sucessfully");
        
      //     setLoginButton("Submit");
      //     toggle();
      //     setPanVerify(false);

      //   })
      //   .catch(err => {
      //     setLoginButton("Submit");
      //     console.log(err.response);
      //     if (!!err.response?.data?.message) {
      //       swal("Error", err.response?.data?.message);
      //     }
      //   });
    } else {
      swal("Error", "Verify Pan Number First");
    }
  };

  const handleCheck = () => {
    if (isOpen) {
      setTimeout(() => {
        setText("detecting...");
        console.log("detecting...");
        detectPoints();
      }, 1500);
    }
  };
  const handleLoginSubmit = async e => {
    e.preventDefault();
    setLoginButton("Loading...");
    // await axiosConfig
    //   .post(Login, LoginData)
    //   .then(res => {
    //     setLoginButton("Submit");
       

    //     if (res?.data?.status) {
    //       capture();
    //       localStorage.setItem("userData", JSON.stringify(res?.data.user));
    //       setLoginScreen(false);
          
    //     }

    //     console.log(res);
    //   })
    //   .catch(err => {
    //     setLoginButton("Submit");

    //     console.log(err.response);
    //     setLoginScreen(true);

    //     swal("Error", err?.response?.data?.message, "error");
    //   });
  };

  const handleVerifyPancard = async () => {
    if (LoginData?.panNo) {
      debugger;
      let payload = {
        panNo: LoginData?.panNo,
      };
      // await axiosConfig
      //   .post(Pan_Verify, payload)
      //   .then(res => {
      //     let fullname = `${res?.data?.User?.firstName} ${res?.data?.User?.lastName}`;
      //     setLogin({
      //       ...LoginData,
      //       ["name"]: fullname,
      //     });
      //     console.log(res);

      //     setPanVerify(true);
      //   })
      //   .catch(err => {
      //     setPanVerify(false);

      //     console.log(err.response);
      //     if (!!err.response?.data?.message) {
      //       swal("Error", err.response?.data?.message);
      //     }
      //   });
    }
  };
  return (
    <>
      <>
        {/* {model == null ? (
          <>
            <h5>Wait while model loading...</h5>
          </>
        ) : (
          <>
            <div className="max-w-md mx-auto mt-10 p-4 border rounded-md shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Login</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block mb-1" htmlFor="mobileNumber">
                    Mobile Number:
                  </label>
                  <input
                    type="text"
                    id="mobileNumber"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    className="border rounded-md px-2 py-1 w-full"
                    required
                  />
                </div>

                <div className="mb-4">
                  <button
                    type="button"
                    onClick={capture}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                  >
                    Capture Image
                  </button>
                  <p>{text}</p>
                </div>
                {showWebcam && (
                  <div className="mb-4">
                    <Webcam
                      audio={false}
                      ref={webcamRef}
                      screenshotFormat="image/jpeg"
                      className="mb-2"
                    />
                    <button
                      type="button"
                      onClick={handleCapture}
                      className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                    >
                      Take Picture
                    </button>
                  </div>
                )}
                {formData.image && (
                  <div className="mb-4">
                    <img src={formData.image} alt="Captured" className="mb-2" />
                  </div>
                )}
                <button
                  type="submit"
                  className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                >
                  login
                </button>
                {backloading && <p>Wait for a minute.</p>}
                {registered && <p>Registered.</p>}
              </form>
              <div>
                <p>
                  Not a user?{" "}
                  <span onClick={() => navigate("/signup")}>Register</span>
                </p>
              </div>
            </div>
          </>
        )} */}
      </>

      <div className="max-w-md mx-auto mt-10 p-4 border rounded-md shadow-lg">
        {!LoginScreen && !LoginScreen && (
          <div className="d-flex justify-content-end">
            <span
              title=" Click to LogOut"
              onClick={() => {
                localStorage.removeItem("userData");
                window.location.reload();
              }}
              style={{ cursor: "pointer" }}
            >
              <RiLogoutCircleRLine color="red" size={25} />
            </span>
          </div>
        )}
        <div className="d-flex justify-content-center">
          <img height={250} width={250} src="" alt="image" />
        </div>
        <div className="d-flex justify-content-center mb-2">
          {LoginScreen && LoginScreen && (
            <h2 className="text-2xl font-bold mb-4">Login</h2>
          )}
        </div>
        {model == null ? (
          <>
            <div className="d-flex justify-content-center">
              <span style={{ color: "red" }}>Wait while Loading...</span>
            </div>
          </>
        ) : null}
        {LoginScreen && LoginScreen ? (
          <>
            <Form onSubmit={handleLoginSubmit}>
              <Row>
                <Col lg="12" sm="12" md="12">
                  <Label>Email id</Label>
                  <Input
                    required
                    name="email"
                    onChange={handleInputChange}
                    value={LoginData?.email}
                    type="email"
                    placeholder="Enter Email to Login"
                  />
                </Col>
                <Col lg="12" sm="12" md="12">
                  <Label className="mt-1">Password</Label>
                  <Input
                    required
                    name="password"
                    onChange={handleInputChange}
                    value={LoginData?.password}
                    type="password"
                    placeholder="Enter Password to Login"
                  />
                </Col>
              </Row>
              <Row>
                <Col lg="12" sm="12" md="12">
                  <div className="d-flex justify-content-center pt-2 mt-2">
                    <Button type="submit" color="primary">
                      {LoginButton && LoginButton}
                    </Button>
                  </div>
                </Col>
              </Row>
            </Form>
          </>
        ) : (
          <>
            <Row>
              <Col lg="12" sm="12" md="12">
                {model == null ? null : (
                  <>
                    <div className="max-w-md mx-auto  p-4 border rounded-md shadow-lg">
                      <form onSubmit={handleSubmit}>
                        {/* <div className="mb-4">
                            <button
                              type="button"
                              onClick={capture}
                              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                            >
                              Capture Image
                            </button>
                            <p>{text}</p>
                          </div> */}
                        {showWebcam && (
                          <div className="mb-4">
                            <Webcam
                              audio={false}
                              ref={webcamRef}
                              screenshotFormat="image/jpeg"
                              className="mb-2"
                            />
                            <button
                              type="button"
                              onClick={handleCapture}
                              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                            >
                              Take Picture
                            </button>
                          </div>
                        )}
                        {formData.image && (
                          <div className="mb-2">
                            <img
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
                          Register new User
                        </button> */}
                        {/* {backloading && <p>Wait for a minute.</p>} */}
                        {registered && <p>Registered.</p>}
                      </form>
                      <Row>
                        <Col>
                          {Registration && Registration ? null : (
                            <>
                              <div>
                                <p style={{ fontSize: "12px" }}>
                                  Not a user?{" "}
                                  <span
                                    style={{ cursor: "pointer" }}
                                    onClick={() => {
                                      capture();
                                      setRegistration(true);
                                      // navigate("/signup")
                                    }}
                                  >
                                    <span style={{ color: "blue" }}>
                                      Register
                                    </span>
                                  </span>
                                </p>
                              </div>
                            </>
                          )}
                        </Col>
                    {/*
                        <Col lg="7" md="7" sm="12">
                          <div>
                            <p style={{ fontSize: "12px" }}>
                              user?{" "}
                              <span
                                style={{ cursor: "pointer" }}
                                onClick={() => {
                                  // capture();
                                  navigate("/Home");
                                }}
                              >
                                <span style={{ color: "green" }}>
                                  Mark Attendance
                                </span>
                              </span>
                            </p>
                          </div>
                              </Col> */}
                      </Row>
                    </div>
                  </>
                )}
              </Col>
            </Row>
            {/* <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block mb-1" htmlFor="mobileNumber">
                  Mobile Number:
                </label>
                <input
                  type="text"
                  id="mobileNumber"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="border rounded-md px-2 py-1 w-full"
                  required
                />
              </div>

              <div className="mb-4">
                <button
                  type="button"
                  onClick={capture}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                >
                  Capture Image
                </button>
                <p>{text}</p>
              </div>
              {showWebcam && (
                <div className="mb-4">
                  <Webcam
                    audio={false}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    className="mb-2"
                  />
                  <button
                    type="button"
                    onClick={handleCapture}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                  >
                    Take Picture
                  </button>
                </div>
              )}
              {formData.image && (
                <div className="mb-4">
                  <img src={formData.image} alt="Captured" className="mb-2" />
                </div>
              )}
              <button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
              >
                login
              </button>
              {backloading && <p>Wait for a minute.</p>}
              {registered && <p>Registered.</p>}
            </form>
            <div>
              <p>
                Not a user?{" "}
                <span onClick={() => navigate("/signup")}>Register</span>
              </p>
            </div> */}
          </>
        )}
      </div>
      {/* {model == null ? (
        <>
          <h4>Wait while model loading...</h4>
        </>
      ) : (
        <>
          <div className="max-w-md mx-auto mt-10 p-4 border rounded-md shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            {LoginScreen && LoginScreen ? (
              <>
                <Form onSubmit={handleLoginSubmit}>
                  <Row>
                    <Col lg="12" sm="12" md="12">
                      <Label>Email id</Label>
                      <Input
                        required
                        name="email"
                        onChange={handleInputChange}
                        value={LoginData?.email}
                        type="email"
                        placeholder="Enter Email to Login"
                      />
                    </Col>
                    <Col lg="12" sm="12" md="12">
                      <Label className="mt-1">Password</Label>
                      <Input
                        required
                        name="password"
                        onChange={handleInputChange}
                        value={LoginData?.password}
                        type="password"
                        placeholder="Enter Password to Login"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col lg="12" sm="12" md="12">
                      <div className="d-flex justify-content-center pt-2 mt-2">
                        <Button type="submit" color="primary">
                          Submit
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </Form>
              </>
            ) : (
              <>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label className="block mb-1" htmlFor="mobileNumber">
                      Mobile Number:
                    </label>
                    <input
                      type="text"
                      id="mobileNumber"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      className="border rounded-md px-2 py-1 w-full"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <button
                      type="button"
                      onClick={capture}
                      className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                    >
                      Capture Image
                    </button>
                    <p>{text}</p>
                  </div>
                  {showWebcam && (
                    <div className="mb-4">
                      <Webcam
                        audio={false}
                        ref={webcamRef}
                        screenshotFormat="image/jpeg"
                        className="mb-2"
                      />
                      <button
                        type="button"
                        onClick={handleCapture}
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                      >
                        Take Picture
                      </button>
                    </div>
                  )}
                  {formData.image && (
                    <div className="mb-4">
                      <img
                        src={formData.image}
                        alt="Captured"
                        className="mb-2"
                      />
                    </div>
                  )}
                  <button
                    type="submit"
                    className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                  >
                    login
                  </button>
                  {backloading && <p>Wait for a minute.</p>}
                  {registered && <p>Registered.</p>}
                </form>
                <div>
                  <p>
                    Not a user?{" "}
                    <span onClick={() => navigate("/signup")}>Register</span>
                  </p>
                </div>
              </>
            )}
          </div>
        </>
      )} */}
      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>Submit Details here</ModalHeader>
        <div className="p-3">
          <Form onSubmit={HandleSubmitData}>
            <Row>
              <Col className="p-2" lg="8" sm="8" md="8">
                <Label>Pan Number *</Label>
                <Input
                  required
                  name="panNo"
                  onChange={handleInputChange}
                  value={LoginData?.panNo}
                  type="text"
                  placeholder="Enter Pan Number..."
                />
                {LoginData?.panNo?.length == 10 && !PanVerify && (
                  <span
                    onClick={handleVerifyPancard}
                    style={{
                      color: "green",
                      cursor: "pointer",
                      fontSize: "10px",
                    }}
                  >
                    Click to Verify Pancard
                  </span>
                )}
                {PanVerify && PanVerify ? (
                  <>
                    <span
                      style={{
                        color: "green",
                        cursor: "pointer",
                        fontSize: "10px",
                      }}
                    >
                      Verified
                    </span>
                  </>
                ) : (
                  <>
                    <span
                      style={{
                        color: "red",
                        cursor: "pointer",
                        fontSize: "10px",
                      }}
                    >
                      {/* UnVerified */}
                    </span>
                  </>
                )}
              </Col>
              <Col className="p-2" lg="8" sm="8" md="8">
                <Label className="mt-1">Name *</Label>
                <Input
                  required
                  disabled
                  name="name"
                  onChange={handleInputChange}
                  value={LoginData?.name}
                  type="text"
                  placeholder="Name"
                />
              </Col>
              <Col lg="12" sm="12" md="12">
                {model == null ? (
                  <>
                    <h1>Wait while model loading...</h1>
                  </>
                ) : (
                  <>
                    <div className="max-w-md mx-auto  p-4 border rounded-md shadow-lg">
                      <form onSubmit={handleSubmit}>
                        {/* <div className="mb-4">
                            <button
                              type="button"
                              onClick={capture}
                              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                            >
                              Capture Image
                            </button>
                            <p>{text}</p>
                          </div> */}
                        {showWebcam && (
                          <div className="mb-4">
                            <Webcam
                              audio={false}
                              ref={webcamRef}
                              screenshotFormat="image/jpeg"
                              className="mb-2"
                            />
                            {/* <button
                                type="button"
                                onClick={handleCapture}
                                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
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
            <Row>
              <Col lg="12" sm="12" md="12">
                <div className="d-flex justify-content-center pt-2 mt-2">
                  <Button type="submit" color="primary">
                    {LoginButton && LoginButton}
                  </Button>
                </div>
              </Col>
            </Row>
          </Form>
        </div>
      </Modal>
    </>
  );
};

export default Loginform;
