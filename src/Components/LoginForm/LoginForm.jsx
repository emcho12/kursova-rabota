import React, { useState } from 'react';
import './LoginForm.css';
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";

const LoginRegister = () => {

    const [action, setAction] = useState('');   // Дефинирал съм състояние "action", което ще определя коя форма да е активна (вход или регистрация)
                                                // и useState hook , за да ми определя състоянията на формата.

    const registerLink = () => {
        setAction(' active');    // Формата за регистрация ,когато е активна
    };

    const loginLink = () => {
        setAction('');          //Тук не съм сложил същата стойност ,
                              // за да не се сливат двете форми и формата не активна.
    };

    return ( 
    
        
    <div className={`wrapper${action}`}>
    <div className="form-box login">
            <form action="">
                <h1>Влизане</h1>
    <div className="input-box">
    <input type="text" placeholder='Username' required />
            <FaUser className='icon' />
    </div>
    <div className="input-box">
        <input type="password" placeholder='Password' required />
            <FaLock className='icon' />
    </div>

    <div className="remember-forgot">
    <label><input type="checkbox" />Запомни ме</label>
            <a href="#">Забравена парола?</a>
    </div>

        <button type="submit">Влезни</button>

    <div className="register-link">
        <p>Нямаш акаунт? <a href="#" onClick={registerLink}>Регистрирай се.</a></p>
    </div>
    </form>
    </div>

            <div className="form-box register">
                <form action="">
                    <h1>Регистрация</h1>
                    <div className="input-box">
                        <input type="text" placeholder='Username' required />
                        <FaUser className='icon' />
                    </div>
                    <div className="input-box">
                        <input type="email" placeholder='Email' required />
                        <FaEnvelope className='icon' />
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder='Password' required />
                        <FaLock className='icon' />
                    </div>

                    <div className="remember-forgot">
                        <label><input type="checkbox" />I agree to the terms & conditions</label>
                    </div>

                    <button type="submit">Регистрирай се!</button>

                    <div className="register-link">
                        <p>Вече имаш акаунт? <a href="#" onClick={loginLink}>Влизане</a></p>
                    </div>
                </form>
            </div>
        </div>
   );
};

export default LoginRegister;