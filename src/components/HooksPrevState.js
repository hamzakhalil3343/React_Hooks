import React,{useState} from 'react';

const HooksPrevState = () => {
    const initalcount = 0;
    const [count,setCount]=useState(initalcount);
    const Increment5=()=>{
        for (let i=0;i<5;i++){
           setCount(prevCount=>prevCount+1)
        }
    }
    return (
        <div>
            <button onClick={()=>setCount(initalcount)}> Reset count {count}</button>
            <button onClick={()=>setCount(count+1)}>Increment count {count}</button>
            <button onClick={()=>setCount(count-1)}>Decrement count {count}</button>
            <button onClick={Increment5}>Increment count by Five  {count}</button>
            
        </div>
    );
};

export default HooksPrevState;