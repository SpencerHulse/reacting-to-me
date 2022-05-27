import { useState } from "react";
import axios from "axios";
import { validateEmail, capitalizeFirstLetter } from "../../utils/helpers";

function ContactForm() {
  const [sent, setSent] = useState(false);
  // State is initially an empty object with the same variables as the form
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const { name, email, message } = formState;

  const handleSend = async () => {
    setSent(true);
    try {
      await axios.post("http://localhost:4000/send_mail", {
        text: message,
        sender: name,
        senderEmail: email,
      });
    } catch (error) {
      console.log(error);
    }
  };

  function handleChange(e) {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);

      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${capitalizeFirstLetter(e.target.name)} is required.`);
      } else {
        setErrorMessage("");
      }
    }

    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  return (
    <div className="form-container">
      {!sent ? (
        <>
          <h3>Contact Me</h3>
          <p className="form-paragraph">
            You can also reach out through any of the accounts listed in the
            footer.
          </p>

          <form id="contact-form" onSubmit={handleSend}>
            <div className="form-inputs-container">
              <div className="form-inputs">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  name="name"
                  defaultValue={name}
                  /* onBlur, unlike onChange, only fires when focus is moved */
                  onBlur={handleChange}
                />
              </div>
              <div className="form-inputs">
                <label htmlFor="email">Email address:</label>
                <input
                  type="email"
                  name="email"
                  defaultValue={email}
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
            <button className="contact-form-button" type="submit">
              Submit
            </button>
          </form>
        </>
      ) : (
        <h1>Email has been sent!</h1>
      )}
    </div>
  );
}

export default ContactForm;
