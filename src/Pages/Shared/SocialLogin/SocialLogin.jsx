import React, { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../providers/AuthProviders";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const handleSignIn = () => {
    googleSignIn().then((result) => {
      const loggedInUser = result.user;
      const savedUser = {
        name: loggedInUser.displayName,
        email: loggedInUser.email,
      };
      fetch("https://bistro-boss-server-souravbsk.vercel.app/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(savedUser),
      })
        .then((res) => res.json())
        .then((data) => {
          navigate(from, { replace: true });
        });
    });
  };
  return (
    <div>
      <div className="divider">OR</div>
      <div className="w-full text-center">
        <button onClick={handleSignIn} className="btn btn-circle btn-outline">
          <FaGoogle></FaGoogle>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
