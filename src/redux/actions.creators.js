import {LOAD_POSTS, LOAD_USERS} from "./action.types";
import {loadUsersData} from "./action";

const loadUsers = () => async (dispatch) => {
    let users = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json());
    dispatch(loadUsersData(users));
}

const loadPosts = () => async (dispatch) => {
    let posts = await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(value => value.json());
    dispatch({type: LOAD_POSTS, payload: posts});


}

export {loadUsers, loadPosts};
