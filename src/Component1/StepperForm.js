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
  const [showNominee, setShowNominee] = useState([]);
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

    console.log("Step1", showAsset);
  };
  const prevStep = () => {
    let viewData = JSON.parse(localStorage.getItem("ViewOne"));
    console.log(viewData.dynamicFields);
    setdynamicFields(viewData.dynamicFields);
    setStep(step - 1);
  };

  useEffect(() => {
    if (location.state) {
      setdynamicFields(location?.state);
    }
    console.log(showAsset);
  }, []);

  const handleChange = input => e => {
    if (input === "policyName") {
      setPolicyName(e.target.value);
      //  if (e.target.value.length >= 1) {
      //    setIsErrorFirstName(false);
      //  }
    } else if (input === "policyNumber") {
      setPolicyNumber(e.target.value);
      //  if (e.target.value.length >= 1) {
      //    setIsErrorLastName(false);
      //  }
    } else if (input === "reEnterPolicyNumber") {
      setReEnterPolicyNumber(e.target.value);
    }
    //  else if (input === "phone") {
    //    setPhone(e.target.value);
    //  }
  };

  // const handleChange = e => {
  // const file = e.target.files[0];
  // const { name, value } = e.target;
  // setMyform({
  //   ...myForm,
  //   [name]: value,
  // });
  // setMyform({
  //   ...myForm,
  //   uploadedFileName: file.name,
  // });
  // };
  //   const handleFileChange = event => {

  //    const file = event.target.files[0];
  //    setUploadedFileName(file?.name || "Name Not Found");
  //    setUploadedFile(file);

  //    if (file && file.size > 500 * 1024) {
  //      setError("File size exceeds the permissible limit of 500 KB.");
  //      setUploadedFile(null);
  //    } else {
  //      setError(null);
  //      setUploadedFile(file);
  //      if (file) {
  //        const fileReader = new FileReader();
  //        fileReader.onload = () => {
  //          setFileUrl(fileReader.result);
  //        };
  //        if (file.type.includes("image") || file.type === "application/pdf") {
  //          fileReader.readAsDataURL(file);
  //        }
  //      }
  //    }
  //  };

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
            showAssetData={showAsset}
            setShowAsset={setShowAsset}
            policyName={policyName}
            policyNumber={policyNumber}
            reEnterPolicyNumber={reEnterPolicyNumber}
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
            setShowAsset={setShowAsset}
            setShowNominee={setShowNominee}
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
            showAsset={showAsset}
            showNominee={showNominee}
          />
        </>
      );
    default:
      return null;
  }
};

export default StepperForm;
