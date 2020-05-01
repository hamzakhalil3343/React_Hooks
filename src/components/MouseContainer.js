import React,{useState} from 'react';
import MouseHook from './MouseHook';

function MouseContainer(props) {

    const [dislay,setdisplay]=useState(true);
    return (
        <div>
            <button onClick={()=>setdisplay(!dislay)}>Toggle Display</button>
            {dislay && <MouseHook/>}
        </div>
    );
}

export default MouseContainer;