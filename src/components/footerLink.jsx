import React from "react";
import { Link } from "@mui/material";

const FooterLink = (props) => {
  return (
    <Link
      href={`/#${props.path}`}
      sx={{
        color: "white",
        textDecoration: "none",
        transition:"0.3s",
        ":hover": {
          color: "#D9D9D9",
        },
      }}
    >
      {props.title}
    </Link>
  );
};

export default FooterLink;
