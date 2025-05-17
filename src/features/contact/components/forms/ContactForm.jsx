import { useRef } from "react";
import { isEmailValid } from "src/utils/form";
import "./contact-form.scss";

export default function ContactForm() {
  const formRef = useRef();

  const handleChange = (e) => {
    e.target.classList.remove("contact-form__input--invalid");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateData()) return;

    resetValues();
  };

  const validateData = () => {
    const { name, email, message } = formRef.current;

    if (!name.value.trim()) {
      name.classList.add("contact-form__input--invalid");
      return false;
    }

    if (!email.value.trim()) {
      email.classList.add("contact-form__input--invalid");
      return false;
    }

    if (!isEmailValid(email.value)) {
      email.classList.add("contact-form__input--invalid");
      return false;
    }

    if (!message.value.trim()) {
      message.classList.add("contact-form__input--invalid");
      return false;
    }

    return true;
  };

  const resetValues = () => {
    formRef.current.reset();
  };

  return (
    <form ref={formRef} className="contact-form">
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

      <SubmitButton handleSubmit={handleSubmit} />
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

function SubmitButton({ handleSubmit }) {
  return (
    <button
      type="submit"
      onClick={handleSubmit}
      className="contact-form__submit"
    >
      Submit
    </button>
  );
}
