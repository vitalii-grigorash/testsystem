import React from "react";
import Card from '../Card/Card';
import greenArrow from '../../images/green-arrow.svg';
import redArrow from '../../images/red-arrow.svg';
import vectorBlue from '../../images/vector-blue.svg';
import comment from '../../images/comment.svg';
import commentBlue from '../../images/comment-blue.svg';
import replyIcon from '../../images/reply-icon.svg';
import vectorGreen from '../../images/vector-green.svg';
import vectorBlueResult from '../../images/vector-blue-result.svg';

function Cards(props) {

    const {
        blue
    } = props;

    const commentIcon = `${blue ? commentBlue : comment}`;
    const vector = `${blue ? vectorBlueResult : vectorGreen}`;

    return (
        <section className={`cards ${blue && 'cards_last'}`}>
            <div className="card-container">
                <Card
                    headingText={'Дикие животные'}
                    description={'Lorem ipsum dolor sit amet'}
                    newCard={false}
                >
                    <div className="card__info">
                        <div className="card__info-container">
                            <div className="card__value-container">
                                <div className="card__value-heading-info">
                                    <div className="card__value-numbers">
                                        <p className="card__value-heading-number">2 500</p>
                                        <img className="card__value-heading-icon" src={redArrow} alt="Красная стрелка" />
                                        <p className="card__value-heading-percent">- 9%</p>
                                    </div>
                                    <p className="card__value-action">читают</p>
                                </div>
                                <div className="card__value-calc">
                                    <p className="card__value-calc-number">-30</p>
                                    <p className="card__value-calc-days">за 30 дней</p>
                                </div>
                            </div>
                            <div className="card__value-container">
                                <div className="card__value-heading-info card__value-heading-info_border">
                                    <div className="card__value-numbers">
                                        <p className="card__value-heading-number card__value-heading-number_green">6 400</p>
                                        <img className="card__value-heading-icon" src={greenArrow} alt="Зеленая стрелка" />
                                        <p className="card__value-heading-percent">+ 5%</p>
                                    </div>
                                    <p className="card__value-action">смотрят</p>
                                </div>
                                <div className="card__value-calc">
                                    <p className="card__value-calc-number card__value-calc-number_green">+45</p>
                                    <p className="card__value-calc-days">за 30 дней</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>
                <div className="comment">
                    <div className="comment__user-container">
                        <img className="comment__icon-message" src={comment} alt="Иконка сообщения" />
                        <p className="comment__author">Иван Иванов</p>
                    </div>
                    <div className="comment__message-container">
                        <p className="comment__message">Большую ты проделал работу!</p>
                    </div>
                </div>
            </div>
            <div className="card-container">
                <Card
                    headingText={'исследование дрожжей под микроскопом'}
                    description={'Результаты'}
                    newCard={false}
                >
                    <div className="card__info">
                        <div className="card__info-container">
                            <div className="card__value-container">
                                <div className="card__value-heading-info">
                                    <div className="card__value-numbers">
                                        <p className="card__value-heading-number">1 млн</p>
                                    </div>
                                    <p className="card__value-action">Бактерий</p>
                                </div>
                            </div>
                            <div className="card__value-container">
                                <div className="card__value-heading-info card__value-heading-info_border">
                                    <div className="card__value-numbers">
                                        <img className="card__value-heading-vector" src={vectorBlue} alt="Cиняя галочка" />
                                        <p className="card__value-heading">Расчеты верны</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="card__under-info-link"><span className="card__under-info-link card__under-info-link_span">Анализ под</span> микроскопом «Хризантема»</p>
                    </div>
                </Card>
                <div className="comment">
                    <div className="comment__user-container">
                        <img className="comment__icon-message" src={commentIcon} alt="Иконка сообщения" />
                        <p className="comment__author">Иван Иванов</p>
                    </div>
                    <div className="comment__message-container">
                        <p className="comment__message">Мощно! Как ты до этого догадался?</p>
                        <p className="comment__link">ответить</p>
                        <img className="comment__icon" src={replyIcon} alt="Иконка - ответить" />
                    </div>
                </div>
                <div className="comment">
                    <div className="comment__message-container">
                        <img className="comment__vector-icon" src={vector} alt="Зеленая галочка" />
                        <p className={`comment__message ${blue ? 'comment__message_blue' : 'comment__message_green'}`}>Результаты подтверждены</p>
                    </div>
                </div>
            </div>
            <div className="card-container">
                <Card
                    headingText={'Новинка:'}
                    headingTextSpan={'микроскоп хризантема'}
                    description={'Новые возможности'}
                    newCard={true}
                >
                    <div className="card__info">
                        <div className="card__info-container">
                            <div className="card__value-container">
                                <p className="card__value-production">Производство</p>
                            </div>
                            <div className="card__value-container">
                                <p className="card__value-country">Германия</p>
                            </div>
                        </div>
                        <p className="card__under-info-link card__under-info-link_purple"><span className="card__under-info-link card__under-info-link_span">Доступно:</span> микроскопический мега точный анализ</p>
                    </div>
                </Card>
            </div>
        </section>
    );

}

export default Cards;