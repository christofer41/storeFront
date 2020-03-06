import * as React from 'react';
import { Component } from 'react';
import Counter from "./singleCounter";


export default class Counters extends Component {
    state = { 
        counters: [
            { id: 1, value: 0},
            { id: 2, value: 0},
            { id: 3, value: 0},
            { id: 4, value: 0}
        ]
    }

    //If the user clicks "add" then it will go through all the counters add update the one selected
    handleIncrement = (counter: any) => {
       const counters = [...this.state.counters];
       const index = counters.indexOf(counter);
       counters[index] = {...counter};
       counters[index].value++;
       this.setState({counters});
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
            <div>
                <h2>This many counters over null exist: {this.state.counters.filter(c => c.value > 0).length}</h2>
                <button onClick={this.handleReset}>Reset</button>
                {this.state.counters.map(counter => (
                <Counter key={counter.id} onDelete={this.handleDelete} counter={counter} onIncrement={this.handleIncrement}/>)) }
            </div>
        );
    }
}