import React, { useState } from "react";
import emailjs from "emailjs-com";
import Button from "../CardUI/Button";

import "./Form.css";

const Form = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredSubject, setEnteredSubject] = useState("");
  const [enteredMsg, setEnteredMsg] = useState("");

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const subChangeHandler = (event) => {
    setEnteredSubject(event.target.value);
  };

  const msgChangeHandler = (event) => {
    setEnteredMsg(event.target.value);
  };

  const sendEmail = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(
        "service_wx3mmd8",
        "template_nyello9",
        event.target,
        "user_hmMHmkKx3oHttSSp8EHTv"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    setEnteredName("");
    setEnteredEmail("");
    setEnteredSubject("");
    setEnteredMsg("");
  };

  return (
    <>
      <form className="form-container" onSubmit={sendEmail}>
        <div className="form-controls">
          <input
            type="text"
            placeholder="Name"
            autoComplete="off"
            name="user_name"
            onChange={nameChangeHandler}
            value={enteredName}
          />
        </div>

        <div className="form-controls">
          <input
            type="email"
            placeholder="Email"
            autoComplete="off"
            name="user_email"
            onChange={emailChangeHandler}
            value={enteredEmail}
          />
        </div>

        <div className="form-controls">
          <input
            type="text"
            placeholder="Subject"
            name="user_subject"
            onChange={subChangeHandler}
            value={enteredSubject}
          />
        </div>
        <textarea
          cols="30"
          rows="7"
          name="user_message"
          onChange={msgChangeHandler}
          value={enteredMsg}
        />

        <Button type="submit">Submit</Button>
      </form>
    </>
  );
};

export default Form;
