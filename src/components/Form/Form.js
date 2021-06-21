import React, { useState, useEffect } from "react";
import { Validation } from '../../utils/Validation';
import eye from '../../images/eye.svg';

function Form(props) {

    const {
        login
    } = props

    const hardcodePassword = '123qwe'
    const hardcodeEmail = 'mail@mail.ru'

    const email = Validation();
    const password = Validation();

    const [isPasswordShow, setPasswordShow] = useState(false)
    const [isPassword, setPassword] = useState('password');
    const [isPasswordValue, setPasswordValue] = useState(false)
    const [isValidate, setValidate] = useState(true);

    function handleSubmit(evt) {
        evt.preventDefault();
        if ((email.value === hardcodeEmail) && (password.value === hardcodePassword)) {
            login()
        } else {
            email.setErrorMessage('Неверный логин или пароль')
            setValidate(false);
        }
    }

    function handlePassword() {
        if (isPasswordShow === true) {
            setPasswordShow(false)
            setPassword('password')
        } else {
            setPasswordShow(true)
            setPassword('view')
        }
    }

    useEffect(() => {
        if (password.value.length < 1) {
            setPasswordValue(false)
            setPassword('password')
            setPasswordShow(false)
        } else {
            setPasswordValue(true);
        }
    }, [password.value]);

    return (
        <form className="form" onSubmit={handleSubmit}>
            <span className="form__input-heading">Логин</span>
            <input
                type="email"
                className={`form__input ${!isValidate && 'form__input_error'}`}
                id="login-email-input"
                name="email"
                placeholder='Введите логин или e-mail'
                minLength="2"
                maxLength="40"
                required
                value={email.value}
                onChange={email.onChange}
            />
            <span id="login-email-input-error" className="form__input-error">{email.errorMessage}</span>
            <span className="form__input-heading form__input-heading_password">Пароль</span>
            <div className="form__password-container">
                <input
                    type={isPassword}
                    className={`form__input ${!isValidate && 'form__input_error'}`}
                    id="login-password-input"
                    name="password"
                    placeholder='Введите пароль'
                    minLength="2"
                    required
                    value={password.value}
                    onChange={password.onChange}
                />
                {isPasswordValue &&
                    (
                        <img src={eye} alt="Иконка показа пароля" className="form__password-eye" onClick={handlePassword} />
                    )
                }
            </div>
            <span id="login-password-input-error" className="form__input-error">{password.errorMessage}</span>
            <div className="form__checkbox-container">
                <input
                    className="form__checkbox"
                    type="checkbox"
                    id="button"
                    defaultChecked
                />
                <label htmlFor="button" className="form__checkbox-label">Запомнить меня</label>
                <p className="form__link">Забыли пароль?</p>
            </div>
            <button type="submit" className="form__submit-button">Войти</button>
            <p className="form__under-button-text">Вы можете войти через <span className="form__under-button-text_span">ЕСИА</span></p>
            <p className="form__under-button-text">У Вас еще нет аккаунта? <span className="form__under-button-text_span">Зарегистрируйтесь</span></p>
        </form>
    );

}

export default Form;