import * as ActionTypes from './ActionTypes';

export const comments = (state = { id: null, errMess: null, comments: [] }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENTS:
            return { ...state, errMess: null, comments: action.payload };

        case ActionTypes.ADD_COMMENT:
            return { ...state, id: comments.length, comments: comments.concat(action.payload) };

        case ActionTypes.COMMENTS_FAILED:
            return { ...state, errMess: action.payload };

        default:
            return state;
    }
};