import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Child from "delllee"

class App extends Component {
    render() {
        return (
            <div>
                <div>this is app</div>
                <Child />
            </div>
        )
    }
}

ReactDom.render(<App />, document.getElementById("root"))