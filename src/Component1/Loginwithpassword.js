// import { useHistory } from "react-router-dom";
import React, { useState } from "react";
import imageuser from "../image/logouserimage.png";
import { Link, useNavigate, useLocation } from "react-router-dom";
import imagelogo from "../image/logo.png";
import axiosConfig from "../axiosConfig";
import swal from "sweetalert";

const Loginwithpassword = () => {
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);
  //   let history = useHistory();
  const navigate = useNavigate();
  const location = useLocation();
  const phoneNumber = location.state;
  //   function handleClick() {
  //     history.push("/Otp-verifly");
  //   }

  const handleFormSubmit = e => {
    e.preventDefault();
    let payload = {
      mobileNo: Number(phoneNumber),
      password: password,
    };
    if (phoneNumber?.length == 10) {
      setIsError(false);
      axiosConfig
        .post("/user/singin-password", payload)
        .then(response => {
          // localStorage.setItem("MobileNUM", JSON.stringify(Number(phone)));
          navigate("/dashboard");
        })
        .catch(error => {
          swal("Something Went Wrong");
          // console.log(error.message);
        });
    } else {
      // setIsError(true);
    }
    // navigate("/dashboard", { replace: true });
    //  navigtate("/otpVerify");
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
                <div style={{ fontSize: "20px", fontWeight: "600" }}>
                  Verify Password
                </div>
              </div>

              <div style={{ margin: "2rem" }}>
                <div className=" mt-2">
                  <div className="mb-3">
                    Please enter the password linked with mobile number
                    <span className="px-2"> {phoneNumber}</span>.
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
                  <form onSubmit={handleFormSubmit}>
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
                          width: "7.5rem",
                        }}
                        for="exampleInputPassword1"
                        class="form-label"
                      >
                        Enter Password
                      </legend>

                      <input
                        style={{
                          border: "none",
                          outline: "none",
                          width: "100%",
                          paddingLeft: "15px",
                          paddingTop: "3px",
                        }}
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={e => {
                          setPassword(e.target.value);
                        }}
                        required
                      />
                    </fieldset>

                    <div className="mt-2">
                      <span className="ml-1">
                        <Link
                          to={"/Forgot/password/otp"}
                          style={{ textDecoration: "none" }}
                        >
                          Forgot Password
                        </Link>
                      </span>
                    </div>
                    <div className="mt-3">
                      <button
                        type="submit"
                        class="btn "
                        style={{
                          width: "100%",
                          backgroundColor: "#4478c7",
                          color: "white",
                          height: "2.8rem",
                        }}
                      >
                        Sign In
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loginwithpassword;
