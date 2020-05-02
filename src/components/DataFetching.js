import React,{useState,useEffect} from 'react';
import Axios from 'axios';

function DataFetching(props) {

     const [posts,setPost]=useState([])
     useEffect(()=>{
         Axios.get('http://jsonplaceholder.typicode.com/posts').then(res => {console.log(res);setPost(res.data)}).catch(err=>console.log(err)) ;
         
       
     })




    return (
        <div>
           { posts.map(post=>
            (<ul key="post.id">{post.title}</ul>)
            )}
        </div>
    );
}

export default DataFetching;
