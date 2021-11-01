import React from "react";
import "./Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <div className="footer">
      <div className="Twitter">
        <FaTwitterSquare size={40} /> <br></br>{" "}
      </div>
      <div className="Email">
        <MdEmail size={40} />
        <br></br>{" "}
      </div>
      <div className="Facebook">
        <FaFacebookF size={40} />
        <br></br>
      </div>
      <div className="Copyright">
        &copy; {new Date().getFullYear()} Amsterdam.
      </div>
    </div>
  );
}
export default Footer;
