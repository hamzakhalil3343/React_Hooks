import React,{useState,useEffect} from 'react';
import Axios from 'axios';

function DataFetching(props) {

     const [posts,setPost]=useState([])
     const [id,setid]=useState(1)
     useEffect(()=>{
         Axios.get(`http://jsonplaceholder.typicode.com/posts/${id}`).then(res => {console.log(res);setPost(res.data)}).catch(err=>console.log(err)) ;
         
       
     })




    return (
        <div>

            <input type="text" value={id} onChange={e=>setid(e.target.value)} />
            {posts.title}
           {/* { posts.map(post=>
            (<ul key="post.id">{post.title}</ul>)
            )} */}
        </div>
    );
}

export default DataFetching;
