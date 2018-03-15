---
title: React学习-Temperature
date: 2018-03-15 17:18:47
tags:
 - React
 - React Demo
---



### 代码
```js
import React, {
    Component
} from 'react';
import ReactDOM from 'react-dom';

class Counter extends Component {
    constructor (props) {
        super(props);
        this.state = {
            CentigradeValue: '',
            FahrenheitValue: ''
        };
        this.temperatureTranslate = this.temperatureTranslate.bind(this);
        this.tryConvert = this.tryConvert.bind(this);
    }
    tryConvert (value) {
        const input = parseFloat(value);
        if(Number.isNaN(input)) return '';
        const output = Math.round(input * 1000) / 1000;
        return output.toString();
    }
    temperatureTranslate (mark,value) {
        if(mark === 'Centigrade') {
            const computed = value !== '' ? value * 1.8 + 32 : '';
            this.setState({
                CentigradeValue: this.tryConvert(value),
                FahrenheitValue: this.tryConvert(computed)
            });
        } else {
            const computed = value !== '' ? (value - 32) / 1.8 : '';
            this.setState({
                CentigradeValue: this.tryConvert(computed),
                FahrenheitValue: this.tryConvert(value)
            });
        }
    }
    render () {
        return (
            <div>
                <h1>温度同步转换器</h1>
                <Centigrade 
                    callback={ this.temperatureTranslate }
                    value={ this.state.CentigradeValue } />
                <hr />
                <Fahrenheit 
                    callback={ this.temperatureTranslate }
                    value={ this.state.FahrenheitValue } />
                <Boil temperature={ this.state.CentigradeValue } />
            </div>
        )
    }
}

class Boil extends Component {
    render () {
        return (
            <p>
                { this.props.temperature >= 100 ? '水开啦~': '烧水中...' }
            </p>
        )
    }
}

class Centigrade extends Component {
    constructor (props) {
        super(props);
        this.changeHandle = this.changeHandle.bind(this);
    }
    changeHandle (e) {
        const value = e.target.value;
        this.props.callback('Centigrade',value);
    }
    render () {
        return (
            <div>
                <label htmlFor="Centigrade">摄氏度： </label>
                <input
                    value={ this.props.value }
                    onChange={ this.changeHandle } 
                    type="text" 
                    id="Centigrade"/>
            </div>
        )
    }
}

class Fahrenheit extends Component {
    constructor (props) {
        super(props);
        this.changeHandle = this.changeHandle.bind(this);
    }
    changeHandle (e) {
        const value = e.target.value;
        this.props.callback('Fahrenheit', value);
    }
    render () {
        return (
            <div>
                <label htmlFor="Fahrenheit">华氏度： </label>
                <input 
                    value={ this.props.value }
                    onChange={ this.changeHandle }
                    type="text" 
                    id="Fahrenheit"/>
            </div>
        )
    }
}

const mountNode = document.getElementById('root');

ReactDOM.render(
    <Counter />,
    mountNode
);
```

### 案例截图

![TodoList](http://ozuwcawh6.bkt.clouddn.com/180315001.png)


