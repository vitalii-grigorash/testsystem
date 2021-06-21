import React from "react";
import wrap from '../../images/wrap.svg';
import vector from '../../images/vector-down.svg';
import bell from '../../images/bell.svg';
import settings from '../../images/settings.svg';
import ava from '../../images/ava.png';

function Header() {

  return (

    <section className="header">
        <img src={wrap} alt="Иконка меню" className="header__wrap"/>
        <h2 className="header__logo">testsystem</h2>
        <input type="text" className="header__search" placeholder="Поиск" />
        <div className="header__subdivisions">
            <p className="header__subdivisions-text">Подразделения</p>
            <img src={vector} alt="Иконка вектора" className="header__subdivisions-vector" />
        </div>
        <div className="header__navigation">
            <p className="header__nav-link">Система</p>
            <p className="header__nav-link">Первая система</p>
            <p className="header__nav-link">Вторая система</p>
            <p className="header__nav-link">Третья система</p>
            <p className="header__nav-link">Система</p>
        </div>
        <div className="header__user">
            <button className="header__user-help">Помощь</button>
            <img src={bell} alt="Иконка колокольчика" className="header__user-bell" />
            <img src={settings} alt="Иконка шестеренки" className="header__user-settings" />
            <img src={ava} alt="Иконка шестеренки" className="header__user-ava" />
        </div>
    </section>

  );

}

export default Header;