import * as React from "react";
import { Component } from 'react';
import { render } from "react-dom";

class Button extends Component {
    render() {
        return <h1>hello,webpack</h1>
    }
    
}

render(<button />,window.document.getElementById('app'));