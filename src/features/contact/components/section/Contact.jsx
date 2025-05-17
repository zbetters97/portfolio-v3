import ContactForm from "../forms/ContactForm";
import "./contact.scss";

export default function Contact() {
  return (
    <section id="contact" className="section contact" data-section>
      <h1 className="section__header">Contact</h1>
      <ContactForm />
    </section>
  );
}
