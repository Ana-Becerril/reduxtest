// A reducer is a function that accepts state and action as arguments and returns the nex state
import { BUY_CAKE} from './cakeTypes' 

// Define the initial state (an object)

const initialState = {

        numOfCakes:10
}

//Define reducer function

const cakeReducer = (state=initialState, action)=> {
    //The switch expression is the action type. Import the action
    switch(action.type){ 
        case BUY_CAKE: return {
    //Add a copy of the state
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
    //Return the current state
        default: return state
    }
}

export default cakeReducer

