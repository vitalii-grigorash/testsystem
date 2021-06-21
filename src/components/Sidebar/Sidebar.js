import React from "react";
import SidebarCards from '../SidebarCards/SidebarCards';

function Sidebar() {

  return (

    <section className="sidebar">
        <div className="sidebar__heading-container">
            <h3 className="sidebar__heading">данные за последний месяц</h3>
        </div>
        <div className="sidebar__news-container">
            <p className="sidebar__news">новости</p>
            <p className="sidebar__news-value">25</p>
            <p className="sidebar__news-close">закрыть все</p>
        </div>
        <SidebarCards />
    </section>

  );

}

export default Sidebar;