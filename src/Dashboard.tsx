import axios from "axios";
import React from "react";
import { useUserContext } from "./User.contex";
import { Navbar, NavbarText } from "reactstrap";

const Dashboard = () => {
  const {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    username,
    setUsername,
  } = useUserContext();

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
  return (
    <div>
      <Navbar color="dark">
        <NavbarText style={{ color: "white" }}>
          First Name: {firstName} Last Name: {lastName}
        </NavbarText>
      </Navbar>
      <h1>Dashboard Site</h1>
    </div>
  );
};

export default Dashboard;
