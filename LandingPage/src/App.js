import React, {useState} from "react";
import "./App.css";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import Home from './components/Main/home/Home'
import DoctorBenefit from "./Doctor/DoctorBenefit";
import LoginSignup from "./Auth/DoctorPatient";
import DoctorSignup from "./Doctor/DoctorSignup";
import PatientSignup from "./Patient/PatientSignup";
import StaffLogin from "./Staff/StaffLogin";
import StaffResetPassword from "./Staff/ResetPassword";
import Dashboard from "./Staff/Dashboard";
import StaffSignup from "./Staff/SignUp";
import StaffCreateNewPassword from "./Staff/CreateNewPassword";
import ResetOldPasswordLogin from "./Auth/ResetPassword";
import Login from "./Auth/Login";
import DoctorLogin from "./Auth/DoctorLogin";

import AfterLogin from "./Auth/AfterLogin";
import LoginPage from "./Auth/LoginPage";
import activateUser from './Auth/ActivateUser'
import phoneLogin from "./Auth/phoneLogin";
import ResetPasswordLogin from "./Auth/ResetPasswordLogin";
import NewLogin from "./Auth/NewLogin";
import Appointment from "./Dashboard/Appointment";
import OTPVerificationLogin from "./Auth/OTPVerification";
import Demo from "./Doctor/ScheduleDemo";
import Patient1 from "./Staff/Patient1";
import Patient2 from "./Staff/Patient2";
import EditProfile from "./Staff/EditProfile";
import UpdateProfile from "./Staff/UpdateProfile";
import upload from "./Staff/UploadLabReport";
import SearchDoc from "./Doctor/SearchDoctor";
import Prices from './Dashboard/pricing/Pricing'
import PatientBenefit from './Patient/PatientBenefit'
import Careers from "./Dashboard/career/Careers";
import Footer from "./components/footer/Footer";
import Contact from "./Dashboard/ContactUs/ContactUs";
import Navbar from "./components/header/Navbar";
import FAQ from "./components/pages/FAQ/FAQ";
import About from "./components/pages/AboutUs/About";
import Partners from "./components/pages/Partners";
import Events from "./components/pages/Events"; 
import News from "./components/Main/News";
import Blogs from "./components/pages/Blogs/Blogs";
import CreateBlog from "./components/pages/Blogs/CreateBlog";
import Services from "./components/pages/Services/Services";
import Podcast from "./components/pages/podcast/Podcast";
import CreatePodcast from "./components/pages/podcast/CreatePodcast";
import CreateCareersPage from "./Dashboard/career/CreateCareersPage";

import PodcastDetails from "./components/pages/podcast/podcastDetails/PodcastDetails";
import Blogs_details from "./components/pages/Blogs/Blog2";
// import Pricing from "./components/pages/Pricing";
import ScrollBarToTop from "./components/UI/ScrollBarToTop";
//import Home from "./components/page/Home";
import Help from "./components/pages/Help/Help";
//import Casestudy from "./components/pages/Casestudy";

const App = () => {
  const [user, setLoginUser] = useState({});
  return (
    <div className="App">
      <BrowserRouter>
        <div className='w-100'>
          <Navbar></Navbar>
          <ScrollBarToTop>
            <Switch>
              <Route exact path="/doctorBenefit" component={DoctorBenefit} />
              {/* <Route exact path="/doctorBenefit" component={DoctorBenefit} /> */}

              <Route exact path="/" component={Home} />
              <Route exact path="/login/:user" component={LoginPage} />
              {/* <Route exact path="/login/:user/email" component={Login} /> */}
              <Route exact path="/login/:user/email">
            {user && user._id ? (
              <AfterLogin setLoginUser={setLoginUser} />
            ) : (
              <Login setLoginUser={setLoginUser} />
            )}
          </Route>
          <Route exact path="/login/:user/email">
            {user && user._id ? (
              <AfterLogin setLoginUser={setLoginUser} />
            ) : (
              <DoctorLogin setLoginUser={setLoginUser} />
            )}
          </Route>
              <Route exact path="/login/:user/phone" component={phoneLogin} />
              <Route exact path="/reset-password/:user" component={ResetPasswordLogin} />
              <Route exact path="/reset-old-password/:user" component={ResetOldPasswordLogin} />
              <Route exact path="/login-OTP-verification/:user" component={OTPVerificationLogin} />

              <Route exact path="/activateUser/:token" component={activateUser}/>
              <Route exact path="/signupAsDoctorPatient" component={LoginSignup}/>
              <Route exact path="/doctorSignup" component={DoctorSignup} />
              <Route exact path="/patientSignup" component={PatientSignup} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/careers" component={Careers} />
              <Route exact path="/patientBenefit" component={PatientBenefit} />
              <Route exact path="/NewLogin" component={NewLogin} />
              <Route exact path="/SearchDoc" component={SearchDoc} />
              <Route exact path="/pricing" component={Prices} />
              <Route exact path="/uploadLabReport" component={upload} />
              
              <Route exact path="/staffSignup" component={StaffSignup} />
              <Route exact path="/staffEditProfile" component={EditProfile} />
              <Route exact path="/staffUpdateProfile" component={UpdateProfile}/>
              <Route exact path="/Demo" component={Demo} />
              <Route exact path="/Patient_2" component={Patient2} />
              <Route exact path="/Patient_1" component={Patient1} />
              <Route exact path="/staffDashboard" component={Dashboard} />
              <Route exact path="/FAQ" component={FAQ} />
              <Route exact path="/About" component={About} />
              <Route exact path="/Partners" component={Partners} />
              <Route exact path="/events" component={Events} />
              <Route exact path="/news" component={News} />
              <Route exact path="/Blogs" component={Blogs} />
              <Route exact path="/CreateBlog" component={CreateBlog} />
              <Route exact path="/CreatePodcast" component={CreatePodcast} />
              <Route exact path="/CreateCareersPage" component={CreateCareersPage} />

              
              <Route exact path="/Services" component={Services} />
              <Route exact path="/Podcast" component={Podcast} />
              <Route exact path="/Podcast-details/:podcastId" component={PodcastDetails} />
              <Route exact path="/Blogs_details/:blogId" component={Blogs_details} />
              <Route exact path="/Help" component={Help} />
              <Route exact path="/DoctorBenefit" component={DoctorBenefit} />
              <Route exact path="/PatientBenefit" component={PatientBenefit} />
              {/* <Route exact path="/Pricing" component={Pricing} /> */}
              {/*<Route exact path="/Casestudy" component={Casestudy} />*/}

              <Route exact path="/staffLogin" component={StaffLogin} />
              <Route exact path="/staffResetPassword" component={StaffResetPassword}/>
              <Route exact path="/staffCreateNewPassword" component={StaffCreateNewPassword}/>

             {/* <Route exact path="/reset" component={ResetPassword} />
              <Route exact path="/resetEmail" component={ResetPasswordEmail} />*/}

              <Route exact path="/appointment" component={Appointment} />
            

              <Route>
                <Redirect to="/" />
              </Route>
            </Switch>
          </ScrollBarToTop>
          <Footer></Footer>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
