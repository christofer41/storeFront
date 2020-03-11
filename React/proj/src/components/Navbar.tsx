import * as React from 'react';
import {Component, CSSProperties} from 'react';


export default class Navbar extends Component <{handleCart: () => void}> {
    render() {
        return (
            <div style={navbar}>
                <h1>Navbar</h1>
                <h4 onClick={() => this.props.handleCart()}>Shopping Cart</h4>
            </div>
        )
    }
}

const navbar: CSSProperties = {
    height: '4rem',
    backgroundColor: '#dddddd',
    display: "flex",
    justifyContent: "space-between"
}