import React, { useState, useEffect } from "react";
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
        New password sent to
        <span className="p-1">
          {JSON.parse(localStorage.getItem("UserZimmedari")).email}
        </span>
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
  const [modalShow, setModalShow] = useState(false);
  const [modalShow1, setModalShow1] = useState(false);
  // const [oldPass, setOldPass] = useState("");

  const [formData, setFormData] = useState({
    oldPass: "",
    newPass: "",
    ConfirmPass: "",
  });
  const [IsPassError, setIsPassError] = useState({
    isOldPass: false,
    isNewPass: false,
    isConfirmPass: false,
    isBothPass: false,
  });

  const [isError, setIsError] = useState(false);
  const [isLoader, setIsLoader] = useState(false);

  const handleChangePassword = e => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData.newPass);
    // Check if password meets the criteria

    //  setIsValidPassword(isValid);
  };
  const handleGeneratePassword = () => {
    let userData = JSON.parse(localStorage.getItem("UserZimmedari"));
    // setIsLoader(true);

    axiosConfig
      .post("/user/generate-password", {
        email: userData.email,
      })
      .then(response => {
        setIsLoader(false);
        setModalShow(true);
        // swal("Success", `New password sent to ${userData.email}`, "success");
      })
      .catch(error => {
        setIsLoader(false);

        swal("Something Went Wrong");
        // console.log(error);
      });
  };

  const validatePassword = password => {
    let passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    console.log(passwordPattern.test(password));
    return passwordPattern.test(password);
  };
  const handleSavePassWord = () => {
    let errors = {};
    if (!formData.oldPass) errors.isOldPass = true;
    // if (!formData.newPass) errors.isNewPass = true;
    debugger;
    if (validatePassword(formData.newPass) == true) {
      console.log(formData.newPass);
      errors.isNewPass = true;
      // setIsPassError({ isNewPass: true });
    }

    // if (!formData.ConfirmPass) errors.isConfirmPass = true;
    // if (formData.newPass !== formData.ConfirmPass) errors.isBothPass = true;

    let payload = {
      oldPassword: formData.oldPass,
      newPassword: formData.newPass,
      confirmPassword: formData.ConfirmPass,
    };
    // if (Object.keys(errors).length === 0) {
    // if (newPass == ConfirmPass) {
    setIsError(false);
    axiosConfig
      .post("/user/save-password", payload)
      .then(response => {
        console.log(response.data.message);
        //  setFormData({
        //    ...formData,
        //    [name]: value,
        //  });
        // setOldPass("");
        // setNewPass("");
        // setConfirmPass("");
        swal("Success", "Password Reset Successfully", "Success");
      })
      .catch(error => {
        swal("Something Went Wrong");
        console.log(error.message);
      });
    // }
    // } else {
    //   setIsPassError(errors);
    //   setIsError(true);
    // }
  };

  return (
    <>
      <Mynavbar />
      <Savepassword show={modalShow1} onHide={() => setModalShow1(false)} />
      <Createpassword show={modalShow} onHide={() => setModalShow(false)} />
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
                {IsPassError.isBothPass && (
                  <span
                    style={{
                      color: "white",
                      fontSize: "16px",
                    }}
                  >
                    .
                  </span>
                )}
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
                    value={formData.oldPass}
                    id="password"
                    name="oldPass"
                    // onChange={e => setOldPass(e.target.value)}
                    onChange={handleChangePassword}
                  />
                </fieldset>
                {IsPassError.isOldPass && (
                  <p
                    style={{
                      color: "red",
                      padding: "5px",
                      fontSize: "16px",
                      marginTop: "3px",
                    }}
                  >
                    * indicates required field
                  </p>
                )}
              </div>
              <div className="col-md-4  col-xl-4 xol-lg-4">
                {IsPassError.isBothPass && (
                  <span
                    style={{
                      color: "white",
                      // padding: "5px",
                      fontSize: "16px",
                      // marginTop: "3px",
                    }}
                  >
                    .
                  </span>
                )}
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
                    name="newPass"
                    value={formData.newPass}
                    onChange={handleChangePassword}
                    // onChange={e => setNewPass(e.target.value)}
                  />
                </fieldset>
                {IsPassError.isNewPass && (
                  <p
                    style={{
                      color: "red",
                      padding: "5px",
                      fontSize: "12px",
                      marginTop: "3px",
                    }}
                  >
                    Password must contain a combination of at least 8
                    characters, including lowercase letters, uppercase letters,
                    numbers and special symbols.
                  </p>
                )}
              </div>
              <div className="col-md-4  col-xl-4 xol-lg-4">
                {IsPassError.isBothPass && (
                  <span
                    style={{
                      color: "red",
                      // padding: "5px",
                      fontSize: "16px",
                      // marginTop: "3px",
                    }}
                  >
                    Value Mismatch
                  </span>
                )}
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
                    value={formData.ConfirmPass}
                    // onChange={e => setConfirmPass(e.target.value)}
                  />
                </fieldset>
                {IsPassError.isConfirmPass && (
                  <p
                    style={{
                      color: "red",
                      padding: "5px",
                      fontSize: "16px",
                      marginTop: "3px",
                    }}
                  >
                    * indicates required field
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
                  {isLoader ? (
                    "Loading..."
                  ) : (
                    <Link
                      onClick={handleGeneratePassword}
                      style={{
                        color: "rgb(82, 114, 161)",
                        fontSize: "22px",
                        textDecoration: "underline",
                      }}
                    >
                      Generate Random Password
                    </Link>
                  )}
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
