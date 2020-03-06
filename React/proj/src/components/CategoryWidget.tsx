import * as React from 'react';
import {Component, CSSProperties} from 'react';

interface Props {
    title: string
}

export default class CategoryWidget extends Component<Props> {
    render() {
        return (
            <div style={widget}>
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}

const widget: CSSProperties = {
    width: '300px',
    height: '300px',
    backgroundColor: '#e0e0e0',
    margin: '1rem 1rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}