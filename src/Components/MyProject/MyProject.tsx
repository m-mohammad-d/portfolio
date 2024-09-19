import "./MyProject.css";

function MyProject() {
  return (
    <div className="my-project">
      <h2 className="my-project__title">My Projects</h2>
      <div className="my-project__projects">
        <div className="my-project__project">
          <img
            src="/project-1.png"
            alt=".course"
            className="my-project__image"
          />
          <h3 className="my-project__name">.course</h3>
          <p className="my-project__description">
            DotCourse is a comprehensive educational platform designed to
            provide an efficient and user-friendly experience for students,
            instructors, and admins. It features dedicated dashboards for each
            user role and a variety of essential functionalities.
          </p>
          <a href="https://dotcourse.example.com">Watch Online</a>
          <a
            href="https://github.com/your-username/dotcourse"
            className="my-project__github"
          >
            View Source Code
          </a>
        </div>
        <div className="my-project__project">
          <img
            src="/project-2.png"
            alt="Nexium"
            className="my-project__image"
          />
          <h3 className="my-project__name">Nexium</h3>
          <p className="my-project__description">
            A dynamic web-based desktop environment that brings a desktop-like
            experience to your browser. Nexium provides a user-friendly and
            interactive workspace where you can manage apps, customize your
            desktop, and create and edit files seamlessly.
          </p>
          <a href="https://nexium.netlify.app/">Watch Online</a>
          <a
            href="https://github.com/your-username/nexium"
            className="my-project__github"
          >
            View Source Code
          </a>
        </div>
        <div className="my-project__project">
          <img
            src="/project-3.png"
            alt="Project 3"
            className="my-project__image"
          />
          <h3 className="my-project__name">azogeh</h3>
          <p className="my-project__description">
            Discover the finest selection of food products at Azvaghe. From
            fresh produce to gourmet specialties, our curated collection offers
            something for every palate. Explore high-quality ingredients that
            bring exceptional taste and nutrition to your kitchen.
          </p>
          <a href="#">is not complete</a>
          <a
            href="https://github.com/your-username/azogeh"
            className="my-project__github"
          >
            View Source Code
          </a>
        </div>
        <div className="my-project__project">
          <img
            src="/project-4.png"
            alt="Project 4"
            className="my-project__image"
          />
          <h3 className="my-project__name">three js project</h3>
          <p className="my-project__description">
            A detailed 3D model of a historical sword, meticulously recreated
            using Three.js. This project showcases the intricate design and
            craftsmanship of the sword through interactive 3D visualization.
            Explore the beauty and complexity of this ancient weapon in a fully
            immersive environment.
          </p>
          <a href="https://m-mohammad-d.github.io/three-js-3d/">Watch Online</a>
          <a
            href="https://github.com/your-username/project4"
            className="my-project__github"
          >
            View Source Code
          </a>
        </div>
      </div>
    </div>
  );
}

export default MyProject;
