import _ from "lodash";
import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPosts = () => {

    return async (dispatch) => {
        const response = await jsonPlaceholder.get("/posts");

        dispatch({type: "FETCH_POST", payload: response.data});
    }

}

export const fetchUser = (userId) => {

    return async dispatch => {
        const response = await jsonPlaceholder.get(`/users/${userId}`);

        dispatch({type: "FETCH_USER", payload: response.data});
    }

}

// We will be using(directly) only this action creator only
export const fetchPostsAndUsers = () => {
    return async (dispatch, getState) => {
        await dispatch(fetchPosts());
        const uniqUserIds = _.uniq(_.map(getState().posts, 'userId'));
        uniqUserIds.forEach(id => dispatch(fetchUser(id)));
    }
}