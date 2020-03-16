import * as React from 'react';
import {Component, CSSProperties} from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import {faSearch} from '@fortawesome/free-solid-svg-icons'


export default class Navbar extends Component <{handleCart: () => void}> {
    render() {
        return (
            <div style={navbar}>
                <FontAwesomeIcon size="2x" icon={faShoppingCart} onClick={() => this.props.handleCart()} />
            </div>
        )
    }
}

const navbar: CSSProperties = {
    height: '4rem',
    backgroundColor: "#3789c5",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "4px solid white",
    borderRadius: "12px"
}