import "./Header.css";
import { useTranslation } from "react-i18next";
import { useState } from "react";

function Header() {
  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const handleLanguageChange = (event) => {
    const newLanguage = event.target.value;
    setSelectedLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar__logo">My Portfolio</div>
        <ul className="navbar__links">
          <li className="navbar__item">
            <a href="#home" className="navbar__link">
              {t("navbar.home")}
            </a>
          </li>
          <li className="navbar__item">
            <a href="#projects" className="navbar__link">
              {t("navbar.projects")}
            </a>
          </li>
          <li className="navbar__item">
            <a href="#about" className="navbar__link">
              {t("navbar.about")}
            </a>
          </li>
          <li className="navbar__item">
            <a href="#contact" className="navbar__link">
              {t("navbar.contact")}
            </a>
          </li>
        </ul>
        <div className="language-selector">
          <select
            value={selectedLanguage}
            onChange={handleLanguageChange}
            className="language-selector__dropdown"
          >
            <option value="en">English</option>
            <option value="fa">فارسی</option>
          </select>
        </div>
      </nav>
      <div className="contentWrapper">
        <div className="infoContainer">
          <h1>{t("header.greeting")}</h1>
          <p>{t("header.aboutMe")}</p>
          <p>{t("header.description")}</p>
        </div>
        <div className="imageContainer">
          <img src="/Programmer-amico.svg" alt="Programmer" className="image" />
        </div>
      </div>
    </header>
  );
}

export default Header;
