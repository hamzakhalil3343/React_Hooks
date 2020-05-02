import React,{useContext} from 'react';
import ComponentF from './ComponentF';
import {UserContext} from '../App'

function ComponentE(props) {
    const user =useContext(UserContext);
    return (
        <div>
            {user}
        </div>
    );
}

export default ComponentE;