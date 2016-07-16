import * as actionTypes from '../actions/actionTypes';
import _ from 'lodash/fp';

// The reducer is a list of function describing the state of the store
// Each function describing a particular part of the state

// Reducers catch actions and will update the state accordingly

// Here, we only have one object in our store,
// which is an array of letters
export const letters = (state = [], action) => {
    switch (action.type) {
        case actionTypes.CHANGE_LETTERS:
            return _.flow(
                _.split(''),
                _.shuffle,
                _.slice(0, Math.floor(Math.random()*26)),
                _.orderBy(_.identity, 'asc')
            )('abcdefghijklmnopqrstuvwxyz');
        default: return state;
    }
};
