import { useRef, useState } from "react";
import { isEmailValid } from "src/utils/form";
import Alert from "./Alert";
import "./contact-form.scss";

export default function ContactForm({ setIsModalOpen }) {
  const [error, setError] = useState("");
  const formRef = useRef();

  // Remove invalid class on input change
  const handleChange = (e) => {
    e.target.classList.remove("contact-form__input--invalid");
  };

  const sendEmail = async (name, address, message) => {
    const res = await fetch("/.netlify/functions/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, address, message }),
    });
    return res.ok;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate data
    if (!validateData()) return;

    // Get values from form
    const { name, email, message } = formRef.current;

    // Submit to database
    if (await sendEmail(name.value, email.value, message.value)) {
      setIsModalOpen(true);
      resetValues();
    } else {
      // Throw error if database submission fails
      setError("Something went wrong. Please try again later.");
    }
  };

  const validateData = () => {
    const { name, email, message } = formRef.current;

    if (!name.value.trim()) {
      name.classList.add("contact-form__input--invalid");
      setError("Please enter your name.");
      return false;
    }

    if (!email.value.trim()) {
      email.classList.add("contact-form__input--invalid");
      setError("Please enter your email.");
      return false;
    }

    if (!isEmailValid(email.value)) {
      email.classList.add("contact-form__input--invalid");
      setError("Please enter a valid email.");
      return false;
    }

    if (!message.value.trim()) {
      message.classList.add("contact-form__input--invalid");
      setError("Please enter a message.");
      return false;
    }

    if (message.value.trim().length < 20) {
      message.classList.add("contact-form__input--invalid");
      setError("Message must be at least 20 characters long.");
      return false;
    }

    // No errors found
    return true;
  };

  const resetValues = () => {
    setError("");
    formRef.current.reset();
    formRef.current.name.classList.remove("contact-form__input--invalid");
    formRef.current.email.classList.remove("contact-form__input--invalid");
    formRef.current.message.classList.remove("contact-form__input--invalid");
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
      <Input
        type="text"
        id="name"
        placeholder="John Doe"
        label="Name"
        handleChange={handleChange}
      />
      <Input
        type="email"
        id="email"
        placeholder="johndoe@gmail.com"
        label="Email"
        handleChange={handleChange}
      />

      <TextBox
        type="text"
        id="message"
        placeholder="Type your message here..."
        label="Message"
        handleChange={handleChange}
      />

      <div>
        <Alert message={error} />
        <SubmitButton />
      </div>
    </form>
  );
}

function Input({ type, id, placeholder, label, handleChange }) {
  return (
    <div className="contact-form__group">
      <label htmlFor={id} className="contact-form__label">
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        onChange={handleChange}
        className="contact-form__input"
      />
    </div>
  );
}

function TextBox({ type, id, placeholder, label, handleChange }) {
  return (
    <div className="contact-form__group">
      <label htmlFor={id} className="contact-form__label">
        {label}
      </label>
      <textarea
        type={type}
        id={id}
        placeholder={placeholder}
        onChange={handleChange}
        className="contact-form__textarea"
      />
    </div>
  );
}

function SubmitButton() {
  return (
    <button type="submit" className="contact-form__submit">
      Submit
    </button>
  );
}
