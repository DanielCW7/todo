import React, { Component } from 'react';

class Button extends React.Component {
     constructor(props) {
         super(props)
     }

    render() {
        return (
            <div>
                <div className='search-container'>
                    <input className='search' type='text' placeholder='type something...' id='text_field'></input>
                </div>
                <div className='button-container'>
                    <button type='submit' className='button-add' onClick={this.props.handleClick}> New Task </button>
                </div>
            </div>
        )
    }
}


export default Button
