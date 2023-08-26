import { createStore } from "redux";

function reducer(state=0, action){
    if(action.type==='add'){
        return state + 1
    }
    if(action.type==='dec'){
        return state - 1
    }
    if(action.type==='res'){
        return state=0
    }
    if(action.type==='addValue'){   
        return state + action.payload
    }
    return state
}


const store=createStore(reducer)

export default store