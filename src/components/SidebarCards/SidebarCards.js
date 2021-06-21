import React, { useState } from "react";
import sidebarSettings from '../../images/sidebar-settings.svg';
import checkIcon from '../../images/check.svg';
import closeIcon from '../../images/close-icon.svg';
import comment from '../../images/comment.svg';
import redX from '../../images/red-x.svg';

function SidebarCards() {

  const [isShow, setShow] = useState(true);

  function closeMessage() {
    setShow(false);
  }

  return (

    <section className="sidebar-cards">

      {isShow &&
        (
          <div className="sidebar-card">
            <div className="sidebar-card__heading-info">
              <img src={sidebarSettings} alt="Иконка шестеренки" className="sidebar-card__settings-icon" />
              <p className="sidebar-card__info-text">системное сообщение</p>
              <img src={closeIcon} alt="Иконка закрытия" className="sidebar-card__close-icon" onClick={closeMessage} />
            </div>
            <p className="sidebar-card__info">Технические работы с 8:00 до 14:00</p>
          </div>
        )
      }

      <div className="sidebar-card sidebar-card_data">
        <div className="sidebar-card__heading-info">
          <p className="sidebar-card__info-text">исследования</p>
          <p className="sidebar-card__info-time">22:00</p>
        </div>
        <p className="sidebar-card__info">Вам назначено 10 исследований</p>
        <p className="sidebar-card__info-link">Смотреть</p>
      </div>

      <div className="sidebar-card sidebar-card_data">
        <div className="sidebar-card__heading-info">
          <img src={checkIcon} alt="Иконка галочки" className="sidebar-card__check" />
          <p className="sidebar-card__info-text sidebar-card__info-text_green">дикие животные</p>
          <p className="sidebar-card__info-time">22:00</p>
        </div>
        <p className="sidebar-card__info-project">проект</p>
        <p className="sidebar-card__info-status">Изменен статус на<span className="sidebar-card__info-approved sidebar-card__info-status_approved"> Одобрен</span></p>
      </div>

      <div className="sidebar-card sidebar-card_data">
        <div className="sidebar-card__heading-info">
          <p className="sidebar-card__info-text">Дикие животные</p>
          <p className="sidebar-card__info-time">22:00</p>
        </div>
        <div className="sidebar-card__comment">
          <img src={comment} alt="Иконка комментария" className="sidebar-card__comment-icon" />
          <p className="sidebar-card__comment-from">Иван Иванов</p>
        </div>
        <p className="sidebar-card__info">Большую ты проделал работу!</p>
        <p className="sidebar-card__info-link">ответить</p>
      </div>

      <div className="sidebar-card sidebar-card_data">
        <div className="sidebar-card__heading-info">
          <p className="sidebar-card__info-text">исследования</p>
          <p className="sidebar-card__info-time">22:00</p>
        </div>
        <p className="sidebar-card__info">Вам назначено 5 исследований</p>
        <p className="sidebar-card__info-link">Смотреть</p>
      </div>

      <div className="sidebar-card sidebar-card_data sidebar-card_data_rejected">
        <div className="sidebar-card__heading-info">
          <img src={redX} alt="Иконка красного квадрата с крестиком" className="sidebar-card__check sidebar-card__check_rejected" />
          <p className="sidebar-card__info-text sidebar-card__info-text_green">дикие животные</p>
          <p className="sidebar-card__info-time">22:00</p>
        </div>
        <p className="sidebar-card__info-project">проект</p>
        <p className="sidebar-card__info-status">Изменен статус на<span className="sidebar-card__info-approved sidebar-card__info-status_rejected"> Отклонен</span></p>
      </div>

    </section>

  );

}

export default SidebarCards;