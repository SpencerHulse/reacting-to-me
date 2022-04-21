import { useState } from "react";
import { validateEmail, capitalizeFirstLetter } from "../../utils/helpers";

function ContactForm() {
  // State is initially an empty object with the same variables as the form
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const { name, email, message } = formState;

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

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }

  // Putting the console log inside handleChange would cause a delay due to its async nature
  // console.log(formState);

  return (
    <div className="form-container">
      <h3>Contact Me</h3>
      <p>
        You can also reach out through any of the accounts listed in the footer.
      </p>
      <form id="contact-form" onSubmit={handleSubmit}>
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
    </div>
  );
}

export default ContactForm;
