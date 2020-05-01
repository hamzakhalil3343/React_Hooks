import React,{Component} from 'react';


import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';
class App extends Component {

  
  render(){

    return (
      <div className="App">
       
         <ClassCounter></ClassCounter>
         <HookCounter/>
         
      </div>
    );

    }
  
}

export default App;
