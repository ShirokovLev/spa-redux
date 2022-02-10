import { React, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { newsPost, approvePost, deletePost } from "../../actions";


const NewsList = ()=> {

    const { newsList, isAdmin, isGuest } = useSelector((state) => ({
        newsList: state.news,
        isAdmin: state.isAdmin,
        isGuest: state.isGuest
    }));

    const dispatch = useDispatch();

    const [searchQuary, setSearchQuary] = useState('')

    const newsPostHandler = (e)=>{
        e.preventDefault()
        dispatch(
            newsPost(
                    newsList.length+1, 
                    e.target.elements.newsTitle.value, 
                    e.target.elements.newsDate.value, 
                    e.target.elements.newsText.value
                )
            )
        console.log(newsList.length)
    }

    const approveHandler = (id)=>{
        dispatch(approvePost(id))
    }

    const deleteHandler = (id)=>{
        dispatch(deletePost(id))
    }

    return (
        <div className="news-block">
            <div className="news-filter">
                <input type="text" onChange={(e)=> setSearchQuary(e.target.value.toLowerCase())}/>
            </div>
            <ul className="news-list">
                {
                    newsList.filter((item)=>{
                        return (
                            (item.title.toLowerCase().indexOf(searchQuary) != -1) 
                            && 
                            (isGuest ? item.approved : true)
                        ) 
                    }).map((item)=>{
                        return(
                            <li key={item.id}>
                                <div className="news-item">
                                    <p className="news-item__caption">{item.title}</p>
                                    <p className="news-item__date">{item.date}</p>
                                    <p className="news-item__text">{item.text}</p>
                                    {
                                        isAdmin ? 
                                        <>
                                            {!item.approved ? <button onClick={()=>{approveHandler(item.id)}} className="news-item__action-link">Одобрить</button> : null}
                                            <button onClick={()=>{deleteHandler(item.id)}} className="news-item__action-link">Удалить</button>
                                        </> : null
                                    }
                                    
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
            {
                !isGuest ?
                    <form action="" onSubmit={newsPostHandler} className="add-news">
                        <p className="caption add-news__caption">
                            Добавить новость
                        </p>
                        <div className="input-block">
                            <label htmlFor="news-title">Заголовок новости</label>
                            <input name="newsTitle" type="text" id="news-title"/>
                        </div>
                        <div className="input-block">
                            <label htmlFor="news-date">Дата новости</label>
                            <input name="newsDate" type="text" id="news-date"/>
                        </div>
                        <div className="input-block">
                            <label htmlFor="news-text">Текст новости</label>
                            <textarea name="newsText" id="news-text" cols="30" rows="10"></textarea>
                        </div>
                        <button className="button">Отправить</button>
                    </form>
                : null
            }
            
        </div>
      
    )
  }
  
  export default NewsList;