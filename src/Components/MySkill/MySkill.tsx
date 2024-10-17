// src/components/MySkill.js
import "./MySkill.css";
import { useTranslation } from "react-i18next";

function MySkill() {
  const { t } = useTranslation();

  return (
    <div className="my-skill">
      <h2 className="my-skill__title line-text">{t("skills.title")}</h2>
      <div className="my-skill__skills">
        <div className="my-skill__skill">
          <img
            src="icons8-react-js-100.png"
            alt={t("skills.react.name")}
            className="my-skill__icon"
          />
          <h3 className="my-skill__skill-title">{t("skills.react.name")}</h3>
          <p className="my-skill__description">
            {t("skills.react.description")}
          </p>
        </div>
        <div className="my-skill__skill">
          <img
            src="/icons8-javascript-144.png"
            alt={t("skills.javascript.name")}
            className="my-skill__icon"
          />
          <h3 className="my-skill__skill-title">
            {t("skills.javascript.name")}
          </h3>
          <p className="my-skill__description">
            {t("skills.javascript.description")}
          </p>
        </div>
        <div className="my-skill__skill">
          <img
            src="/icons8-typescript-100.png"
            alt={t("skills.typescript.name")}
            className="my-skill__icon"
          />
          <h3 className="my-skill__skill-title">
            {t("skills.typescript.name")}
          </h3>
          <p className="my-skill__description">
            {t("skills.typescript.description")}
          </p>
        </div>
        <div className="my-skill__skill">
          <img
            src="/icons8-git-144.png"
            alt={t("skills.git.name")}
            className="my-skill__icon"
          />
          <h3 className="my-skill__skill-title">{t("skills.git.name")}</h3>
          <p className="my-skill__description">{t("skills.git.description")}</p>
        </div>
      </div>
    </div>
  );
}

export default MySkill;
