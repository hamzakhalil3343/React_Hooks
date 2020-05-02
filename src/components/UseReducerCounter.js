import React,{useReducer} from 'react';
const initialstate={
    firstcounter:0
};
const reducer =(state,action)=>{
    switch(action.type){
        case 'increment':
            return {firstcounter:state.firstcounter+action.value};
        case 'decrement':
            return {firstcounter:state.firstcounter+action.value};
        case 'reset':
             return initialstate.firstcounter;
        default:
             return state;
    }

}
function UseReducerCounter(props) {
   
        const [count,dispatch]=useReducer(reducer,initialstate);
        return (
            <div>
                count - {count.firstcounter}
                
               <button onClick={()=>dispatch({type:'increment',value:1})}>Increment</button>
                <button onClick={()=>dispatch({type:'decrement',value:1})}>decrement</button>
                 <button onClick={()=>dispatch({type:'reset'})}>reset</button>
            </div>
        );
}

export default UseReducerCounter;