import React from "react";
import Login from '../Login/Login'
import maskGroupTopImg from '../../images/mask-group-top.svg'
import maskGroupBottomImg from '../../images/mask-group-bottom.svg'

function Main(props) {

  const {
    login
  } = props
  
  return (

    <section className="main">

        <img className="main__top-img" src={maskGroupTopImg} alt="Верхнее изображение фона" />
        <img className="main__bottom-img" src={maskGroupBottomImg} alt="Нижнее изображение фона" />

        <Login 
          login={login}
        />
        
    </section>

  );

}

export default Main;