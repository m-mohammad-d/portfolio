import "./Header.css";
import { useTranslation } from "react-i18next";
import { useState } from "react";

function Header() {
  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLanguageChange = (event) => {
    const newLanguage = event.target.value;
    setSelectedLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar__logo">My Portfolio</div>
        <div className="hamburger" onClick={toggleSidebar}>
          &#9776; {/* Hamburger icon */}
        </div>
        <ul className={`navbar__links ${isSidebarOpen ? "active" : ""}`}>
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
            <option value="ES">España</option>
            <option value="CN">中国</option>
          </select>
        </div>
      </nav>
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={toggleSidebar}>
          &times; {/* Close icon */}
        </button>
        <ul className="sidebar__links">
          <li className="sidebar__item">
            <a href="#home" className="sidebar__link">
              {t("navbar.home")}
            </a>
          </li>
          <li className="sidebar__item">
            <a href="#projects" className="sidebar__link">
              {t("navbar.projects")}
            </a>
          </li>
          <li className="sidebar__item">
            <a href="#about" className="sidebar__link">
              {t("navbar.about")}
            </a>
          </li>
          <li className="sidebar__item">
            <a href="#contact" className="sidebar__link">
              {t("navbar.contact")}
            </a>
          </li>
        </ul>
        <div className="language-selector-mobile">
          <select
            value={selectedLanguage}
            onChange={handleLanguageChange}
            className="language-selector__dropdown"
          >
            <option value="en">English</option>
            <option value="fa">فارسی</option>
            <option value="ES">España</option>
            <option value="CN">中国</option>
          </select>
        </div>
      </div>
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
