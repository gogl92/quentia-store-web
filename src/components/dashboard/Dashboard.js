import React, { Fragment, useState } from "react";
import { Container } from "reactstrap";
import Sidebar from "../sidebar/Sidebar";

const Dashboard = props => {
  return (
    <Container>
      <Sidebar />
      <div>Dashboard</div>
    </Container>
  );
};

Dashboard.propTypes = {};

export default Dashboard;
