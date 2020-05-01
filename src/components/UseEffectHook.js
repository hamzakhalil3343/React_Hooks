import React,{useState,useEffect} from 'react';

function UseEffectHook(props) {
    const [count,setcount]=useState(0);
    useEffect(
        ()=>{
    document.title=`you click ${count} times`;
}

    )
    return (
        <div>
            hamza
            <button onClick={()=>setcount(count+1)}>click {count}</button>
            
        </div>
    );
}

export default UseEffectHook;