import React,{useState} from 'react';

function Hookusestatearr(props) {
    const [items,setitem] = useState ([])
     
      const additem=()=>{
         setitem([...items,{id:items.length,value:Math.floor(Math.random()*10)+1}])
      }

    return (
        <div>
         <button onClick={additem}>Add </button>
         <ul>
     { items.map(item =>(
          <li key={item.id}>{item.value}</li>
      ))}
    </ul>         
        hamza</div>
    );
}

export default Hookusestatearr;