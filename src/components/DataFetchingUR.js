import React,{useReducer,useEffect} from 'react';
import Axios from 'axios'

const initialstate={
    loading:true,
    error:'',
    posts:{}
}




const reducer=(state,action)=>{
    switch(action.type)
    {
        case 'fetch_success':
        return {
            loading:false,
            error:'',
            posts:action.payload

        };
        case 'fetch_failed':
        return {
            loading:true,
            error:'Some Thing went wrong ',
             posts:[]
        };
        default:
            return 0;
    }
}






function DataFetchingUR(props) {

const [state,dispatch]= useReducer (reducer,initialstate);
useEffect(()=>{
    Axios.get(`http://jsonplaceholder.typicode.com/posts/1`).then(res => {dispatch({type:'fetch_success',payload:res.data})}).catch(err=>{dispatch({type:'fetch_failed'})}) ;
    
  
})
   

  
    return (
        
        <div>
           {state.loading?'loading':state.posts.title}
           {state.error?'error':null}
        </div>
    );
}

export default DataFetchingUR;