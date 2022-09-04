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

//METHOD 1 :
// We will be using(directly) only this action creator only
export const fetchPostsAndUsers = () => {
    return async (dispatch, getState) => {

        await dispatch(fetchPosts());
        const uniqUserIds = _.uniq(_.map(getState().posts, 'userId'));
        uniqUserIds.forEach(id => dispatch(fetchUser(id)));

        // alternative :
        // _.chain(getState().posts)
        //     .map('userId')
        //     .uniq()
        //     .forEach(id => dispatch(fetchUser(id)))
        //     .value();
    }
}

// Alternate option : METHOD 2
// export const fetchUser = id => {

//     return dispatch => {
//         _fetchUser(id, dispatch);
//     }
    
// }

// const _fetchUser = _.memoize(async (id, dispatch) => {
//     const response = await jsonPlaceholder.get(`/users/${id}`); 

//     dispatch({typs: "FETCH_USER", payload: response.data});
// });