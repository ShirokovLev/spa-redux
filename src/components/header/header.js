import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { showPopup, signOut} from '../../actions'
import './header.css'
import '../../assets/svgs/logo-icon'
import LogoIcon from '../../assets/svgs/logo-icon';


const Header = ()=>{

    const dispatch = useDispatch();

    const { isGuest, isPopupVisible } = useSelector((state) => ({
        isGuest: state.isGuest,
        isPopupVisible: state.isPopupVisible,
    }));

    const popUpTrigger = ()=> {
        dispatch(showPopup())
    }

    const logOutHandler = ()=> {
        dispatch(signOut())
    }

    return(
        <header className="header">
            <Link className="header__logo" to={"/"}>
                <LogoIcon/>
            </Link>
            <Link className="header__link" to={"/news"}>Новости</Link>
            {
                isGuest ? <a href="#" className="header__link" onClick={popUpTrigger}>Вход</a> : <a href="#" onClick={logOutHandler}>Выход</a>
            }
            
        </header>
    )
}

export default Header