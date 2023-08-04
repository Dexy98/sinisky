import React from "react";
import "./Styles/Footer.css";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const openWhatsAppChat = () => {
    // Replace "YOUR_PHONE_NUMBER" with the recipient's phone number (including the country code).
    const phoneNumber = "+393207728377";

    // Replace "YOUR_MESSAGE" with the message you want to send in the WhatsApp chat.
    const message = "Scrivimi";

    // Create the WhatsApp API link with the phone number and message.
    const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;

    // Open the WhatsApp chat in a new tab or window.
    window.open(whatsappLink, "_blank");
  };

  return (
    <footer>
      <div className="flex">
        <a href="https://www.facebook.com/sinisky/?locale=it_IT">
          <FaFacebook className="icon" style={{ cursor: "pointer" }} />
        </a>
        <a href="https://www.instagram.com/sinisky_computergraphics/">
          <FaInstagram className="icon" style={{ cursor: "pointer" }} />
        </a>
        <FaWhatsapp
          className="icon"
          onClick={openWhatsAppChat}
          style={{ cursor: "pointer" }}
        />
      </div>
    </footer>
  );
};

export default Footer;
