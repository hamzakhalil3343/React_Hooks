import React,{Component} from 'react';


import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';
import HooksPrevState from './components/HooksPrevState';
import Hookstatewithobj from './components/Hookstatewithobj'
class App extends Component {

  
  render(){

    return (
      <div className="App">
{/*        
         <ClassCounter></ClassCounter>
         <HookCounter/>
         <HooksPrevState></HooksPrevState> */}
         <Hookstatewithobj/>
      </div>
    );

    }
  
}

export default App;
