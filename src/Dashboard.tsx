import axios from "axios";
import React from "react";
import { useUserContext } from "./User.contex";
import { Button, Navbar, NavbarText } from "reactstrap";
import { useCookies } from "react-cookie";

const Dashboard = () => {
  const {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    username,
    setUsername,
  } = useUserContext();
  const [cookies, setCookie, removeCookie] = useCookies();

  const updateUserData = () => {
    axios({
      url: `${process.env.REACT_APP_API_URL_GET}`,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setFirstName(res.data.firstName);
        setLastName(res.data.lastName);
        setUsername(res.data.username);
      })
      .catch((error) => {
        alert(error);
      });
  };
  updateUserData();

  function handleClickButton() {
    removeCookie("token");
  }

  return (
    <div>
      <Navbar color="dark">
        <NavbarText style={{ color: "white" }}>
          First Name: {firstName} Last Name: {lastName}
        </NavbarText>
        <Button onClick={handleClickButton}>Logout</Button>
      </Navbar>
      <h1>Dashboard Site</h1>
    </div>
  );
};

export default Dashboard;
