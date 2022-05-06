import { useState } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function ContactForm() {
  // State is initially an empty object with the same variables as the form
  const [formState, setFormState] = useState({
    subject: "",
    name: "",
    message: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const { subject, name, message } = formState;

  function handleChange(e) {
    if (!e.target.value.length) {
      setErrorMessage(`${capitalizeFirstLetter(e.target.name)} is required.`);
    } else {
      setErrorMessage("");
    }

    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  return (
    <div className="form-container">
      <h3>Contact Me</h3>
      <p className="form-paragraph">
        Fill out the form and click submit to send me an email. Alternatively,
        you can reach out through any of the accounts listed in the footer.
      </p>
      <form id="contact-form">
        <div className="form-inputs-container">
          <div className="form-inputs">
            <label htmlFor="subject">Subject:</label>
            <input
              type="text"
              name="subject"
              defaultValue={subject}
              /* onBlur, unlike onChange, only fires when focus is moved */
              onBlur={handleChange}
            />
          </div>
          <div className="form-inputs">
            <label htmlFor="name">Your name:</label>
            <input
              type="name"
              name="name"
              defaultValue={name}
              onBlur={handleChange}
            />
          </div>
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            rows="5"
            defaultValue={message}
            onBlur={handleChange}
          />
        </div>
        {/* The same as if (errorMessage)... */}
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <a
          href={`mailto:hulse.spencer@gmail.com?subject=${name} — ${subject}&body=${message}`}
          className="contact-form-button"
          target="_blank"
          rel="noreferrer"
        >
          Submit
        </a>
      </form>
    </div>
  );
}

export default ContactForm;
