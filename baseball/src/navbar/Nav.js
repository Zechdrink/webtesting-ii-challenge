import React from 'react';

const Nav  = (props) => {
    return ( 
        <nav className = "nav">
            <a href = "/">Hotdogs</a>
            <a href = "/">Carmel</a>
            <a href = "/">Beer</a>
            <a href = "/" onClick = {props.newInning}>Refresh</a>
        </nav>
     );
}
 
export default Nav;
