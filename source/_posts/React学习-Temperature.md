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

/**
 * @class - 类
 * Counter          计算器
 * Centigrade       摄氏度组件
 * Fahrenheit       华氏度组件
 * 
 * @notice - 注意
 * 如果某些数据可以由props或者state提供，那么它很有可能不应该在state中出现。
 * 比如，我们仅仅保存最新的编辑过的temperature和scale值，而不是同时保存 celsiusValue 和 fahrenheitValue 。
 * 另一个输入框中的值总是可以在 render() 函数中由这些保存的数据计算出来。
 * 这样我们可以根据同一个用户输入精准计算出两个需要使用的数据。
 * 
 */
class Counter extends Component {
    constructor (props) {
        super(props);
        this.state = {
            scale: 'c',
            temperature: ''
        };
        this.toCentigradeValue = this.toCentigradeValue.bind(this);
        this.toFahrenheitValue = this.toFahrenheitValue.bind(this);
        this.temperatureTranslate = this.temperatureTranslate.bind(this);
        this.tryConvert = this.tryConvert.bind(this);
    }
    toCentigradeValue (temperature) {
        return temperature * 1.8 + 32;
    }
    toFahrenheitValue (temperature) {
        return (temperature - 32) / 1.8;
    }
    tryConvert (mark,value) {
        const input = parseFloat(value);
        if(Number.isNaN(input)) return '';
        const output = this[mark](input);
        const round = Math.round(output * 1000) / 1000;
        return round.toString();
    }
    temperatureTranslate (mark,value) {
        this.setState({
            scale: mark,
            temperature: value
        });
    }
    render () {
        const temperature = this.state.temperature;
        const CentigradeValue = this.state.scale === 'c' ? temperature : this.tryConvert('toFahrenheitValue', temperature);
        const FahrenheitValue = this.state.scale === 'f' ? temperature : this.tryConvert('toCentigradeValue', temperature);
        return (
            <div>
                <h1>温度同步转换器</h1>
                <Centigrade 
                    callback={ this.temperatureTranslate }
                    value={ CentigradeValue } />
                <hr />
                <Fahrenheit 
                    callback={ this.temperatureTranslate }
                    value={ FahrenheitValue } />
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
        this.props.callback('c',value);
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
        this.props.callback('f', value);
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


