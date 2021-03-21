import axios from "axios";
import React, { useContext, useCallback, useState } from "react";
import { UserContext, useUserContext } from "./User.contex";

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
      <h1>Dashboard</h1>
    </div>
  );
};

export default Dashboard;
