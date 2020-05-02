import React from 'react';
import {UserContext} from '../App'
function ComponentF(props) {
    return (
        <div>
            
            <UserContext.Consumer>
                {
                   User=>{
                   return(<div>{User}</div>)
                   }
                }
            </UserContext.Consumer>
        </div>
    );
}

export default ComponentF;