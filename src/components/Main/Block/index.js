import React from 'react';

const Block = (props) => {
    
    return (
        <div className={props.class}>
            <div className=" margin-auto">
                <p className="title-box">{props.text}</p>
    <div className=""><a href="https://www.marclombry.com/" className="no-deco dev cloud">{props.name}</a></div>
            </div>
        </div>
    )
}

export default Block;