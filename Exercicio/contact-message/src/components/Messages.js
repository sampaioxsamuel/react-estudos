import React from "react";

const Messages = () => {
  const messageExists = localStorage.getItem("message");
  const messageLocalStorage = JSON.parse(localStorage.getItem("message"));

  const [message, setMessage] = React.useState(null);

  React.useEffect(() => {
    setMessage({ ...message, messageLocalStorage });
  }, [message]);

  if (message === null) return <div>you didn't send any message</div>;
  return <div>cuzin</div>;
};

export default Messages;
