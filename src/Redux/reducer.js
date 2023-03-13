import { SWITCH_DARK, SWITCH_LIGHT } from './actionTypes'

const initState = {
    current:'dark'
}

export const reducer = (state=initState, { type }) => {
    switch(type){
        case(SWITCH_DARK):{
            return {
                ...state,
                current:'dark'
            }
        }
        case(SWITCH_LIGHT):{
            return {
                ...state,
                current:'light'
            }
        }
        default:{
            return state
        }
    }
}