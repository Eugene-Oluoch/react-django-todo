import React from 'react';
import approve from '../../static/asserts/approve.png';
import '../../static/css/header.css';

let Header = ()=>{

    return(
        <>
            <article className="header">
                <h1 className="header-title">Crabs Todo</h1>
                <img src={approve} alt="" className="header-image" />
            </article>
        </>
    )

};



export default Header;