import { useState } from "react";
import mailIcon from "../../assets/mail-icon.png";
import copyIcon from "../../assets/copy-icon.png";
import "./contact.css";

const ContactBox = ({ label, text }) => {
  const [toast, setToast] = useState("");

  const handleCopy = () => {
    navigator.clipboard.writeText(text)
      .then(() => {
        setToast("Copied");
        setTimeout(() => setToast(""), 2000);
      });
  };

  return (
    <div className="contact-box" onClick={handleCopy} data-copy={text}>

      <div className="contact-box-content">
        <img src={mailIcon} alt="mail icon" className="icon" />
        <p>{label}</p>
      </div>

      <div className={`toast-notification ${toast ? "show" : ""}`}>
        {toast}
      </div>

      <img src={copyIcon} alt="copy icon" className="copy-icon" />

    </div>
  );
};

export default ContactBox;

