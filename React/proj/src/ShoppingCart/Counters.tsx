import * as React from 'react';
import { Component } from 'react';
import Counter from "./singleCounter";

interface SingleCounterData {
    id: string,
    value: number
}

interface State {
    counters: Array<SingleCounterData>
}


export default class Counters extends Component <{}, State>{
    state = { 
        counters: [
            { id: "vegetables", value: 1},
        ]
    }


    //If the user clicks "add" then it will go through all the counters add update the one selected
    handlePlus = (counter: any) => {
       const counters = [...this.state.counters];
       const index = counters.indexOf(counter);
       counters[index] = {...counter};
       counters[index].value++;
       this.setState({counters});
    }

        //If the user clicks "add" then it will go through all the counters add update the one selected
    handleMinus = (counter: any, counterId:any) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value--;
        this.setState({counters});

        if (counters[index].value <= 0) {
            this.handleDelete(counterId)
         }
    }

    //If the user clicks reset then all the value of the counters will go to zero
    handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value= 0; 
            return c;
        });
        this.setState({counters});
    }

    //If the user clicks delete then the counter matching the id of the button will be deleted
    handleDelete = (counterId:any) => {
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({counters});
    }
    render() { 
        
        return ( 
            <div style={ countersStyle}>
                <div style={theShoppingCart}>
                    <h2 style={giveMargin}>You have this many different items: {this.state.counters.filter(c => c.value > 0).length}</h2>
                    <button style={giveMargin} onClick={this.handleReset}>Reset</button>
                    {this.state.counters.map(counter => (
                    <Counter key={counter.id} onDelete={this.handleDelete} counter={counter} onAdd={this.handlePlus} onMinus={this.handleMinus}/>)) }
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
    border: "2px solid red",
    backgroundColor: "white",
    textAlign: "center",
    overflow: "scroll"
}

const theShoppingCart: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    justifySelf: "center"
}

const giveMargin: React.CSSProperties = {
    margin: "20px"
}