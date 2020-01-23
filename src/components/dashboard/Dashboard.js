import React, { Fragment, useState } from "react";
import Sidebar from "../sidebar/Sidebar";

const Dashboard = props => {
  return (
    <Fragment>
      <Sidebar />
      <div>Dashboard</div>
    </Fragment>
  );
};

Dashboard.propTypes = {};

export default Dashboard;
