import React,{useContext} from 'react';
import { CountContext } from '../App';

function ComponentC() {
    const countcontext=useContext(CountContext);
    return (
        <div>
            {/* <ComponentE>
                
            </ComponentE> */}


                
                <button onClick={()=>countcontext.countdispatch('increment')}>Increment</button>
                <button onClick={()=>countcontext.countdispatch('decrement')}>decrement</button>
                <button onClick={()=>countcontext.countdispatch('reset')}>Reset</button>
        </div>
    );
}

export default ComponentC;