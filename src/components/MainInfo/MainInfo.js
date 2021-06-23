import React from "react";
import Cards from '../Cards/Cards';

function MainInfo(props) {

  const {
    headingText,
    icon,
    blue,
  } = props;

  return (

    <section className="main-info">

      <div className={`main-info__heading ${blue && 'main-info__heading_last'}`}>
        <img className="main-info__heading-icon" src={icon} alt="Иконка" />
        <h3 className="main-info__heading-text">{headingText}</h3>
        <p className="main-info__heading-number">25</p>
        <p className="main-info__heading-link">смотреть все</p>
      </div>

      <Cards
        blue={blue}
      />

    </section>

  );

}

export default MainInfo;