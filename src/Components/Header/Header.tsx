import "./Header.css";

// Header component that displays a heading, a detailed introduction, and an image
function Header() {
  return (
    <header className="header">
      {/* Container for the textual information */}
      <div className="infoContainer">
        <h1>Hi, I'm Mohammad</h1>
        <p>about me</p>
        <p>
          I'm a frontend developer with a strong interest in creating intuitive
          and responsive user interfaces. My expertise includes working with
          modern web technologies such as HTML, CSS, and JavaScript, as well as
          popular frameworks like React . I am dedicated to improving user
          experience through well-crafted design and performant code. Outside of
          development, I enjoy exploring new technologies and contributing to
          open-source projects.
        </p>
      </div>

      {/* Container for the image */}
      <div className="imageContainer">
        <img
          src="/Programmer-amico.svg" // Path to the SVG image file
          alt="Programmer" // Alternative text for accessibility
          className="image" // CSS class for styling the image
        />
      </div>
    </header>
  );
}

export default Header;
