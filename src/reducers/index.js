import {Map} from 'immutable';

const responseMap = {
    'BASIC_ACTION': anAction
};

function anAction(state, newState) {
    return state.merge(newState);
}

export default function (state = Map(), action) {
    if (responseMap[action.type]) {
        return responseMap[action.type](state, action.state);
    } else {
        return state;
    }
}