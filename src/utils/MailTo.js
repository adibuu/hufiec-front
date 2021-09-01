import React from "react";
import { Link } from "react-router-dom";

const MailTo = ({ mailto, label }) => (
  <Link
    to="#"
    onClick={(e) => {
      window.location = mailto;
      e.preventDefault();
    }}
  >
    {label}
  </Link>
);

export default MailTo;
