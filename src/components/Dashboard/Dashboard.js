import React from "react";
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import TopPanel from '../TopPanel/TopPanel';
import MainInfo from '../MainInfo/MainInfo';
import paperIcon from '../../images/paper.svg';
import paperIconBlue from '../../images/paper-blue.svg';
import Footer from '../Footer/Footer';

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
        <div className="dashboard__info-container">
          <TopPanel />
          <MainInfo
            headingText={'Проекты'}
            icon={paperIcon}
            blue={false}
          />
          <MainInfo
            headingText={'исследования'}
            icon={paperIconBlue}
            blue={true}
          />
        </div>
      </div>
      <Footer />
    </div>

  );

}

export default Dashboard;