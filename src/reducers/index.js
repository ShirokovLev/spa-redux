const InitialState = {
    news: [
      {
        id: 1,
        title: 'ДОЛГАЯ ДОРОГА ДОМОЙ ИЛИ ИСПЫТАНИЯ КОРОНАВИРУСОМ',
        text: 'Сегодня  я хочу рассказать непростую историю жительницы Шексны Нины Николаевны Шалаевой.',
        date: '12.01.2022',
        approved: true
      },
      {
        id: 2,
        title: 'ШЕКСНИНСКИЙ АВТОУГОНЩИК: СТРАСТЬ К ЧУЖИМ МАШИНАМ В КРОВИ…',
        text: 'Когда на территории Шекснинского района совершается подряд несколько угонов транспортных средств, подозрение сотрудников полиции падает только на одного гражданина. ',
        date: '13.01.2022',
        approved: true
      },
      {
        id: 3,
        title: 'В ШЕКСНЕ ГОСТЕЙ - СО ВСЕХ ВОЛОСТЕЙ!',
        text: '16 января в Шексне состоялся III межрайонный праздник «Играй, гармонь шекснинская».',
        date: '14.01.2022',
        approved: true
      },
      {
        id: 4,
        title: 'ЖЕНИТЕСЬ ГДЕ УГОДНО: ОТ ШЕКСНЫ ДО МАГАДАНА Изменения в законодательстве',
        text: 'С 1 января 2022 года граждане могут обращаться в любой орган ЗАГС по вопросу регистрации актов гражданского состояния.',
        date: '15.01.2022',
        approved: true
      },
      {
        id: 5,
        title: 'ШЕКСНИНСКОЕ АТП ОБЪЯВИЛО РОЗЫСК! ТРЕБУЮТСЯ ВОДИТЕЛИ С КАТЕГОРИЕЙ «Д»',
        text: 'Вопросов и претензий к Шекснинскому АТП во все времена было много.',
        date: '16.01.2022',
        approved: false
      }
  ],
  isAdmin: false,
  isUser: false,
  isGuest: true,
  isPopupVisible: false,
  adminAccess: {
    login: 'admin',
    password: '12345678'
  },
  userAccess: {
    login: 'user',
    password: '12345678'
  },
}
  
  // Actions
  
  const reducer = (state = InitialState, action)=> {
  
      switch(action.type){
  
          case "SHOW_POPUP": {
              return {
                  ...state,
                  isPopupVisible: true,
              }
          }

          case "HIDE_POPUP": {
            return {
                ...state,
                isPopupVisible: false,
            }
          }

          case "SIGN_AS_USER": {
            return {
                ...state,
                isUser: true,
                isAdmin: false,
                isGuest: false
            }
          }

          case "SIGN_AS_ADMIN": {
            return {
                ...state,
                isUser: false,
                isAdmin: true,
                isGuest: false
            }
          }

          case "SIGN_OUT": {
            return {
                ...state,
                isUser: false,
                isAdmin: false,
                isGuest: true
            }
          }

          case "NEWS_POST": {
            return {
                ...state,
                news: [...state.news, 
                  {
                    id: action.id,
                    title: action.title,
                    text: action.text,
                    date: action.date,
                    approved: false
                  }
                ]
            }
          }

          case "DELETE_POST": {
            return {
              ...state,
              news: state.news.filter((item) => item.id !== action.id)
            }
          }

          case "APPROVE_POST": {
            state.news.map((item)=>{
              if(item.id === action.id){
                item.approved = true          
              }
            })
            return {
                ...state
            }
          }


          

          default: return state
      }
          
  }
  
  export default reducer