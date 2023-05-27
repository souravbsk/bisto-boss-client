import React, { useContext, useEffect, useState } from "react";
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from "../../providers/AuthProviders";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
const Login = () => {
const [isdisebaled,setDisebaled] = useState(true)
const navigate =useNavigate();
const location = useLocation();
console.log(location);
const from = location?.state?.from?.pathname



    const {loginUser} = useContext(AuthContext);


    useEffect(() => {
        loadCaptchaEnginge(6); 
    },[])


    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        loginUser(email,password)
        .then(res => {
            const user = res.user;
            Swal.fire({
                title: 'User Login Successful',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
              })
              navigate(from,{replace:true})
        })
        .catch(err => {
            console.log(err.message);
        })
        console.log(email,password );
    }


    const handleValidity = (e) => {
        const inputValue = e.target.value;
        if (validateCaptcha(inputValue)) {
           setDisebaled(false)
        }
   
        else {
           setDisebaled(true)
        }
    }

  return (
   <>
    <Helmet>
    <title>Bistro Boss || Sign In</title>
   </Helmet>
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center w-1/2 lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card w-1/2 shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
              <span>< LoadCanvasTemplate /> </span>
                <input
                onBlur={handleValidity}
                  type="text"
                  placeholder="type the captcha above"
                  className="input input-bordered"
                />
                
              </div>
              <div className="form-control mt-6">
                <button disabled={isdisebaled} className="btn btn-primary">Login</button>
              </div>
            <p><small>New Here ? <Link to="/signup">Create an account</Link></small></p>
            </form>
          </div>
        </div>
      </div>
    </div>
   </>
  );
};

export default Login;
