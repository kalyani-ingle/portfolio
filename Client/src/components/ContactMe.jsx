"use client";

import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import TextField from "@mui/material/TextField";

const ContactSchema = yup.object().shape({
  name: yup.string().required("Name is a required field"),
  email: yup
    .string()
    .matches(
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      { message: "Invalid email format", excludeEmptyString: true }
    )
    .required("Email is a required field"),
  message: yup.string().required("Message is a required field"),
});

function ContactMe() {
  const [update, setUpdate] = useState("");
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ContactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data) => {
    const showUpdateFor2Seconds = (message) => {
      setUpdate(message);
      setTimeout(() => {
        setUpdate("");
      }, 1000);
    };

    showUpdateFor2Seconds("Sending, please wait!");
    const timestamp = new Date().toLocaleString();
    try {
      const response = await fetch(`${window.location.origin}/api/contact`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      localStorage.setItem("user", JSON.stringify(result));
      if (response.ok) {
        timestamp;
        toast.success(`Message sent successfully!\n${timestamp}`);
        const notificationSound = new Audio("/new-positive-notice-161930.mp3");
        notificationSound.play();
        document.getElementById("successGif").style.display = "block";
        reset();
        setTimeout(() => {
          document.getElementById("successGif").style.display = "none";
        }, 6000);
      }
    } catch (error) {
      console.log("Error:", error.message);
      toast.error("Failed to send message! Please try again");
      const errorSound = new Audio("/error-call-to-attention-129258.mp3");
      errorSound.play();
      document.getElementById("errorGif").style.display = "block";
      reset();
      setTimeout(() => {
        document.getElementById("errorGif").style.display = "none";
      }, 6000);
    }
  };

  return (
    <div id="contact">
      <div className="form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Reach out</h1>
          <h5>
            <a href="mailto:kalyaniingle.iitkgp@gmail.com">
              kalyani@runcode.io
            </a>
            <br />
            Kalyani Ingle
          </h5>
          <div className="input">
            <Controller
              name="name"
              control={control}
              defaultValue=""
              rules={{ required: true }}
              render={({ field }) => (
                <TextField {...field} label="Name" variant="outlined" />
              )}
            />
            {errors.name && <p className="error-name">{errors.name.message}</p>}
          </div>
          <div className="input" style={{ marginBottom: 10 }}>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              rules={{ required: true }}
              render={({ field }) => (
                <TextField {...field} label="Email" variant="outlined" />
              )}
            />
            {errors.email && (
              <p className="error-email">{errors.email.message}</p>
            )}
          </div>
          <div className="textarea">
            <Controller
              name="message"
              control={control}
              defaultValue=""
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Message"
                  variant="outlined"
                  multiline
                  rows={5}
                />
              )}
            />
            {errors.message && (
              <p className="error-message">{errors.message.message}</p>
            )}
          </div>
          <div className="button-container">
            <Button
              type="button"
              id="reset"
              value="Reset"
              onClick={() => reset()}
            >
              Reset&nbsp;
              <RestartAltIcon style={{ fontSize: "small" }} />
            </Button>
            <Button type="submit" id="send" value="Send">
              Send&nbsp;
              <SendIcon style={{ fontSize: "small" }} />
            </Button>
          </div>
          <br />
          {update && <div className="update-message">{update}</div>}
          <br />
          <div className="success-failure">
            <img
              id="successGif"
              src="/birdy1.png"
              alt="Success"
              height="50px"
              width="83px"
              style={{ display: "none" }}
            />
            <img
              id="errorGif"
              src="/sobbing_bird.png"
              alt="failure"
              height="51px"
              style={{ display: "none" }}
            />
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default ContactMe;
