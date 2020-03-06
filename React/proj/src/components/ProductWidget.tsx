import * as React from 'react';
import {Component, CSSProperties} from 'react';

interface Props {
    title: string
}

export default class ProductWidget extends Component<Props> {
    render() {
        return (
            <div style={widget}>
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}

const widget: CSSProperties = {
    width: '220px',
    height: '320px',
    backgroundColor: '#e0e0e0',
    margin: '1rem 0.5rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'start'
}