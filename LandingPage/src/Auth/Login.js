import "./Login.css";

import { Link, useHistory, useParams } from "react-router-dom";
import React, {useState} from "react";

import Button from "../components/UI/Button";
import { Card } from "react-bootstrap";
import axios from "axios";

//import Button from "../components/UI/Button";


const Login = ({setLoginUser }) => {
  const history = useHistory();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  // const { user } = useParams();
  // const btnClick = (e) => {
  //   e.preventDefault();
  //   //history.push("/login/patient");
  // };

  const login = () => {
    axios
      .post(encodeURI("https://jeevitiv.herokuapp.com"+":" + "/login/patient/email"), user)
      .then((res) => {
        alert(res.data.message);
        setLoginUser(res.data.user)
        history.push("/login/patient/email");
      });
  };
  return (
    <Card className="login-body p-2 p-md-4">
      <Card.Body>
        <div className="loginHeading">
          <p className="loginFirstHeading">Login</p>
          <p className="login-heading-divider mx-1">|</p>

          <Link className="loginSecondHeading" to="/signupAsDoctorPatient">
            SignUp{" "}
          </Link>
        </div>
        <form  >
          <div className="loginFields">
            <input
              className="user-name"
              type="email"
              name="email"
              value={user.email}
              placeholder="Email"
              onChange={handleChange}
            ></input>
            <input
              className="user-password"
              type="password"
              name="password"
              value={user.password}
              placeholder="Password"
              onChange={handleChange}
            ></input>
            <div className=" w-100 condition my-4 d-flex justify-content-between">
              <section>
                <input type="checkbox" name="remember me" id="check" ></input>
                <label className="fw-bolder ms-1" htmlFor="check">
                  {" "}
                  Remember me
                </label>
              </section>
              <Link to={`/reset-password/${user}`}>
                <label className="loginInputLabel">Forgot Password?</label>
              </Link>
            </div>
          </div>
        </form>
        
        <Button buttonClicked={login}  >LOGIN</Button> 
      </Card.Body>
    </Card>
  );
};
export default Login;
