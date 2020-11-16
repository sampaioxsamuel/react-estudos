import React from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";
import styles from "./Contact.module.css";

const Contact = () => {
  const { messages, setMessages } = React.useContext(GlobalContext);

  const handleOnChange = ({ target }) => {
    setMessages({ ...messages, [target.id]: target.value });
  };

  const savingLocal = (key, message) => {
    window.localStorage.setItem(key, message);
  };

  const handleSend = () => {
    const randomID = Math.floor(Math.random() * 99999);
    savingLocal(randomID, JSON.stringify(messages));
    alert("Message Send");
  };

  return (
    <form className={styles.form}>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" id="name" onChange={handleOnChange} />
      <label htmlFor="email">Email</label>
      <input type="email" name="email" id="email" onChange={handleOnChange} />
      <label htmlFor="message">Message</label>
      <textarea
        cols="80"
        rows="15"
        id="message"
        placeholder="say smthng nice =)"
        onChange={handleOnChange}
      />
      <Link to="/messages">
        <button onClick={handleSend}>Send</button>
      </Link>
    </form>
  );
};

export default Contact;
