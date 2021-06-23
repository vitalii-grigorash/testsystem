import React from "react";
import ellipses from '../../images/ellipses.svg';

function Card(props) {

    const {
        headingText,
        description,
        children,
        newCard,
        headingTextSpan,
    } = props;

  return (
    <section className="card">
        <div className="card__heading-container">
            {newCard ? 
                (
                    <h4 className="card__heading card__heading_blue">{headingText} <span className="card__heading card__heading_span">{headingTextSpan}</span></h4>
                ) :
                (
                    <h4 className="card__heading">{headingText}</h4>
                )
            }
            <img className="card__ellipses-icon" src={ellipses} alt="Иконка эллипсов" />
        </div>
        <p className="card__description">{description}</p>
            {children}
        <p className="card__link">Подробнее</p>
    </section>
  );
}

export default Card;