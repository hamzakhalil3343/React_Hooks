import React,{useReducer} from 'react';
import ComponentC from './components/ComponentC';


export const CountContext=React.createContext();
const initialstate=0;
const reducer =(state,action)=>{
  switch(action){
      case 'increment':
          return state+1;
      case 'decrement':
          return state-1;
      case 'reset':
           return initialstate;
      default:
           return state;
  }

}






function App(){
  const [count,dispatch]=useReducer(reducer,initialstate);   
    return (
      <CountContext.Provider value={{countstate:count,countdispatch:dispatch}}>

               <div className="App">
                 count - {count}
             <ComponentC></ComponentC> 
        
               </div>
      </CountContext.Provider>
     
    );

    
  
}

export default App;
