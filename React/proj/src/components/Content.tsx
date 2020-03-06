import * as React from 'react';
import {Component, CSSProperties} from 'react';
import Categories from './Categories'

export default class Content extends Component {
    render() {
        return (
            <div style={content}>
                <div style={header}>
                    <div style={logo}>LOGO</div>
                    <div style={subtitle}>subtitle about the shop</div>
                    <div>
                        <input style={search} type="text" placeholder="Search" />
                    </div>
                </div>
                <Categories />
            </div>
        )
    }
}

const content: CSSProperties = {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
}

const header: CSSProperties = {
    textAlign: 'center'
}

const search: CSSProperties = {
    fontSize: '1.5rem',
    borderRadius: '0.15em',
    border: '1px solid #cccccc',
    padding: '0.2em 0.8em',
}

const categories: CSSProperties = {
    flexGrow: 1
}

const logo: CSSProperties = {
    fontSize: '5rem',
    marginTop: '0.5em',
    marginBottom: '0.2em'
}

const subtitle: CSSProperties = {
    fontSize: '1.5rem',
    marginTop: '0.5em',
    marginBottom: '0.5em'
}