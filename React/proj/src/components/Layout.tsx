import * as React from 'react';
import {Component, CSSProperties} from 'react';
import Navbar from './Navbar'
import Content from './Content'
import Footer from './Footer'

export default class Layout extends Component {
    render() {
        return (
            <div style={layout}>
                <Navbar />
                <Content />
                <Footer />
            </div>
        )
    }
}

const layout: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
}
