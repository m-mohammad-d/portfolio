// src/components/Header.js
import "./Header.css";
import { useTranslation } from "react-i18next";

function Header() {
  const { t } = useTranslation();

  return (
    <header className="header">
      <div className="infoContainer">
        <h1>{t("header.greeting")}</h1>
        <p>{t("header.aboutMe")}</p>
        <p>{t("header.description")}</p>
      </div>
      <div className="imageContainer">
        <img src="/Programmer-amico.svg" alt="Programmer" className="image" />
      </div>
    </header>
  );
}

export default Header;
