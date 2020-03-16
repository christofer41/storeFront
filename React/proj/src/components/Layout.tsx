import * as React from 'react';
import {Component, CSSProperties} from 'react';
import Navbar from './Navbar'
import Content from './Content'
import Footer from './Footer'
import Counters from "../ShoppingCart/shoppingCart"
import {ProductData} from './ProductWidget'

export interface theShoppingCart {
    id: string,
    value: number
}

interface State {
    hideCart: boolean
    counters: Array<theShoppingCart>
}

export default class Layout extends Component <{}, State> {

    state = {
        hideCart: true,
        counters: [
            { id: "vegetables", value: 1},
        ]
    }

    render() {
        return (
            <div style={layout}>
                <Navbar handleCart={this.displayCart} />
                {!this.state.hideCart ? <Counters 
                    products={this.state.counters} 
                    incrementProduct={this.incrementProduct} 
                    minusProduct={this.minusProduct} 
                    deleteProduct={this.deleteProduct} /> : null}
                <Content onCartIconClick={this.addToTheCart} />
                <Footer />
            </div>
        )
    }

    displayCart = () => { 
        if (this.state.hideCart === true) {
            this.setState({hideCart: false})
        }
        else {
            this.setState({hideCart: true})
        }
        console.log(this.state.hideCart);

    }

    addToTheCart = (selectedProduct: ProductData) => {
        
        let productList = this.state.counters
        let number = 0;
        
        productList.forEach((product: theShoppingCart) => {

            if(product.id === selectedProduct.name) {
                product.value++
                console.log("two")
            }
            if(product.id !== selectedProduct.name) {
                number++
            }
            if (number === this.state.counters.length) {                
                this.state.counters.push({id: selectedProduct.name, value: 1})
                console.log("one")
            }
        })
        this.setState({
            counters: productList
        })
    }

    incrementProduct = (id: string) => {

        let productList = this.state.counters

        productList.forEach((product: theShoppingCart) => {
            if(product.id === id) {
                product.value++
            }
        })

        this.setState({
            counters: productList
        })
    }

    minusProduct = (id:string) => {
        let productList = this.state.counters

        productList.forEach((product: theShoppingCart) => {
            if(product.id === id) {
                product.value--
            }
        })
        
        this.setState({
            counters: productList
        })
    }

    deleteProduct = (id:string) => {
        const counters = this.state.counters.filter(c => c.id !== id);
        this.setState({counters});
    }

}

const layout: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: "#deebf0"
}
