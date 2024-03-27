import React, { useEffect, useState } from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import Mynavbar from "../Component1/Mynavbar";
import Manageaccount from "../Component1/Manageaccount";
import Subscriptioninvoices from "../Component1/Subscriptioninvoices";
import Confidentialnote from "../Component1/Confidentialnote";
import Nomineedetailsedit from "../Component1/Nomineedetailsedit";
import Nomineedetails from "../Component1/Nomineedetails";
import AssetDetails from "../Component1/AssetDetails";
import Myprofileedit1 from "../Component1/Myprofileedit1";
import Register from "../Component1/Register";
import MobileNumber from "../Component1/MobileNumber";
import Loginwithpassword from "../Component1/Loginwithpassword";
import Otpveri from "../Component1/Otpveri";
// import PhoneAuth from "../Component1/PhoneAuth";
import Login from "../Component1/Login";
import MyProfile from "../Component1/MyProfile";
import LifeDeclaration from "../Component1/LifeDeclaration";
import Assetstep3confirm from "../Component1/Assetstep3confirm";
import Assetstep3 from "../Component1/Assetstep3";
import Assetstep2 from "../Component1/Assetstep2";
import Assetpolicy from "../Component1/Assetpolicy";
import Icons from "../Component1/Icons";
import Index from "../Component1/Index";
import SubscriptionInvoices1 from "../Component1/SubscriptionInvoices1";
import FAQ from "../Component1/FAQ";
import Help from "../Component1/Help";
import TermsConditions from "../Component1/termsConditions";
import Confidentialeditor from "../Component1/Confidentialeditor";
import SignUpForm from "../components/SignUpForm";
import Loginform from "../components/Loginform";
import Home from "../components/Home";
import Capture1 from "../components/Capture1";
import Capture2 from "../components/Capture2";
import Splashscreen from "../components/Splashscreen";
import Forgotpassword from "../Component1/Forgotpassword";
import Forgototpverify from "../Component1/Forgototpverify";
import Payment from "../Component1/Payment";
import Preview from "../Component1/Preview";
import Manageconfidential from "../Component1/Manageconfidential";
import Termsandcondition from "../Component1/Termsandcondition";
import Privacypolicy from "../Component1/Privacypolicy";

const Routerfile = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      <Router>
        <Routes>
          {loading ? (
            <Route path="/face" element={<Splashscreen />} />
          ) : (
            <>
            <Route path="/privacypolicy" element={<Privacypolicy/>}/>
            <Route path="/termsandcondition" element={<Termsandcondition/>}/>
              <Route path="/Preview" element={<Preview/>}/>
              <Route path="/payment" element={<Payment />} />
              <Route path="/face" element={<Loginform />} />
              <Route path="/loginform" element={<Loginform />} />
              <Route path="/signup" element={<SignUpForm />} />
              <Route path="/home" element={<Home />} />
              <Route
                path="/capture1"
                element={
                  <React.StrictMode>
                    <Capture1 />
                  </React.StrictMode>
                }
              />
              <Route path="/capture2" element={<Capture2 />} />
            </>
          )}

          <Route
            path="/confidentialnoteeditor"
            element={<Confidentialeditor />}
          />
          <Route
            path="/manageconfidentialnoteeditor"
            element={<Manageconfidential />}
          />
          <Route path="/Help" element={<Help />} />
          <Route path="/termsConditions" element={<TermsConditions />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route
            path="/Subscriptioninvoices/history"
            element={<SubscriptionInvoices1 />}
          />
          <Route path="/manageaccount" element={<Manageaccount />} />
          <Route
            path="/Subscriptioninvoices"
            element={<Subscriptioninvoices />}
          />
          <Route path="/confidentialnote" element={<Confidentialnote />} />
          <Route path="/nomineedetailsedit" element={<Nomineedetailsedit />} />
          <Route path="/nomineedetails" element={<Nomineedetails />} />
          <Route path="/assetdetails" element={<AssetDetails />} />
          <Route path="/myprofile/edit" element={<Myprofileedit1 />} />
          <Route path="/registration" element={<Register />} />
          <Route path="/mobileNumber" element={<MobileNumber />} />
          <Route path="/login/password" element={<Loginwithpassword />} />
          <Route path="/forgot/password" element={<Forgotpassword />} />
          <Route path="/login/otp" element={<Otpveri />} />
          {/* <Route path="/PhoneAuth" element={<PhoneAuth />} /> */}
          <Route path="/" element={<Login />} />
          <Route path="/Forgot/password/otp" element={<Forgototpverify />} />
          <Route path="/myprofile" element={<MyProfile />} />
          <Route path="/lifedeclaration" element={<LifeDeclaration />} />
          <Route
            path="/add-asset/setp3/confirm"
            element={<Assetstep3confirm />}
          />
          <Route path="/add-asset/step3" element={<Assetstep3 />} />
          <Route path="/add-asset/step2" element={<Assetstep2 />} />
          <Route path="/add-asset/policy" element={<Assetpolicy />} />

          <Route path="/dashboard" element={<Index />} />
          <Route path="/add-asset" element={<Icons />} />
        </Routes>
      </Router>
    </>
  );
};

export default Routerfile;
