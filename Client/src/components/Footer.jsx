"use client";
import React from "react";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import { useMemo } from "react";
import CopyrightIcon from "@mui/icons-material/Copyright";

function Footer() {
  const copyrightDate = useMemo(() => {
    const date = new Date();
    return date.toLocaleString("default", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  }, []);

  const handleUp = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div id="footer">
      <p>
        <CopyrightIcon style={{ fontSize: "small", color: "#f086ad" }} />{" "}
        {copyrightDate} • All Rights Reserved <br />
      </p>
      <ArrowCircleUpIcon
        className="custom-icon scroll-up"
        style={{ fontSize: "40px" }}
        id="scroll-up"
        onClick={handleUp}
        aria-label="Scroll to top"
      />
    </div>
  );
}

export default Footer;
