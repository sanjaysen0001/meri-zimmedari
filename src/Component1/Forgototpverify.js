import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import axiosConfig from "../axiosConfig";
import imagelogo from "../image/logo.png";
const Forgototpverify = () => {
  const [count, setCount] = useState(60);
  const [isCountingComplete, setIsCountingComplete] = useState(false);
  const [IsvalidOtp, setIsValidOtp] = useState(false);
  const [otp, setOtp] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const phoneNumber = location.state;

  // useEffect(() => {
  //   // let mobile = JSON.parse(localStorage.getItem("MobileNUM"));
  //   // console.log(mobile);
  // }, []);

  useEffect(() => {
    if (count > 0) {
      setIsCountingComplete(false);
      const timer = setTimeout(() => {
        if (count > 0) setCount(count - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setIsCountingComplete(true);
    }
  }, [count]);

  const handleReset = () => {
    if (count > 0) {
      setIsCountingComplete(false);
      const timer = setTimeout(() => {
        if (count > 0) setCount(count - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setIsCountingComplete(true);
      setCount(60);
    }
  };
  const handleOtpVerify = () => {
    let payload = {
      otp: Number(otp),
      mobileNo: Number(phoneNumber),
    };
    axiosConfig
      .post("/otp-verify", payload)
      .then(response => {
        //
        if (response.data.success == "ok") {
          setIsValidOtp(false);
          localStorage.setItem(
            "UserZimmedari",
            JSON.stringify(response.data.User)
          );
          navigate("/dashboard", { replace: true });
        } else {
          navigate("/registration", { replace: true });
        }
      })
      .catch(error => {
        setIsValidOtp(true);
      });
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
          <div className="col-md-4 col-sm-2 col-lg-4 col-xl-4">
            <div></div>
          </div>
          <div className="col-md-4 col-sm-4 col-lg-4 col-xl-4 ">
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
                <div style={{ fontSize: "20px", fontWeight: "600" }}>
                  Verify OTP - Forgot Password
                </div>
              </div>

              <div style={{ margin: "2rem" }}>
                <div className=" mt-2">
                  <div>
                    <span className="p-1">
                      {" "}
                      Please enter 6 digit OTP sent on mobile number
                    </span>
                    {JSON.parse(localStorage.getItem("MobileNUM"))}.
                  </div>
                  <Link to={"/"} style={{ textDecoration: "none" }}>
                    <div
                      style={{
                        color: "#4478c7",
                        fontWeight: "600",
                        marginTop: "5px",
                      }}
                    >
                      Change mobile number
                    </div>
                  </Link>
                </div>
                <div className="mt-3">
                  <form>
                    {IsvalidOtp ? (
                      <span
                        style={{
                          color: "red",
                          padding: "2px",
                          fontSize: "16px",
                        }}
                      >
                        Invalid OTP
                      </span>
                    ) : null}
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
                          width: "5.5rem",
                        }}
                        for="exampleInputPassword1"
                        class="form-label"
                      >
                        Enter OTP
                        <span style={{ marginLeft: "2px", color: "red" }}>
                          *
                        </span>
                      </legend>

                      <input
                        style={{
                          border: "none",
                          paddingTop: "4px",
                          outline: "none",
                          width: "100%",
                          paddingLeft: "15px",
                        }}
                        max={6}
                        type="tel"
                        id="mobile"
                        name="mobile"
                        pattern="[0-9]{10}"
                        required
                      />
                    </fieldset>

                    <div className="mt-2">
                      <span style={{ fontSize: "13px", color: "gray" }}>
                        Didn't receive the OTP?
                        <button
                          type="button"
                          style={{
                            cursor: "pointer",
                            border: "none",
                            padding: "0 4px",
                            textDecoration: "underline",
                          }}
                          disabled={isCountingComplete ? false : true}
                          onClick={handleReset}
                        >
                          Resend
                        </button>{" "}
                        after {count} Seconds
                      </span>
                      <span className="ml-1"></span>
                    </div>
                    <div className="mt-3">
                      <Link to={"/forgot/password"}>
                        <button
                          type="button"
                          class="btn "
                          style={{
                            width: "100%",
                            backgroundColor: "#4478c7",
                            color: "white",
                            height: "2.8rem",
                          }}
                        >
                          Submit
                        </button>
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Forgototpverify;
