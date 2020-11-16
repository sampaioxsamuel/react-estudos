import { useState } from "react";

const UserPost = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    fetch("https://dogsapi.origamid.dev/json/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
        email: email,
      }),
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={({ target }) => setUsername(target.value)}
        placeholder="username"
      />
      <input
        type="text"
        value={email}
        onChange={({ target }) => setEmail(target.value)}
        placeholder="email"
      />
      <input
        type="password"
        value={password}
        onChange={({ target }) => setPassword(target.value)}
        placeholder="senha"
      />
      <button>Enviar</button>
    </form>
  );
};

export default UserPost;
