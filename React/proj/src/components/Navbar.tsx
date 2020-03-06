import * as React from 'react';
import {Component, CSSProperties} from 'react';

export default class Navbar extends Component {
    render() {
        return (
            <div style={navbar}>
                <h1>Navbar</h1>
            </div>
        )
    }
}

const navbar: CSSProperties = {
    height: '4rem',
    backgroundColor: '#dddddd'
}