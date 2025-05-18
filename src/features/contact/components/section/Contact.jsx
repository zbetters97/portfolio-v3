import { useEffect, useState } from "react";
import Modal from "src/features/modal/components/Modal";
import SuccessAlert from "src/features/modal/components/SuccessAlert";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import ContactForm from "../forms/ContactForm";
import "./contact.scss";

export default function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Prevent scrolling when modal is open
    if (isModalOpen) {
      document.body.classList.add("lock-scroll");
    }
  }, [isModalOpen]);

  return (
    <section id="contact" className="section contact" data-section>
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        <SuccessAlert
          message="Message sent!"
          link="Go back"
          icon={faArrowRight}
          onClick={() => setIsModalOpen(false)}
        />
      </Modal>

      <h1 className="section__header">Contact</h1>

      <ContactForm setIsModalOpen={setIsModalOpen} />
    </section>
  );
}
