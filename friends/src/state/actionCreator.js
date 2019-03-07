import * as types from './actionTypes';
import axios from '../axios/axios';

export const login = user => dispatch => {
    dispatch(spinnerOn);
    fetch(`localhost:5000/api/login?username=${user.username}&password=${user.password}`)
    .then(res => res.json())
    .then(data => {
        dispatch({ type: types.LOGIN_SUCCESS, payload: data.userToken })
    })
    .catch(error => {
        dispatch({ type: types.LOGIN_FAILURE, payload: error});
    });
    console.log('Hello');
}


export const friends = () => dispatch =>  {
    dispatch(spinnerOn);
    axios().get('http://localhost:5000/api/friends')
        .then(res => {
            console.log(res, '<== should be the res');
            dispatch({ type: types.ADD_FRIENDS, payload: res.data });
            dispatch(spinnerOff);
        })
        .catch(error => {
            dispatch({ type: types.ADD_FRIENDS_FAILURE, payload: error });
        })
}

export const addFriends = () => dispatch => {
    dispatch(spinnerOn);
    axios.get()
}

export function spinnerOn() {
    return {
        type: types.SPINNER_ON,
    };
}

export function spinnerOff() {
    return {
        type: types.SPINNER_OFF,
    };
}
