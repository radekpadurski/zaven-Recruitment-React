import React, { useState } from "react";
import { Button, Input } from "reactstrap";
import axios from "axios";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios({
      method: "POST",
      url: `${process.env.REACT_APP_API_URL}`,
      data: JSON.stringify({
        username: username,
        password: password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        alert("Success!");
      })
      .catch((error) => {
        alert("Failed!");
      });
  };

  return (
    <form className="form" onSubmit={submit}>
      <div>
        <Input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <Button type="submit">Sign in</Button>
      </div>
    </form>
  );
};

export default LoginForm;
