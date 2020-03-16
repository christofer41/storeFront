import * as React from 'react';
import {Component, CSSProperties} from 'react';
import Counter from './singleCounter';
import {theShoppingCart} from './../components/Layout';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTimes} from '@fortawesome/free-solid-svg-icons'

interface Props {
    products: theShoppingCart[],
    incrementProduct: (id: string) => void,
    minusProduct: (id: string) => void,
    deleteProduct: (id: string) => void,
    displayCart: () => void
}

export default class Counters extends Component <Props, {}> {


    render() {

        return (
            <div style={countersStyle}>
                <div style={theShoppingCarts}>
                    <h2 style={giveMargin}>You have this many different
                        items: {this.props.products.filter(c => c.value > 0).length}</h2>
                    {this.props.products.map(counter => (
                        <Counter key={counter.id}
                                 onDelete={() => {
                                     this.props.deleteProduct(counter.id)
                                 }}
                                 counter={counter}
                                 onAdd={() => {
                                     this.props.incrementProduct(counter.id)
                                 }}
                                 onMinus={() => {
                                     this.props.minusProduct(counter.id)
                                 }}/>))}
                </div>
                <FontAwesomeIcon style={closeIcon} icon={faTimes} onClick={this.props.displayCart}/>
            </div>
        );
    }

}


const countersStyle: React.CSSProperties = {
    position: 'fixed',
    justifySelf: 'center',
    top: '10vh',
    bottom: '10vh',
    left: '10vw',
    right: '10vw',
    border: '2px solid white',
    borderRadius: '12px',
    backgroundColor: '#deebf0',
    textAlign: 'center',
    overflow: 'scroll'
}

const theShoppingCarts: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    justifySelf: 'center',
}

const giveMargin: React.CSSProperties = {
    margin: '20px'
}

const closeIcon: CSSProperties = {
    fontSize: '2.5rem',
    color: '#444444',
    position: 'absolute',
    right: '0.5em',
    top: '0.5em'
}