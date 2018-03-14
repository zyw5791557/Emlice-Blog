---
title: React学习-Todo
date: 2018-03-14 16:52:35
tags: 
 - React
 - React Demo
---

### 如何开始一个 React App
```
npm i create-react-app -g && create-react-app my-app && cd my-app && npm start
```

### 代码
```js
import React, {
    Component
} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class TodoApp extends Component {
    constructor (props) {
        super(props);
        this.state = {
            items: [],
            text: ''
        };
        this.changeHandle = this.changeHandle.bind(this);
        this.submitHandle = this.submitHandle.bind(this);
        this.deleteItem   = this.deleteItem.bind(this);
    }
    changeHandle (e) {
        this.setState({
            text: e.target.value
        });
    }
    submitHandle (e) {
        e.preventDefault();
        if(!this.state.text.length) return;
        const newItme = {
            text: this.state.text,
            id: Date.now()
        };
        this.setState(prevState => ({
            items: prevState.items.concat(newItme),
            text: ''
        }));
    }
    deleteItem (index) {
        let items = this.state.items;
        items.splice(index, 1);
        this.setState({
            items: items
        });
    }
    render () {
        return (
            <div>
                <h1>Todo List</h1>
                <TodoList items={ this.state.items } callbackDelete={ this.deleteItem } />
                <form onSubmit={ this.submitHandle }>
                    <label htmlFor="new-todo">
                        What needs to be done?
                    </label>
                    <input 
                        id="new-todo"
                        type="text" 
                        onChange={ this.changeHandle }
                        value={ this.state.text } />
                    <button>
                        Add #{ this.state.items.length + 1 }
                    </button>
                </form>
            </div>
        )
    }
}

class TodoList extends Component {
    render () {
        return (
            <ul>
                {
                    this.props.items.map((item, index) => (
                        <li key={ item.id }>
                            { item.text }
                            <button onClick={ this.props.callbackDelete.bind(null,index) }>DELETE</button>
                        </li>
                    ))
                }
            </ul>
        );
    }
}

// 根节点
const mountNode = document.getElementById('root');

ReactDOM.render(
    <TodoApp />,
    mountNode
);
```

### 案例截图

{% fi http://ozuwcawh6.bkt.clouddn.com/180314001.png, alt, wallhall %}


