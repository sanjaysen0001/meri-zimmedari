import React, { useState } from "react";
import { Link } from "react-router-dom";
import Mynavbar from "./Mynavbar";
import Modal from "react-bootstrap/Modal";
import axiosConfig from "../axiosConfig";
import swal from "sweetalert";
function Createpassword(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header
        style={{
          justifyContent: "right",
          display: "flex",
          padding: "0.1rem 0.1rem",
          border: "none",
        }}
      ></Modal.Header>
      <Modal.Body style={{ textAlign: "center" }}>
        New password sent to anc.gmail.com
      </Modal.Body>
    </Modal>
  );
}
function Savepassword(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header
        style={{
          justifyContent: "right",
          display: "flex",
          padding: "0.1rem 0.1rem",
          border: "none",
        }}
      ></Modal.Header>
      <Modal.Body style={{ textAlign: "center" }}>
        Password Reset Successfully
      </Modal.Body>
    </Modal>
  );
}

const Manageaccount = () => {
  // const [modalShow, setModalShow] = useState(false);
  const [modalShow1, setModalShow1] = useState(false);
  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [ConfirmPass, setConfirmPass] = useState("");
  const [isError, setIsError] = useState(false);

  const handleGeneratePassword = () => {
    let userData = JSON.parse(localStorage.getItem("UserZimmedari"));

    axiosConfig
      .post("/user/generate-password", {
        email: userData.email,
      })
      .then(response => {
        swal("Success", `New password sent to ${userData.email}`, "success");
      })
      .catch(error => {
        swal("Something Went Wrong");
        console.log(error);
      });
  };
  const handleSavePassWord = () => {
    debugger;
    let payload = {
      oldPassword: oldPass,
      newPassword: newPass,
      confirmPassword: ConfirmPass,
    };
    if (newPass == ConfirmPass) {
      setIsError(false);
      axiosConfig
        .post("/user/save-password", payload)
        .then(response => {
          console.log(response.data.message);
          setOldPass("");
          setNewPass("");
          setConfirmPass("");
          swal("Success", `response.data.message`, "Success");
          //  localStorage.setItem("MobileNUM", JSON.stringify(Number(phone)));
        })
        .catch(error => {
          swal("Something Went Wrong");
          console.log(error.message);
        });
    } else {
      setIsError(true);
    }
  };

  // () => setModalShow1(true);
  return (
    <>
      <Mynavbar />
      <Savepassword show={modalShow1} onHide={() => setModalShow1(false)} />
      {/* <Createpassword show={modalShow} onHide={() => setModalShow(false)} /> */}
      <div>
        <p
          style={{
            fontSize: "22px",
            color: "rgb(43, 77, 129)",
            fontWeight: "400",
            backgroundImage:
              "linear-gradient(to right, rgb(194, 215, 233) , rgb(229, 234, 238))",
          }}
        >
          <span className="ml-3">My Account </span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              class="bi bi-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
              />
            </svg>
          </span>
          <span> Manage Account</span>
        </p>
      </div>
      <div className="container">
        <div className="mt-5">
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
                marginBottom: "-5px",
                fontSize: "28px",
                textAlign: "center",
                fontFamily: "Calibri",
                marginLeft: "15px",
                width: "13.5rem",
              }}
              for="exampleInputPassword1"
              class="form-label"
            >
              Reset Password
            </legend>
            <div className="row m-2">
              <div className="col-md-4  col-xl-4 xol-lg-4">
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
                      marginBottom: "-5px",
                      fontSize: "16px",
                      fontFamily: "Calibri",
                      marginLeft: "15px",
                      width: "7rem",
                      paddingLeft: "5px",
                    }}
                    for="exampleInputPassword1"
                    class="form-label"
                  >
                    Old Password
                  </legend>
                  <input
                    type="password"
                    style={{
                      border: "none",
                      width: "95%",
                      outline: "none",
                      paddingLeft: "15px",
                      marginTop: "-15px",
                      paddingBottom: "10px",
                      marginBottom: "5px",
                    }}
                    value={oldPass}
                    id="password"
                    name="password"
                    onChange={e => setOldPass(e.target.value)}
                  />
                </fieldset>
              </div>
              <div className="col-md-4  col-xl-4 xol-lg-4">
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
                      marginBottom: "-5px",
                      fontSize: "16px",
                      fontFamily: "Calibri",
                      marginLeft: "15px",
                      width: "7rem",
                      paddingLeft: "5px",
                    }}
                    for="exampleInputPassword1"
                    class="form-label"
                  >
                    New Password
                  </legend>
                  <input
                    type="password"
                    style={{
                      border: "none",
                      width: "95%",
                      outline: "none",
                      paddingLeft: "15px",
                      marginTop: "-15px",
                      paddingBottom: "10px",
                      marginBottom: "5px",
                    }}
                    name="newpass"
                    value={newPass}
                    onChange={e => setNewPass(e.target.value)}
                  />
                </fieldset>
                {isError && (
                  <p
                    style={{
                      color: "red",
                      padding: "5px",
                      fontSize: "16px",
                      marginTop: "13px",
                    }}
                  >
                    Value MissMatch
                  </p>
                )}
              </div>
              <div className="col-md-4  col-xl-4 xol-lg-4">
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
                      marginBottom: "-5px",
                      fontSize: "16px",
                      fontFamily: "Calibri",
                      marginLeft: "15px",
                      width: "9rem",
                      paddingLeft: "5px",
                    }}
                    for="exampleInputPassword1"
                    class="form-label"
                  >
                    Confirm Password
                  </legend>
                  <input
                    type="password"
                    style={{
                      border: "none",
                      width: "95%",
                      outline: "none",
                      paddingLeft: "15px",
                      marginTop: "-15px",
                      paddingBottom: "10px",
                      marginBottom: "5px",
                    }}
                    name="ConfirmPass"
                    value={ConfirmPass}
                    onChange={e => setConfirmPass(e.target.value)}
                  />
                </fieldset>
                {isError && (
                  <p
                    style={{
                      color: "red",
                      padding: "5px",
                      fontSize: "16px",
                      marginTop: "13px",
                    }}
                  >
                    Value MissMatch
                  </p>
                )}
              </div>
            </div>
            <div
              className="row mt-4 "
              style={{ marginLeft: "1rem", marginRight: "1rem" }}
            >
              <div className="col-md-4 col-xl-4 col-lg-4"></div>
              <div
                className="col-md-4 col-xl-4 col-lg-4"
                style={{ justifyContent: "center", display: "flex" }}
              >
                <button
                  onClick={handleSavePassWord}
                  style={{
                    width: "80%",
                    fontSize: "24px",
                    color: "white",
                    backgroundColor: "rgb(82, 114, 161)",
                    border: "1px solid rgb(82, 114, 161)",
                    height: "3rem",
                    borderTopLeftRadius: "80px",
                    borderTopRightRadius: "80px",
                  }}
                >
                  Save Password
                </button>
              </div>
              <div className="col-md-4 col-xl-4 col-lg-4">
                <div style={{ textAlign: "center" }}>
                  <button
                    to={""}
                    onClick={handleGeneratePassword}
                    style={{
                      color: "rgb(82, 114, 161)",
                      fontSize: "22px",
                      textDecoration: "none",
                    }}
                  >
                    Generate Random Password
                  </button>
                </div>
              </div>
            </div>
          </fieldset>
        </div>
        <div className="mt-5">
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
                marginBottom: "-5px",
                fontSize: "28px",
                textAlign: "center",
                fontFamily: "Calibri",
                marginLeft: "15px",
                width: "12.5rem",
              }}
              for="exampleInputPassword1"
              class="form-label"
            >
              {" "}
              Delete Account
            </legend>
            <div style={{ marginLeft: "2rem", marginRight: "2rem" }}>
              <p style={{ fontSize: "20px" }}>
                Deleting the account will result in the permanent removal of all
                stored information from the portal, with no possibility of
                recovery. Additionally, any subscription fee paid by the user
                will not be refunded, and the Meri Zimmedari will not be liable
                to offer any services to the user or their nominee thereafter.
              </p>
            </div>

            <div
              className="row mt-2 "
              style={{ marginLeft: "1rem", marginRight: "1rem" }}
            >
              <div className="col-md-4 col-xl-4 col-lg-4"></div>
              <div
                className="col-md-4 col-xl-4 col-lg-4"
                style={{ justifyContent: "center", display: "flex" }}
              >
                <button
                  style={{
                    width: "80%",
                    fontSize: "24px",
                    color: "white",
                    backgroundColor: "rgb(82, 114, 161)",
                    border: "1px solid rgb(82, 114, 161)",
                    height: "3rem",
                    borderTopLeftRadius: "80px",
                    borderTopRightRadius: "80px",
                  }}
                >
                  Delete Account
                </button>
              </div>
              <div className="col-md-4 col-xl-4 col-lg-4"></div>
            </div>
          </fieldset>
        </div>

        <div className="container mt-2">
          <div style={{ float: "left" }}>
            <Link to={"/dashboard"} style={{ textDecoration: "none" }}>
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
        </div>
      </div>
    </>
  );
};

export default Manageaccount;
