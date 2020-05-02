import React,{Component} from 'react';
import UseReducerCounter from './components/UseReducerCounter';


export const UserContext=React.createContext();

class App extends Component {

  
  render(){

    return (
      <div className="App">
             <UseReducerCounter></UseReducerCounter> 
        
               </div>
    );

    }
  
}

export default App;
