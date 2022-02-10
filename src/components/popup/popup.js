import { React, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { signAsAdmin, signAsUser, hidePopup, } from '../../actions';

import './popup.css'


const Popup = ()=>{

    const dispatch = useDispatch();

    const {userLogin, userPassword, adminLogin, adminPassword} = useSelector((state) => ({
        userLogin: state.userAccess.login,
        userPassword: state.userAccess.password,
        adminLogin: state.adminAccess.login,
        adminPassword: state.adminAccess.password
    }));

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [valid, setValid] = useState(true);

    const submitHandler = (e)=>{
        e.preventDefault();
        if( (login === userLogin) && (password === userPassword) ){
            dispatch(signAsUser())
            dispatch(hidePopup())
        } else if( (login === adminLogin) && (password === adminPassword) ){
            dispatch(signAsAdmin())
            dispatch(hidePopup())
        } else {
            setValid(false)
        }

        
    }

    return(
        <div className="overlay">
            <div className="popup-block">
                <p className="popup-block__caption">Вход</p>
                <form onSubmit={submitHandler} className="login-form">
                    <input name="login" type="text" placeholder="Логин" value={login} onChange={e => setLogin(e.target.value)}/>
                    <input name="password" type="password" placeholder="Пароль" value={password} onChange={e => setPassword(e.target.value)}/>
                    <button className="button">Войти</button>
                    {!valid ? <p>Невалидная пара логин + пароль</p>: null}
                </form>
            </div>
        </div>
    )
}

export default Popup