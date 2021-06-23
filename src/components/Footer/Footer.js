import React from "react";

function Footer() {

  return (
    <div className="footer">
        <div className="footer__container">
          <div className="footer__left-side">
            <div className="footer__heading-container">
              <h3 className="footer__heading">testsystem</h3>
              <input className="footer__heading-input" type="text" placeholder="поиск" />
            </div>
            <button className="footer__button">помощь</button>
            <p className="footer__contacts">контакты</p>
            <p className="footer__email">support@testsystem.ru</p>
          </div>
          <div className="footer__right-side"></div>
        </div>
        <div className="footer__bottom-side">
          <p className="footer__bottom-text">Политика конфиденциальности</p>
          <p className="footer__bottom-text">Условия использования</p>
          <p className="footer__bottom-text">Все права защищены 2020 © TESTSYSTEM</p>
        </div>
    </div>
  );

}

export default Footer;