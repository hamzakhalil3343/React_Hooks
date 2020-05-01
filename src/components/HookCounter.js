import React,{useState} from 'react';

function HookCounter() {
    const [count,incrementcount] = useState(0);
    return (
        <div>
            <button onClick={()=>incrementcount(count+1)}>Hooks Count {count}</button>
        </div>
    );
}

export default HookCounter;