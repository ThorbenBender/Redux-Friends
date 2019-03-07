import * as types from './actionTypes';

const initialState = {
    friends: [],
    error: null,    
}

export function getFriends(state = initialState, action ) {
    switch (action.type) {
        case types.ADD_FRIENDS:
            return {
                ...state,
                friends: action.payload,
            }
        case types.ADD_FRIENDS_FAILURE:
            return {
                ...state,
                error: action.payload,
            }
        case types.ADD_FRIEND:
            return state.friends.concat(action.payload);
        case types.DELETE_FRIEND:
            return state.friends.filter(friend => friend.id !== action.payload);
        default: 
            return state;
    }
}


export function spinner(isOn = false, action) {
    switch (action.types) {
        case types.SPINNER_ON:
            return true;
        case types.SPINNER_OFF:
            return false;
        default:
            return isOn;
    }
}