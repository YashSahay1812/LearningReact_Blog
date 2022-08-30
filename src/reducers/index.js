import {combineReducers} from "redux";

const postsReducer = (action) => {
    if(action.type === 'FETCH_POST') {
        return action.payload.data;
    }
}

export default combineReducers({
    posts: postsReducer
});