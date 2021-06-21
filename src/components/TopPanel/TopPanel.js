import React from "react";
import arrow from '../../images/arrow.svg';

function TopPanel() {

  return (

    <section className="top-panel">

      <div className="top-panel-card top-panel-card_red-border">
        <div className="top-panel-card__heading-info">
          <p className="top-panel-card__info-text top-panel-card__info-text_red">маркетплейс</p>
          <img src={arrow} alt="Стрелка" className="top-panel-card__arrow-icon"/>
        </div>
        <p className="top-panel-card__info"><span className="top-panel-card__info top-panel-card__info_span">35</span> новых позиций</p>
      </div>

      <div className="top-panel-card top-panel-card_blue-border">
        <div className="top-panel-card__heading-info">
          <p className="top-panel-card__info-text top-panel-card__info-text_blue">маркетплейс</p>
          <img src={arrow} alt="Стрелка" className="top-panel-card__arrow-icon"/>
        </div>
        <p className="top-panel-card__info"><span className="top-panel-card__info top-panel-card__info_span">35</span> новых позиций</p>
      </div>

      <div className="top-panel-card top-panel-card_green-border">
        <div className="top-panel-card__heading-info">
          <p className="top-panel-card__info-text top-panel-card__info-text_green">маркетплейс</p>
          <img src={arrow} alt="Стрелка" className="top-panel-card__arrow-icon"/>
        </div>
        <p className="top-panel-card__info"><span className="top-panel-card__info top-panel-card__info_span">35</span> новых позиций</p>
      </div>

      <div className="top-panel-card top-panel-card_orange-border">
        <div className="top-panel-card__heading-info">
          <p className="top-panel-card__info-text top-panel-card__info-text_orange">маркетплейс</p>
          <img src={arrow} alt="Стрелка" className="top-panel-card__arrow-icon"/>
        </div>
        <p className="top-panel-card__info"><span className="top-panel-card__info top-panel-card__info_span">35</span> новых позиций</p>
      </div>

      <div className="top-panel-card top-panel-card_purple-border">
        <div className="top-panel-card__heading-info">
          <p className="top-panel-card__info-text top-panel-card__info-text_purple">маркетплейс</p>
          <img src={arrow} alt="Стрелка" className="top-panel-card__arrow-icon"/>
        </div>
        <p className="top-panel-card__info"><span className="top-panel-card__info top-panel-card__info_span">35</span> новых позиций</p>
      </div>
      
    </section>

  );

}

export default TopPanel;