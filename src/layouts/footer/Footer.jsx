import { Link } from "react-router-dom";
import "./footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">
        Coded in&nbsp;
        <FooterLink
          link="https://code.visualstudio.com"
          label="Visual Studio Code"
        />
        &nbsp;by&nbsp;
        <FooterLink
          link="https://www.linkedin.com/in/zachary-betters-916a74116/"
          label="Zachary Betters"
        />
        .
      </p>
      <p className="footer__text">Built with React.js, HTML, and SCSS.</p>
      <p className="footer__text">
        All text is set in the&nbsp;
        <FooterLink link="https://rsms.me/inter/" label="Inter typeface" />.
      </p>
    </footer>
  );
}

function FooterLink({ link, label }) {
  return (
    <Link to={link} target="_blank" className="footer__link">
      {label}
    </Link>
  );
}
