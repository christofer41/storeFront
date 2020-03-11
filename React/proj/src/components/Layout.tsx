import * as React from 'react';
import {Component, CSSProperties} from 'react';
import Navbar from './Navbar'
import Content from './Content'
import Footer from './Footer'
import Counters from "../ShoppingCart/Counters"


interface State {
    hideCart: boolean
}

export default class Layout extends Component <{}, State> {

    state = {
        hideCart: true
    }

    render() {
        return (
            <div style={layout}>
                <Navbar handleCart={this.displayCart} />
                {!this.state.hideCart ? <Counters /> : null}
                <Content />
                <Footer />
            </div>
        )
    }

    displayCart = () => { 
        if (this.state.hideCart == true) {
            this.setState({hideCart: false})
        }
        else {
            this.setState({hideCart: true})
        }
        console.log(this.state.hideCart);

    }
}

const layout: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
}

const hideCounters: CSSProperties = {
    display: "none"
}