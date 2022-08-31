import {combineReducers} from "redux";

const postsReducer = (posts = [], action) => {
    if(action.type === 'FETCH_POST') {
        return action.payload;
    }
    return posts;
}

const usersReducer = (users = [], action) => {
    if(action.type === 'FETCH_USER') {
        return [...users, action.payload];
    }
    return users;
}

export default combineReducers({
    posts: postsReducer,
    users: usersReducer
});