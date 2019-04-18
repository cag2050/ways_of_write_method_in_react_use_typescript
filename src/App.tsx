import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props: any) {
        super(props);
        // 这边绑定是必要的，这样 `this` 才能在回调函数中使用
        this.handleClick3 = this.handleClick3.bind(this);
    }
    // 函数写法1：直接这样写，this 是 undefined（在render里用箭头函数调用时，this 是当前实例）
    handleClick1() {
        console.log('handleClick1');
        console.log('this is:', this);
    }

    handleClick1HasParams(param: any) {
        console.log('handleClick1HasParams');
        console.log('this is:', this);
        console.log(param);
    }
    // 函数写法2：箭头函数，this 是当前实例
    handleClick2 = () => {
        console.log('handleClick2');
        console.log('this is:', this);
    }

    handleClick2HasParams = (param : any) => {
        console.log('handleClick2HasParams');
        console.log('this is:', this);
        console.log(param);
    }
    // 函数写法3：写好后，在 constructor 中 bind 后，this 是当前实例
    handleClick3() {
        console.log('handleClick3');
        console.log('this is:', this);
    }

    handleClick3HasParams(param : any) {
        console.log('handleClick3HasParams');
        console.log('this is:', this);
        console.log(param);
    }

    render() {
        return (
            <div className="App">
                <button onClick={this.handleClick1}>handleClick1</button>
                <button onClick={() => this.handleClick1()}>箭头函数调用handleClick1</button>
                <button onClick={() => this.handleClick1HasParams("写入的参数")}>handleClick1HasParams</button>
                <button onClick={this.handleClick2}>handleClick2</button>
                <button onClick={() => this.handleClick2HasParams("写入的参数")}>handleClick2HasParams</button>
                <button onClick={this.handleClick3}>handleClick3</button>
                <button onClick={() => this.handleClick3HasParams("写入的参数")}>handleClick3HasParams</button>
                {/*
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Edit <code>src/App.tsx</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
                */}
            </div>
        );
    }
}

export default App;
