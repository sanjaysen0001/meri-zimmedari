import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import MyContext from "../context/Context.js";
import Mynavbar from "./Mynavbar";
import PersonalDetails from "./PersonalDetails";
import CourseDetails from "./CourseDetails.js";
import Summary from "./Summary.js";

const StepperForm = () => {
  const sharedValue = useContext(MyContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [step, setStep] = useState(1);
  const [myForm, setMyform] = useState({
    policyName: "",
    policyNumber: "",
    reEnterPolicyNumber: "",
    uploadedFileName: null,
  });
  const [showAsset, setShowAsset] = useState("");
  const [dynamicFields, setdynamicFields] = useState(""); // for fields
  const [uploadedFileName, setUploadedFileName] = useState("");
  const [error, setError] = useState(null);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [policyName, setPolicyName] = useState("");
  const [policyNumber, setPolicyNumber] = useState("");
  const [reEnterPolicyNumber, setReEnterPolicyNumber] = useState("");
  const [formError, setFormError] = useState({
    // IspolicyFile: false,
    IspolicyName: false,
    IspolicyNumber: false,
    IsreEnterPolicyNumber: false,
    IsBothMatch: false,
  });
  const [fileUrl, setFileUrl] = useState(null);
  const [result, setResult] = useState([]);

  const nextStep = () => {
    setStep(step + 1);
    // let payload = {
    //   dynamicFields,
    //   policyName,
    //   policyNumber,
    //   reEnterPolicyNumber,
    // };
    console.log("Step1", policyName);
  };
  const prevStep = () => setStep(step - 1);

  useEffect(() => {
    if (location.state) {
      setdynamicFields(location?.state);
    }
    console.log(showAsset);
  }, []);
  const handleChange = e => {
    const file = e.target.files[0];
    setMyform({
      ...myForm,
      uploadedFileName: file.name,
    });
  };
  const submitData = e => {
    e.preventDefault();
    navigate("/add-asset/setp3/confirm");
    alert("Data sent");
  };

  switch (step) {
    case 1:
      return (
        <>
          <Mynavbar />
          <PersonalDetails
            nextStep={nextStep}
            handleChange={handleChange}
            dynamicFields={dynamicFields}
            myForm={myForm}
            setPolicyName={setPolicyName}
            setShowAsset={setShowAsset}
          />
        </>
      );
    case 2:
      return (
        <>
          <Mynavbar />
          <CourseDetails
            nextStep={nextStep}
            prevStep={prevStep}
            showAsset={showAsset}
          />
        </>
      );
    case 3:
      return (
        <>
          <Mynavbar />
          <Summary
            nextStep={nextStep}
            prevStep={prevStep}
            submitData={submitData}
          />
        </>
      );
    default:
      return null;
  }
};

export default StepperForm;
