import "./Header.css";
import { useTranslation } from "react-i18next";

import Lottie from "lottie-react";
import animationData from "../../asset/Animation - 1731768441890.json";
import LanguageSelector from "../LanguageSelector/LanguageSelector";

function Header() {
  const { t } = useTranslation();
  return (
    <header className="header">
      <div className="navbar">
        <div className="navbar__logo">m-mohammad-d</div>
        <LanguageSelector />
      </div>
      <div className="contentWrapper">
        <div className="infoContainer">
          <h1>{t("header.greeting")}</h1>
          <p>{t("header.aboutMe")}</p>
          <p>{t("header.description")}</p>
        </div>
        <div>
          <Lottie
            animationData={animationData}
            className="laptop"
            loop={true}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
