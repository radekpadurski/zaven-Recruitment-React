import React, { useState } from "react";
import { Alert, Button, FormFeedback, FormGroup, Input, Label } from "reactstrap";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useCookies } from "react-cookie";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameValidation, setUsernameValidation] = useState("");
  const [passwordValidation, setPasswordValidation] = useState("");
  const [loginFaildMessage, setloginFaildMessage] = useState("");
  const [cookies, setCookie] = useCookies();

  const history = useHistory();
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (username === "") {
      setUsernameValidation("Required field *");
    }
    if (password === "") {
      setPasswordValidation("Required field *");
    }
    if (username !== "" && password !== "") {
      axios({
        method: "POST",
        url: `${process.env.REACT_APP_API_URL_LOGIN}`,
        data: JSON.stringify({
          username: username,
          password: password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          setloginFaildMessage("");
          console.log(res.data);
          setCookie("token", res.data.token);
          history.push("/dashboard");
        })
        .catch((error) => {
          switch (error.response?.data) {
            case undefined:
              setloginFaildMessage("Network error, please try again");
              break;
            case "Wrong credentials":
              setloginFaildMessage("Wrong username/password");
              break;
            default:
              setloginFaildMessage("Login error, please try again");
              break;
          }
        });
    }
  };
  const onDismiss = () => setloginFaildMessage("");

  return (
    <form className="form" onSubmit={submit}>
      <div>
        <div>
          <Alert color="danger" isOpen={!!loginFaildMessage} toggle={onDismiss} fade={false}>
            {loginFaildMessage}
          </Alert>
        </div>
        <FormGroup>
          <Label>Username:</Label>
          <Input
            invalid={!!usernameValidation}
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => {
              setUsernameValidation("");
              setUsername(e.target.value);
            }}
          />
          <FormFeedback>{usernameValidation}</FormFeedback>
        </FormGroup>
      </div>
      <div>
        <FormGroup>
          <Label>Password:</Label>
          <Input
            invalid={!!passwordValidation}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPasswordValidation("");
              setPassword(e.target.value);
            }}
          />
          <FormFeedback>{passwordValidation}</FormFeedback>
        </FormGroup>
      </div>
      <div>
        <Button type="submit">Sign in</Button>
      </div>
    </form>
  );
};

export default LoginForm;
