import * as React from 'react';
import { Component } from 'react';
import {CSSProperties} from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div style={footer}>
                <h1>Footer</h1>
            </div>
        )
    }
}

const footer: CSSProperties = {
    height: '8rem',
    backgroundColor: '#dddddd'
}