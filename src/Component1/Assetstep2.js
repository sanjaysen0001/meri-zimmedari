import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/style.css";
import { Input, Table } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Mynavbar from "./Mynavbar";
import Modal from "react-bootstrap/Modal";
import OtpInput from "react-otp-input";
import OTPInput, { ResendOTP } from "otp-input-react";
import { useNavigate } from "react-router-dom";

import axiosConfig from "./../axiosConfig";
function MyVerticallyCenteredModal(props) {
  const [OTP, setOTP] = useState("");
  const [count, setCount] = useState(0);
  const [isCountingComplete, setIsCountingComplete] = useState(false);

  useEffect(() => {
    if (count < 59) {
      const timer = setTimeout(() => {
        setCount(count + 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setIsCountingComplete(true);
    }
  }, [count]);

  const handleReset = () => {
    setCount(0);
    setIsCountingComplete(false);
  };

  return (
    <>
      <div style={{ justifyContent: "center", display: "flex" }}>
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <div
            className="cssfornomineeformobileview"
            style={{ overflow: "auto" }}
          >
            <div style={{ paddingTop: "20px" }}>
              <p
                style={{
                  color: "rgb(82, 114, 161)",
                  textAlign: "center",
                  fontSize: "18px",
                }}
              >
                Please enter the One Time Password sent on
              </p>
              <p
                style={{
                  color: "rgb(82, 114, 161)",
                  textAlign: "center",
                  fontSize: "22px",
                }}
              >
                <span>Phone number 96XX450XX0 </span>
                <span>
                  <Link
                    onClick={props.onHide}
                    to={""}
                    style={{
                      textDecoration: "none",
                      color: "rgb(82, 114, 161)",
                    }}
                  >
                    <span
                      style={{ borderBottom: "1px solid rgb(82, 114, 161)" }}
                    >
                      Change
                    </span>
                  </Link>{" "}
                </span>
              </p>
              <div
                className="cssforboxdesigninotpcenter"
                style={{ marginTop: "40px", marginBottom: "30px" }}
              >
                <OTPInput
                  value={OTP}
                  onChange={otp => {
                    console.log(otp);
                    setOTP(otp);
                  }}
                  autoFocus
                  OTPLength={4}
                  className="cssforboxdesigninotp"
                  otpType="number"
                  disabled={false}
                />
              </div>
              <div
                style={{
                  justifyContent: "center",
                  display: "flex",
                  marginTop: "15px",
                  paddingBottom: "40px",
                }}
              >
                <span>
                  <button
                    className="cssforhandleotpcounttext"
                    onClick={handleReset}
                    style={{
                      border: "none",
                      borderBottom: "none",
                      marginRight: "5px",
                    }}
                    disabled={!isCountingComplete}
                  >
                    <span
                      style={{ borderBottom: "1px solid rgb(82, 114, 161)" }}
                    >
                      Reset
                    </span>
                  </button>
                </span>
                <span className="cssforhandleotpcounttext">
                  {" "}
                  One Time Password in {count} Seconds
                </span>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
}

function MyModalEmail(props) {
  const [OTPE, setOTPE] = useState("");
  const [counte, setCounte] = useState(0);
  const [isCountingCompletee, setIsCountingCompletee] = useState(false);

  useEffect(() => {
    if (counte < 59) {
      const timer = setTimeout(() => {
        setCounte(counte + 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setIsCountingCompletee(true);
    }
  }, [counte]);

  const handleResete = () => {
    setCounte(0);
    setIsCountingCompletee(false);
  };

  return (
    <>
      <div style={{ justifyContent: "center", display: "flex" }}>
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <div
            className="cssfornomineeformobileview"
            style={{ overflow: "auto" }}
          >
            <div style={{ paddingTop: "20px" }}>
              <p
                style={{
                  color: "rgb(82, 114, 161)",
                  textAlign: "center",
                  fontSize: "18px",
                }}
              >
                Please enter the One Time Password sent on
              </p>
              <p
                style={{
                  color: "rgb(82, 114, 161)",
                  textAlign: "center",
                  fontSize: "22px",
                }}
              >
                <span>Email Id kauxxxxxxxxxxxnghxxx@gmail.com</span>
                <span>
                  <Link
                    onClick={props.onHide}
                    to={""}
                    style={{
                      textDecoration: "none",
                      color: "rgb(82, 114, 161)",
                    }}
                  >
                    <span
                      style={{ borderBottom: "1px solid rgb(82, 114, 161)" }}
                    >
                      Change
                    </span>
                  </Link>{" "}
                </span>
              </p>
              <div
                className="cssforboxdesigninotpcenter"
                style={{ marginTop: "40px", marginBottom: "30px" }}
              >
                <OTPInput
                  value={OTPE}
                  onChange={otp => {
                    console.log(otp);
                    setOTPE(otp);
                  }}
                  autoFocus
                  OTPLength={4}
                  className="cssforboxdesigninotp"
                  otpType="number"
                  disabled={false}
                />
              </div>
              <div
                style={{
                  justifyContent: "center",
                  display: "flex",
                  marginTop: "15px",
                  paddingBottom: "40px",
                }}
              >
                <span>
                  {" "}
                  <button
                    className="cssforhandleotpcounttext"
                    onClick={handleResete}
                    style={{
                      border: "none",
                      borderBottom: "none",
                      marginRight: "5px",
                    }}
                    disabled={!isCountingCompletee}
                  >
                    <span
                      style={{ borderBottom: "1px solid rgb(82, 114, 161)" }}
                    >
                      Reset
                    </span>
                  </button>
                </span>
                <span className="cssforhandleotpcounttext">
                  {" "}
                  One Time Password in {counte} Seconds
                </span>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
}

const Assetstep2 = () => {
  const [formValues, setFormValues] = useState([
    {
      nomineeName: "",
      nomineeEmailId: "",
      percentageofShar: null,
      NomineePhoneNumber: null,
      relationWithNominee: "",
    },
  ]);
  const [formError, setFormError] = useState({
    IsnomineeName: false,
    IsnomineeEmailId: false,
    IspercentageofShar: false,
    IsNomineePhoneNumber: false,
    IsrelationWithNominee: false,
  });
  const [modalShowe, setModalShowe] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  const navigate = useNavigate();

  let addFormFields = () => {
    setFormValues([
      ...formValues,
      {
        nomineeName: "",
        nomineeEmailId: "",
        percentageofShar: null,
        NomineePhoneNumber: null,
        relationWithNominee: "",
      },
    ]);
  };
  let removeFormFields = i => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues);
  };
  let handleChange = (i, e) => {
    let newFormValues = [...formValues];
    newFormValues[i][e.target.name] = e.target.value;
    setFormValues(newFormValues);
  };
  const handleNext = () => {
    const newArr = [];
    formValues.filter(el => newArr.push(Number(el.percentageofShar)));
    const sum = newArr.reduce(
      (previousValue, currentValue) => previousValue + currentValue
    );
    let userId = JSON.parse(localStorage.getItem("UserZimmedari"))._id;
    console.log(userId);
    console.log(formValues);
    const payload = {
      userId: userId,
      nominee: formValues,
    };
    formValues.map((value, key) => {
      value.nomineeName == ""
        ? setFormError(prevData => ({ ...prevData, IsnomineeName: true }))
        : setFormError(prevData => ({ ...prevData, IsnomineeName: false }));

      value.nomineeEmailId == ""
        ? setFormError(prevData => ({ ...prevData, IsnomineeEmailId: true }))
        : setFormError(prevData => ({ ...prevData, IsnomineeEmailId: false }));

      value.relationWithNominee == ""
        ? setFormError(prevData => ({
            ...prevData,
            IsrelationWithNominee: true,
          }))
        : setFormError(prevData => ({
            ...prevData,
            IsrelationWithNominee: false,
          }));
      !isNaN(value.percentageofShar)
        ? setFormError(prevData => ({
            ...prevData,
            IspercentageofShar: true,
          }))
        : setFormError(prevData => ({
            ...prevData,
            IspercentageofShar: false,
          }));

      value.NomineePhoneNumber == null || undefined
        ? setFormError(prevData => ({
            ...prevData,
            IsNomineePhoneNumber: true,
          }))
        : setFormError(prevData => ({
            ...prevData,
            IsNomineePhoneNumber: false,
          }));
    });

    if (sum == 100) {
      navigate("/add-asset/step3");
      axiosConfig
        .post("/nominee/save-nominee", payload)
        .then(response => {
          // console.log(response.data);
          navigate("/add-asset/step3");
        })
        .catch(error => {
          console.error(error);
        });
    } else {
      alert("please enter correct share percentage 100% only aaceptable");
    }
  };

  return (
    <>
      <Mynavbar />
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <MyModalEmail show={modalShowe} onHide={() => setModalShowe(false)} />
      <div>
        <div style={{ backgroundColor: "rgb(182, 205, 236)" }}>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-4 col-xl-4 col-lg-4 col-sm-4 ">
                <div style={{ padding: "20px" }}>
                  <div className="row">
                    <div className="col-md-2 col-sm-2 col-lg-2 col-xl-2 col-4">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          color="rgb(197, 128, 123)"
                          width="40"
                          height="40"
                          fill="currentColor"
                          class="bi bi-file-earmark-text"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5" />
                          <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z" />
                        </svg>
                      </span>
                    </div>
                    <div className="col-md-10 col-sm-10 col-lg-10 col-xl-10 col-8">
                      <span>
                        <span style={{ color: "black" }}>Setp 1</span>
                        <span
                          style={{
                            backgroundColor: "rgb(152, 202, 152)",
                            color: " green",
                            fontSize: "14px",
                            marginLeft: "5px",
                            paddingLeft: "8px",
                            paddingRight: "8px",
                            borderRadius: "5px",
                          }}
                        >
                          COMPLETE
                        </span>
                        <br></br>
                        <span style={{ color: "black" }}>
                          Enter Asset Details
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-xl-4 col-lg-4 col-sm-4 ">
                <div style={{ padding: "20px" }}>
                  <div className="row">
                    <div className="col-md-2 col-sm-2 col-lg-2 col-xl-2 col-4">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          color="rgb(240, 117, 108)"
                          width="40"
                          height="40"
                          fill="currentColor"
                          class="bi bi-person-check"
                          viewBox="0 0 16 16"
                        >
                          <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
                          <path d="M8.256 14a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1z" />
                        </svg>
                      </span>
                    </div>
                    <div className="col-md-10 col-sm-10 col-lg-10 col-xl-10 col-8">
                      <span>
                        <span style={{ color: "black" }}>STEP 2</span>
                        <span
                          style={{
                            backgroundColor: "rgb(248, 237, 237)",
                            color: " rgb(197, 128, 123)",
                            fontSize: "14px",
                            marginLeft: "5px",
                            paddingLeft: "8px",
                            paddingRight: "8px",
                            borderRadius: "5px",
                          }}
                        >
                          IN PROCESS
                        </span>

                        <br></br>
                        <span style={{ color: "black" }}>
                          Enter Nominee details
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-xl-4 col-lg-4 col-sm-4 ">
                <div style={{ padding: "20px" }}>
                  <div className="row">
                    <div className="col-md-2 col-sm-2 col-lg-2 col-xl-2 col-4">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          color="#842f0b"
                          width="40"
                          height="40"
                          fill="currentColor"
                          class="bi bi-floppy-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M0 1.5A1.5 1.5 0 0 1 1.5 0H3v5.5A1.5 1.5 0 0 0 4.5 7h7A1.5 1.5 0 0 0 13 5.5V0h.086a1.5 1.5 0 0 1 1.06.44l1.415 1.414A1.5 1.5 0 0 1 16 2.914V14.5a1.5 1.5 0 0 1-1.5 1.5H14v-5.5A1.5 1.5 0 0 0 12.5 9h-9A1.5 1.5 0 0 0 2 10.5V16h-.5A1.5 1.5 0 0 1 0 14.5z" />
                          <path d="M3 16h10v-5.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5zm9-16H4v5.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5zM9 1h2v4H9z" />
                        </svg>
                      </span>
                    </div>
                    <div className="col-md-10 col-sm-10 col-lg-10 col-xl-10 col-8">
                      <span>
                        <span style={{ color: "black" }}>STEP 3</span>

                        <br></br>
                        <span style={{ color: "black" }}>
                          Confirm details & Save
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4 col-lg-4 col-xl-4 col-sm-4"></div>
            <div className="col-md-4 col-lg-4 col-xl-4 col-sm-4">
              <div
                style={{
                  borderBottomLeftRadius: " 50px",
                  borderBottomRightRadius: " 50px",
                  backgroundColor: "rgb(92, 139, 201)",
                  textAlign: "center",
                }}
              >
                <span
                  style={{
                    color: "white",
                    fontSize: "20px",
                    fontFamily: "Calibri",
                  }}
                >
                  Auto-fill from pre-saved nominees
                </span>
                <br></br>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    color="white"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-caret-down-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                  </svg>
                </span>
              </div>
              <div style={{ justifyContent: "center", display: "flex" }}></div>
            </div>
            <div className="col-md-4 col-lg-4 col-xl-4 col-sm-4"></div>
          </div>
        </div>

        <div className="container-fluid">
          {formValues &&
            formValues?.map((ele, index) => (
              <div className="row" key={index} style={{ margin: "1rem" }}>
                <div className="container-fluid">
                  <div className="row" style={{ margin: "1rem" }}>
                    <div className="col-md-4 col-sm-4 col-lg-4 col-xl-4">
                      <div>
                        <div className="mt-4">
                          <div className="mb-3">
                            <form action="#" method="post">
                              <fieldset
                                style={{
                                  color: "rgb(82, 114, 161)",
                                  fontSize: "20px",
                                  fontFamily: "Calibri",
                                  border: "1px solid rgb(114, 158, 216)",
                                  borderRadius: "10px",
                                }}
                              >
                                <legend
                                  style={{
                                    color: "rgb(82, 114, 161)",
                                    fontSize: "20px",
                                    fontFamily: "Calibri",
                                    marginLeft: "15px",
                                    width: "11rem",
                                  }}
                                  for="exampleInputPassword1"
                                  class="form-label"
                                >
                                  Nominee Name
                                  <span style={{ color: "red" }}>*</span>
                                </legend>

                                <input
                                  type="text"
                                  placeholder="XXXXXXXXXXXX"
                                  name="nomineeName"
                                  value={ele.nomineeName || ""}
                                  id="nomineeName"
                                  onChange={e => handleChange(index, e)}
                                  style={{
                                    width: "100%",
                                    border: "none",
                                    paddingLeft: "15px",
                                    paddingBottom: "10px",
                                    marginBottom: "5px",
                                  }}
                                />
                              </fieldset>
                              {formError.IsnomineeName && (
                                <p
                                  style={{
                                    color: "red",
                                    padding: "5px",
                                    fontSize: "16px",
                                    marginTop: "13px",
                                  }}
                                >
                                  Enter Nominee Name is required!
                                </p>
                              )}
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-4 col-lg-4 col-xl-4">
                      <div>
                        <div className="mt-4">
                          <div className="mb-3">
                            <form action="#" method="post">
                              <fieldset
                                style={{
                                  color: "rgb(82, 114, 161)",
                                  fontSize: "20px",
                                  fontFamily: "Calibri",
                                  border: "1px solid rgb(114, 158, 216)",
                                  borderRadius: "10px",
                                  height: "5.3rem",
                                }}
                              >
                                <legend
                                  style={{
                                    color: "rgb(82, 114, 161)",
                                    fontSize: "20px",
                                    fontFamily: "Calibri",
                                    marginLeft: "15px",
                                    width: "14rem",
                                  }}
                                  for="exampleInputPassword1"
                                  class="form-label"
                                >
                                  Relation with Nominee
                                  <span style={{ color: "red" }}>*</span>
                                </legend>

                                <select
                                  class="form-select"
                                  value={ele.relationWithNominee || ""}
                                  onChange={e => handleChange(index, e)}
                                  name="relationWithNominee"
                                  aria-label="Default select example"
                                  style={{
                                    outline: "none",
                                    width: "100%",
                                    float: "right",
                                    border: "none",
                                    paddingLeft: "15px",
                                    paddingBottom: "10px",
                                    marginBottom: "5px",
                                  }}
                                >
                                  <option
                                    selected
                                    Nominee
                                    style={{ float: "left", border: "none" }}
                                  ></option>
                                  <option value="Father">Father</option>
                                  <option value="Wife">Wife</option>
                                  <option value="Son">Son</option>
                                </select>
                              </fieldset>
                              {formError.IsrelationWithNominee && (
                                <p
                                  style={{
                                    color: "red",
                                    padding: "5px",
                                    fontSize: "16px",
                                    marginTop: "13px",
                                  }}
                                >
                                  Enter Nominee Name is required!
                                </p>
                              )}
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-4 col-lg-4 col-xl-4">
                      <div>
                        <div className="mt-4">
                          <div className="mb-3">
                            <form>
                              <fieldset
                                style={{
                                  color: "rgb(82, 114, 161)",
                                  fontSize: "20px",
                                  fontFamily: "Calibri",
                                  border: "1px solid rgb(114, 158, 216)",
                                  borderRadius: "10px",
                                }}
                              >
                                <legend
                                  style={{
                                    color: "rgb(82, 114, 161)",
                                    fontSize: "20px",
                                    fontFamily: "Calibri",
                                    marginLeft: "15px",
                                    width: "13rem",
                                  }}
                                  for="exampleInputPassword1"
                                  class="form-label"
                                >
                                  Percentage of Share
                                  <span style={{ color: "red" }}>*</span>
                                </legend>

                                <Input
                                  type="number"
                                  placeholder="XXXXXXXXXXXX"
                                  id="percentageofShar"
                                  name="percentageofShar"
                                  value={ele.percentageofShar || ""}
                                  onChange={e => handleChange(index, e)}
                                  style={{
                                    width: "100%",
                                    border: "none",
                                    paddingLeft: "15px",
                                    paddingBottom: "10px",
                                    marginBottom: "5px",
                                  }}
                                />
                              </fieldset>
                              {formError.IspercentageofShar && (
                                <p
                                  style={{
                                    color: "red",
                                    padding: "5px",
                                    fontSize: "16px",
                                    marginTop: "13px",
                                  }}
                                >
                                  Enter Percentage of Share is required!
                                </p>
                              )}
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2 col-sm-2 col-lg-2 col-xl-2"></div>
                    <div className="col-md-4 col-sm-4 col-lg-4 col-xl-4">
                      <div>
                        <div className="mt-4">
                          <div className="mb-3">
                            <form>
                              <fieldset
                                style={{
                                  color: "rgb(82, 114, 161)",
                                  fontSize: "20px",
                                  fontFamily: "Calibri",
                                  border: "1px solid rgb(114, 158, 216)",
                                  borderRadius: "10px",
                                  height: "5.3rem",
                                }}
                              >
                                <legend
                                  style={{
                                    color: "rgb(82, 114, 161)",
                                    fontSize: "20px",
                                    fontFamily: "Calibri",
                                    marginLeft: "15px",
                                    width: "15rem",
                                  }}
                                  for="exampleInputPassword1"
                                  class="form-label"
                                >
                                  Nominee Phone Number
                                  <span style={{ color: "red" }}>*</span>
                                </legend>

                                <div className="row">
                                  <div className="col-md-2 col-sm-2 col-lg-2 col-xl-2 col-3">
                                    <span>
                                      <button
                                        style={{
                                          outline: "none",
                                          marginLeft: "2px",
                                          width: "115%",
                                          border:
                                            "1px solid rgb(114, 158, 216)",
                                          textAlign: "center",
                                          height: "3rem",
                                          marginTop: "-10px",
                                          borderRadius: "10px",
                                          fontSize: "18px",
                                        }}
                                      >
                                        +91
                                      </button>
                                    </span>
                                  </div>
                                  <div className="col-md-8 col-sm-8 col-lg-8 col-xl-8 col-6">
                                    <input
                                      maxLength={10}
                                      type="tel"
                                      id="NomineePhoneNumber"
                                      name="NomineePhoneNumber"
                                      value={ele.NomineePhoneNumber || ""}
                                      onChange={e => handleChange(index, e)}
                                      placeholder="965XX50XX0"
                                      style={{
                                        width: "90%",
                                        outline: "none",
                                        border: "none",
                                        paddingLeft: "15px",
                                        paddingBottom: "10px",
                                        marginBottom: "5px",
                                      }}
                                    />
                                  </div>
                                  {formError.IsNomineePhoneNumber && (
                                    <p
                                      style={{
                                        color: "red",
                                        padding: "5px",
                                        fontSize: "16px",
                                        marginTop: "13px",
                                      }}
                                    >
                                      Enter Nominee PhoneNumber is required!
                                    </p>
                                  )}
                                  <div
                                    className="col-md-2 col-sm-2 col-lg-2 col-xl-2 col-3"
                                    style={{ marginLeft: "-10px" }}
                                  >
                                    <span>
                                      <a
                                        onClick={() => setModalShow(true)}
                                        className="btn"
                                        style={{
                                          fontSize: "13px",
                                          width: "115%",
                                          borderRadius: "10px",
                                          backgroundColor: "rgb(32, 119, 190)",
                                          color: "white",
                                          border:
                                            "1px solid rgb(114, 158, 216)",
                                          lineHeight: "15px",
                                          height: "3rem",
                                          marginTop: "-10px",
                                        }}
                                      >
                                        SEND OTP
                                      </a>
                                    </span>
                                  </div>
                                </div>
                              </fieldset>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-4 col-lg-4 col-xl-4">
                      <div>
                        <div className="mt-4">
                          <div className="mb-3">
                            <fieldset
                              style={{
                                color: "rgb(82, 114, 161)",
                                fontSize: "20px",
                                fontFamily: "Calibri",
                                border: "1px solid rgb(114, 158, 216)",
                                borderRadius: "10px",
                                height: "5.3rem",
                              }}
                            >
                              <legend
                                style={{
                                  color: "rgb(82, 114, 161)",
                                  fontSize: "20px",
                                  fontFamily: "Calibri",
                                  marginLeft: "15px",
                                  width: "12rem",
                                }}
                                for="exampleInputPassword1"
                                class="form-label"
                              >
                                Nominee Email ID
                              </legend>
                              <div className="row">
                                <div className="col-md-10 col-sm-10 col-lg-10 col-xl-10 col-9">
                                  <input
                                    type="email"
                                    id="nomineeEmailId"
                                    name="nomineeEmailId"
                                    value={ele.nomineeEmailId || ""}
                                    onChange={e => handleChange(index, e)}
                                    placeholder="kauxxxxxxxxxxxnghxxx@gmail.com"
                                    style={{
                                      width: "90%",
                                      outline: "none",
                                      border: "none",
                                      paddingLeft: "15px",
                                      paddingBottom: "10px",
                                      marginBottom: "5px",
                                    }}
                                  />
                                </div>
                                {formError.IsnomineeEmailId && (
                                  <p
                                    style={{
                                      color: "red",
                                      padding: "5px",
                                      fontSize: "16px",
                                      marginTop: "13px",
                                    }}
                                  >
                                    Enter Nominee NomineeEmailId is required!
                                  </p>
                                )}
                                <div
                                  className="col-md-2 col-sm-2 col-lg-2 col-xl-2 col-3"
                                  style={{ marginLeft: "-10px" }}
                                >
                                  <span>
                                    <a
                                      onClick={() => setModalShowe(true)}
                                      className="btn "
                                      style={{
                                        fontSize: "13px",
                                        backgroundColor: "rgb(32, 119, 190)",
                                        color: "white",
                                        width: "115%",
                                        borderRadius: "10px",
                                        border: "1px solid rgb(114, 158, 216)",
                                        lineHeight: "15px",
                                        height: "3rem",
                                        marginTop: "-10px",
                                      }}
                                    >
                                      SEND OTP
                                    </a>
                                  </span>
                                </div>
                              </div>
                            </fieldset>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2 col-sm-2 col-lg-2 col-xl-2"></div>
                  </div>
                </div>
                <div className="container-fluid">
                  <div class="row">
                    <div class="col-md-10 col-sm-10 col-lg-10 col-xl-10 col-9"></div>
                    <div class="col-md-2 col-sm-2 col-lg-2 col-xl-2 col-3">
                      <div
                        style={{ justifyContent: "center", display: "right" }}
                      >
                        <button
                          className="btn btn-danger"
                          onClick={() => removeFormFields(index)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="container mt-5" style={{ paddingBottom: "60px" }}>
          <div style={{ float: "left" }}>
            <Link to={"/add-asset/policy"} style={{ textDecoration: "none" }}>
              <p
                style={{
                  color: "rgb(82, 114, 161)",
                  fontSize: "20px",
                  fontWeight: "500",
                }}
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-arrow-left"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
                    />
                  </svg>
                </span>
                <span className="ml-3">BACK</span>
              </p>
            </Link>
          </div>
          <div style={{ float: "right" }}>
            <button
              onClick={addFormFields}
              className="ml-2 btn"
              style={{
                border: "none",
                backgroundColor: "rgb(182, 205, 236)",
                width: "7rem",
                borderRadius: "5px",
                lineHeight: "15px",
              }}
            >
              Add More Nominee
            </button>

            <button
              className="ml-2"
              onClick={handleNext}
              style={{
                border: "none",
                backgroundColor: "rgb(182, 205, 236)",
                padding: "8px",
                width: "7rem",
                borderRadius: "5px",
              }}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Assetstep2;
