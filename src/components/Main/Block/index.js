import React from 'react';

const Block = (props) => {
    console.log(props)
    return (
        <div className={props.class}>
            {props.text}
        </div>
    )
}

export default Block;