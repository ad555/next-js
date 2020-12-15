import * as actions from './action'
import { HYDRATE } from 'next-redux-wrapper'

const initialState = {
    count: 0
}

export default function counterReducer (state = initialState, action) {
    switch (action.type) {
        case HYDRATE:
            const nextState = {
                ...state, // use previous state
                ...action.val // apply delta from hydration
            }
            if (state.counter.count){
                nextState.counter.count = state.counter.count
            }// preserve count value on client side navigation
            return nextState
        case actions.DECREMENT:
            return {...state, count: action.val - 1}
        case actions.INCREMENT:
            return {...state, count: action.val + 1}
        default: 
            return state
    }
}