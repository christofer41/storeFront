import * as React from 'react';
import { Component } from 'react';
import Counter from "./singleCounter";
import { theShoppingCart } from "./../components/Layout";


interface Props {
    products: theShoppingCart[],
    incrementProduct: (id: string) => void,
    minusProduct: (id: string) => void,
    deleteProduct: (id: string) => void,
}


export default class Counters extends Component <Props, {} >{


    render() { 
        
        return ( 
            <div style={ countersStyle}>
                <div style={theShoppingCarts}>
                    <h2 style={giveMargin}>You have this many different items: {this.props.products.filter(c => c.value > 0).length}</h2>
                    {this.props.products.map(counter => (
                    <Counter key={counter.id} 
                        onDelete={() => {this.props.deleteProduct(counter.id)}} 
                        counter={counter} 
                        onAdd={() => {this.props.incrementProduct(counter.id)}} 
                        onMinus={() => {this.props.minusProduct(counter.id)}}/>))}
                </div>
            </div>
        );
    }

}


const countersStyle: React.CSSProperties = {
    position: "fixed",
    justifySelf: "center",
    top: "10vh",
    bottom: "10vh",
    left: "10vw",
    right: "10vw",
    border: "2px solid white",
    borderRadius: "12px" ,
    backgroundColor: "#deebf0",
    textAlign: "center",
    overflow: "scroll",
    
}

const theShoppingCarts: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    justifySelf: "center",
}

const giveMargin: React.CSSProperties = {
    margin: "20px"
}