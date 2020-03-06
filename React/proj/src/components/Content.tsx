import * as React from 'react';
import {Component, CSSProperties} from 'react';
import Categories from './Categories'
import Sidebar from './Sidebar'
import Products from './Products'

export default class Content extends Component {

    // temporary solution
    state = {
        activePage: 1
    }


    // temporary solution
    switch = () => {
        if (this.state.activePage === 1) {
            this.setState({ activePage: 2})
            return
        }
        this.setState({ activePage: 1})
    }

    render() {
        let page = <Categories />
        if (this.state.activePage === 2) {
            page = <div style={productsView}>
                <Sidebar />
                <Products />
            </div>
        }

        return (
            <div style={content}>
                <div style={header}>
                    <div style={logo}>LOGO</div>
                    <div style={subtitle}>subtitle about the shop</div>
                    <div>
                        <input style={search} type="text" placeholder="Search" />
                    </div>
                <button onClick={this.switch}>Switch</button>
                </div>
                { page }
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

const productsView: CSSProperties = {
    display: 'flex'
}