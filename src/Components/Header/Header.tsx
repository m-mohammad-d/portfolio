import "./Header.css";
import { useTranslation } from "react-i18next";
import { useState } from "react";

function Header() {
  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newLanguage = event.target.value;
    setSelectedLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  return (
    <header className="header">
      <div className="navbar">
        <div className="navbar__logo">My Portfolio</div>
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
