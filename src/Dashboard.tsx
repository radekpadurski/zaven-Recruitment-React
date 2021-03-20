import React from "react";
import { useCookies } from "react-cookie";
import { Button } from "reactstrap";

const Dashboard = () => {
  const [cookies, setCookie] = useCookies();
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
};

export default Dashboard;
