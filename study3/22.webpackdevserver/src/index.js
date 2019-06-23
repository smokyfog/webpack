import "@babel/polyfill";    //es6语法转换为低版本浏览器可用的代码  配置了 "useBuiltIns": "usage" 则默认引用，可以不用再次引入
import React, { Component } from "react";
import ReactDom from "react-dom";
import axios from "axios";

class App extends Component {
    
    componentDidMount() {
        axios.get("/react/api/header.json").then(res => {
            console.log(res)
        })
    }
    render() {
        return <div>hello world</div>
    }
}


ReactDom.render(<App />, document.getElementById('root'));