import React from "react";
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import TopPanel from '../TopPanel/TopPanel';

function Dashboard(props) {

  const {
    logout
  } = props

  return (

    <div className="dashboard">
      <Header 
        logout={logout}
      />
      <div className="dashboard__main-container">
        <Sidebar />
        <TopPanel />
      </div>
    </div>

  );

}

export default Dashboard;