import React from 'react';


class Item extends React.Component {

    render() {
        
        return (
            <div className='todo-item'>
               <input type='checkbox' name='box' onChange={this.props.checker}/>
               <label> {this.props.desc} </label>
               <button className='button-remove' desc={this.props.desc} key={this.props.key} onClick={this.props.handleRemove}> remove </button>
            </div>
        )
    }
}

export default Item