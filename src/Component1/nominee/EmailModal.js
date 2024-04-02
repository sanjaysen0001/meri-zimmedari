import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Input, Table } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import OtpInput from "react-otp-input";
import OTPInput, { ResendOTP } from "otp-input-react";
import { useNavigate } from "react-router-dom";
import "../../css/style.css";
import axiosConfig from ".././../axiosConfig";
import Mynavbar from ".././Mynavbar";
function EmailModal(props) {
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
                  OTPLength={6}
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
export default EmailModal;
