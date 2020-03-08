import * as React from 'react';
import {Component, CSSProperties} from 'react';

interface Props {
    title: string
    color: string
}

export default class CategoryWidget extends Component<Props> {
    render() {
        return (
            <div style={{...widget, backgroundColor: this.props.color}}>
                {this.props.title}
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
    alignItems: 'center',
    fontSize: '2.0rem',
    fontWeight: 'bold',
    padding: '2rem 2rem',
    textAlign: 'center',
    color: '#222222',
    // borderRadius: '2%'

}