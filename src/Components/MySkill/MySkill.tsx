import "./MySkill.css";

function MySkill() {
  return (
    <div className="my-skill">
      <h2 className="my-skill__title">My Skills</h2>
      <div className="my-skill__skills">
        <div className="my-skill__skill">
          <img
            src="icons8-react-js-100.png"
            alt="React"
            className="my-skill__icon"
          />
          <h3 className="my-skill__skill-title">React</h3>
          <p className="my-skill__description">
            A JavaScript library for building user interfaces, especially
            single-page applications.
          </p>
        </div>
        <div className="my-skill__skill">
          <img
            src="/icons8-javascript-144.png"
            alt="JavaScript"
            className="my-skill__icon"
          />
          <h3 className="my-skill__skill-title">JavaScript</h3>
          <p className="my-skill__description">
            A versatile scripting language used for creating dynamic and
            interactive web content.
          </p>
        </div>
        <div className="my-skill__skill">
          <img
            src="/icons8-typescript-100.png"
            alt="TypeScript"
            className="my-skill__icon"
          />
          <h3 className="my-skill__skill-title">TypeScript</h3>
          <p className="my-skill__description">
            A superset of JavaScript that adds static types to the language,
            improving development efficiency.
          </p>
        </div>
        <div className="my-skill__skill">
          <img src="/icons8-git-144.png" alt="Git" className="my-skill__icon" />
          <h3 className="my-skill__skill-title">Git</h3>
          <p className="my-skill__description">
            A version control system for tracking changes in source code during
            software development.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MySkill;
