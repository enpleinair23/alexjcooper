import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-scroll";

const Button = ({ label, link, size }) => (
  <Link
    spy={true}
    smooth={true}
    duration={500}
    to="#contact"
    className={`button flex items-center justify-center rounded-full bg-black text-white hover:bg-primary-600 font-semibold  ${
      size === "lg" ? "px-6 py-4 text-body-sm" : "px-4 py-2.5 text-body-xs"
    }`}
    href={link}
  >
    {label}
  </Link>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  size: PropTypes.string,
};

export default Button;
