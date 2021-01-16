import React from 'react';

const Header = (props) => {
    return(
        <div>
            <h1 className='head'>
                What to do?
            </h1>
                <br/>
            <h2 className='card-heading'>
                You have {props.numTodos} tasks
            </h2>
        </div>
    )
}

export default Header