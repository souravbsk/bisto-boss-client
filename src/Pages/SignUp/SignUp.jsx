import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import Swal from "sweetalert2";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import signUpImg from "../../assets/login/login.png"

const SignUp = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((res) => {
        const loggedUser = res.user;
        // // console.log(loggedUser);
        updateUserProfile(data.name, data.photo)
          .then(() => {
            const savedUser = { name: data.name, email: data.email };
            fetch("https://bistro-boss-server-souravbsk.vercel.app/users", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(savedUser),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.insertedId) {
                  reset();
                  Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Register Success",
                    showConfirmButton: false,
                    timer: 1500,
                  });
                  navigate("/");
                }
              });
          })
          .catch((err) => {
            // // console.log(err.message);
          });
      })
      .catch((err) => {
        // // console.log(err.message);
      });
  };
  // // console.log(watch("example"));

  return (
    <>
      <Helmet>
        <title>Bistro Boss || Sign Up</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center w-1/2 lg:text-left">
           <figure>
            <img src={signUpImg} alt="" />
           </figure>
          </div>
          <div className="card w-1/2 shadow-2xl bg-base-100">
            <div className="card-body">
            <h1 className="text-3xl text-center font-bold">Sign Up</h1>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    placeholder="name"
                    name="name"
                    {...register("name", { required: true })}
                    className="input input-bordered"
                  />
                  {errors.name && (
                    <span className="text-red-600">name is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    placeholder="photo url"
                    name="photo"
                    {...register("photo", { required: true })}
                    className="input input-bordered"
                  />
                  {errors.photo && (
                    <span className="text-red-600">photo url is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    placeholder="email"
                    name="email"
                    {...register("email")}
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      maxLength: 20,
                      pattern:
                        /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                    })}
                    placeholder="password"
                    className="input input-bordered"
                  />
                  {errors.password?.type === "required" && (
                    <p className="text-red-600">Password is required</p>
                  )}
                  {errors.password?.type === "minLength" && (
                    <p className="text-red-600">
                      Password must be 6 characters
                    </p>
                  )}
                  {errors.password?.type === "maxLength" && (
                    <p className="text-red-600">
                      Password must be less than 20 characters
                    </p>
                  )}
                  {errors.password?.type === "pattern" && (
                    <p className="text-red-600">
                      Password must have one Uppercase one lower case, one
                      number and one special character.
                    </p>
                  )}
                </div>
                <div className="form-control mt-6">
                  <input className="btn bg-[#D1A054] btn-primary" type="submit" />
                </div>
              </form>
              <p>
                <small>
                  Already have an account <Link to="/login">Login</Link>
                </small>
              </p>
              <SocialLogin></SocialLogin>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
