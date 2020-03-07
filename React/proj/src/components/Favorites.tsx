import * as React from 'react';
import {Component, CSSProperties} from 'react';

export default class Favorites extends Component {
    render() {
        return (
            <div style={favorites}>
                <h1>My Wishlist</h1>
            </div>
        )
    }
}

const favorites: CSSProperties = {
    height: '4rem',
    backgroundColor: '#dddddd'
}