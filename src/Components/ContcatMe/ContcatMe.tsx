
import "./ContcatMe.css"; 

const ContactMe = () => {
  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your message"
          ></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
      <div className="social-icons">
        <a
          href="https://github.com/your-profile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="github-logo.png" alt="GitHub" />
        </a>
        <a
          href="https://t.me/your-profile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="telegram-logo.png" alt="Telegram" />
        </a>
        <a
          href="https://linkedin.com/in/your-profile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="linkedin-logo.png" alt="LinkedIn" />
        </a>
      </div>
    </div>
  );
};

export default ContactMe;
