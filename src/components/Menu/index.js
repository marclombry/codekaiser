import React, { Component } from 'react';
import phenix from '../../kaiser.jpg';
class Menu extends Component {


   
    render(){
        const nav = `display-flex flex-wrap-wrap
        justify-content-space-between padding10 bg-white`;
        return (
            <div className={nav}>
                <img src={phenix} height="60px" alt="logo code kaiser"/>
                <ul className="display-flex  list-none"> 
                    <li className="padding0-10 "><a className="no-deco asbestos" href="/#developpement">Developpement</a></li>
                    <li className="padding0-10 "><a className="no-deco asbestos" href="/#consulting">Consulting</a></li>
                </ul>
            </div>
        )
    }
}
export default Menu;