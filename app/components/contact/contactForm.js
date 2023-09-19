"use client";
import React, { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [subjectError, setSubjectError] = useState("");
  const [messageError, setMessageError] = useState("");

  // Handle input changes
  const handleNameChange = (e) => {
    const input = e.target.value;

    // Regular expression to allow only letters and spaces
    const regex = /^[A-Za-z\s]+$/;

    if (!regex.test(input)) {
      setNameError("Name can only contain letters and spaces");
    } else {
      setNameError(""); // Clear the error when the input is valid
    }

    setName(input);
  };

  const handleEmailChange = (e) => {
    const input = e.target.value;

    // Regular expression to validate email format
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!emailRegex.test(input)) {
      setEmailError("Invalid email format");
    } else {
      setEmailError(""); // Clear the error when the input is valid
    }

    setEmail(input);
  };

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
    setSubjectError("");
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
    setMessageError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let hasError = false;

    if (name === "") {
      setNameError("Name is required");
      hasError = true;
    }

    if (email === "") {
      setEmailError("Email is required");
      hasError = true;
    }

    if (subject === "") {
      setSubjectError("Subject is required");
      hasError = true;
    }

    if (message === "") {
      setMessageError("Message is required");
      hasError = true;
    }

    if (hasError) {
      // If there are errors, do not submit the form
      return;
    }

    // You can handle form submission logic here
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Subject:", subject);
    console.log("Message:", message);

    // Reset form fields
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <div>
      <form className="flex flex-col space-y-2 w-fit mx-auto" onSubmit={handleSubmit}>
        <div className="flex space-x-2">
          <input placeholder="Name" className="contactInput" type="text" value={name} onChange={handleNameChange} />
          <div className="text-red-500">{nameError}</div>
          <input placeholder="Email" className="contactInput" type="text" value={email} onChange={handleEmailChange} />
          <div className="text-red-500">{emailError}</div>
        </div>
        <input
          placeholder="Subject"
          className="contactInput"
          type="text"
          value={subject}
          onChange={handleSubjectChange}
        />
        <div className="text-red-500">{subjectError}</div>
        <textarea placeholder="Message" className="contactInput" value={message} onChange={handleMessageChange} />
        <div className="text-red-500">{messageError}</div>
        <button type="submit" className="bg-[#f7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg">
          {" "}
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
