import "./ContcatMe.css";
import { useTranslation } from "react-i18next";

const ContactMe = () => {
  const { t } = useTranslation();

  return (
    <div className="contact-container">
      <h2>{t("contact.title")}</h2>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">{t("contact.name")}</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder={t("contact.name")}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">{t("contact.email")}</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder={t("contact.email")}
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">{t("contact.message")}</label>
          <textarea
            id="message"
            name="message"
            placeholder={t("contact.message")}
          ></textarea>
        </div>
        <button type="submit">{t("contact.send")}</button>
      </form>
      <div className="social-icons">
        <a
          href="https://github.com/m-mohammad-d"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="github.png" alt="GitHub" />
        </a>
        <a
          href="https://t.me/silver_shade1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/telegram.png" alt="Telegram" />
        </a>
        <a
          href="https://linkedin.com/in/silver-shade-90b2a6302"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="linkedin.png" alt="LinkedIn" />
        </a>
      </div>
    </div>
  );
};

export default ContactMe;
