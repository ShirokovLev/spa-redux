export const addUser = (body) => {
    return {type: 'USER_ADD', data: body}
}

export const showPopup = () => {
    return {type: 'SHOW_POPUP'}
}

export const hidePopup = () => {
    return {type: 'HIDE_POPUP'}
}

export const signAsAdmin = () => {
    return {type: 'SIGN_AS_ADMIN'}
}

export const signAsUser = () => {
    return {type: 'SIGN_AS_USER'}
}

export const signOut = () => {
    return {type: 'SIGN_OUT'}
}

export const newsPost = (id, title, date, text) => {
    return {type: 'NEWS_POST', id, title, date, text}
}

export const approvePost = (id) => {
    return {type: 'APPROVE_POST', id}
}

export const deletePost = (id) => {
    return {type: 'DELETE_POST', id}
}