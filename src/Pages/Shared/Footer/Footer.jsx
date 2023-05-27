import React from "react";
import { FaFacebook, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="st">
      <div className="bg-neutral ">
        <div className="flex  justify-center   text-neutral-content">
          <div className="bg-[#1F2937] px-40 text-center py-24 flex-1">
            <h3 className="text-2xl mb-6">CONTACT US</h3>
            <div className="space-y-2">
              <p>123 ABS Street, Uni 21, Bangladesh</p>
              <p>+88 123456789</p>
              <p>Mon - Fri: 08:00 - 22:00</p>
              <p>Sat - Sun: 10:00 - 23:00</p>
            </div>
          </div>

          <div className="flex-1 text-center bg-[#111827] px-40  py-24">
          <h3 className="text-2xl ">Follow US</h3>
            <p className="my-6">Join us on social media</p>

            <ul className="flex  justify-center items-center text-4xl gap-8">
              <li><Link><FaFacebookF></FaFacebookF></Link></li>
              <li><Link><FaInstagram></FaInstagram></Link></li>
              <li><Link><FaTwitter></FaTwitter></Link></li>
            </ul>
          </div>
        </div>
        <div
          className="footer bg-black footer-center p-4 text-white
        "
        >
          <div>
            <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
