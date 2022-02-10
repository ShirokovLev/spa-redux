import React from 'react';
import { useSelector } from 'react-redux';


const MainPage = ()=>{

    const { isGuest, isUser, isAdmin, userLogin, adminLogin } = useSelector((state) => ({
        isGuest: state.isGuest,
        isUser: state.isUser,
        isAdmin: state.isAdmin,
        userLogin: state.userAccess.login,
        adminLogin: state.adminAccess.login,
    }));

    return(
        <p>Привет,&nbsp;{
            isGuest ? 'Гость' : 
            (isUser ? userLogin : 
            (isAdmin ? adminLogin : null))
        }
        </p>
    )
}

export default MainPage