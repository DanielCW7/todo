import React from 'react';
import Header from './components/Header';
import Item from './components/Item'
import Button from './components/Button';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: []
        };
        this.checker = this.checker.bind(this)
        this.handleClick = this.handleClick.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }

    checker(e) {
        const isChecked = e.target.checked;
        const itemText = e.target.nextSibling;
       
            if(isChecked === true) {
                itemText.classList.add('checked')
            } else {
                itemText.classList.remove('checked')
            }
    }

    handleClick() {
        let text = document.getElementById('text_field');
        const input = text.value;
        const todos = this.state.todos;
            if(input) {
                this.setState(() => {
                return todos.push({id: (todos.length + 1), name: input, unChecked: true})})
                text.value = '' 
            } 
            else {
                alert('Please enter a new task in the field below')
            }
            console.log(todos)
    }

    handleRemove(e) {   
        const target = e.target.attributes.desc.value;
        const todos = this.state.todos;
        const updatedTodos = todos.filter((item) => {
            if(item.name !== target) {
                    return {id: (todos.length + 1), name: item.name, unChecked: true }
                } else {
                    return null
                }});
        
        this.setState(() => {
            return {todos: updatedTodos}
        }) 
    }

    render() {
        console.log(this.state.todos)
        const todoItems = this.state.todos.map(todo => {
            return <Item desc={todo.name} key={todo.id} checker={this.checker} handleRemove={this.handleRemove} /> 
        })
        
        return(
            <div className='wrapper'>
                <div className='card'>
                    <Header numTodos={(this.state.todos.length)}/>
                    <div className='todo-list'>
                        {todoItems}
                    </div>
                    <Button handleClick={this.handleClick} />
                </div>
            </div>
        )
    }  
}

export default App

