import React from "react";
import vector from "../../images/vector.svg";
import Form from '../Form/Form';

function Login(props) {

    const {
        login
    } = props

    return (

        <div className="login">
            <div className="login__container">
                <h3 className="login__heading">testsystem</h3>
                <div className="form-container">
                    {/* eslint-disable-next-line */}
                    <a href="#" rel="noopener noreferrer" className="form-container__link">
                        <img src={vector} alt="Вектор" className="form-container__link-vektor" />
                        <p className="form-container__link-text">На главную</p>
                    </a>
                    <h3 className="form-container__headig">Добро пожаловать в testsystem</h3>
                    <Form
                        login={login}
                    />
                </div>
            </div>
        </div>

    );

}

export default Login;