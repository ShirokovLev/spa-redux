import React from 'react';
import { Route, Routes } from 'react-router';
import MainPage from '../main-page';
import Header from '../header';
import Popup from '../popup'
import { useSelector } from 'react-redux';
import NewsList from '../news-list';
import 'normalize.css'
import './app.css'

const App = ()=> {

  const { isPopupVisible } = useSelector((state) => ({
      isPopupVisible: state.isPopupVisible,
  }));

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" exact element={<MainPage/>}>
          
        </Route>
        <Route path="/news" exact element={<NewsList/>}>
          
        </Route>
      </Routes>
      {
        isPopupVisible ? <Popup/> : null
      }
      
      
    </div>
  )
}

export default App;