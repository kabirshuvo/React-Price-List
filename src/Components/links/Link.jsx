
import React from 'react';
const Link = ({route}) => {
    return (
        <li className='mr-16'>
            
           <a href={route.path}>{route.name}</a> 
        </li>
    );
};

export default Link;