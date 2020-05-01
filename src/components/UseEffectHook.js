import React,{useState,useEffect} from 'react';

function UseEffectHook(props) {
    const [count,setcount]=useState(0);
    const [name,setName]=useState('');
    useEffect(
                ()=>{
                document.title=`you click ${count} times`;
                console.log('updating count times');
                  }  ,[count]                                      //it will check the condition simply if updating count or Any Thing  else 


)
    return (
        <div>
            <input type="text" value={name} onChange={e=>setName(e.target.value)} />
            <button onClick={()=>setcount(count+1)}>click {count}</button>
            
        </div>
    );
}

export default UseEffectHook;

//useEffect is called after Every Single Render