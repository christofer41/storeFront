import * as React from 'react';


export default class Counter extends React.Component<{ counter:any, onDelete:any, onIncrement:any}>{

    styles:React.CSSProperties = {
        fontSize: "20px",
    };


    render() { 
        return (
        <div>
            <span style={this.styles} className={this.getClassName()}>{this.formatCount()}</span>
            <button onClick={() => this.props.onIncrement(this.props.counter)}>Add</button>
            <button onClick={() => this.props.onDelete(this.props.counter.id)}>Delete</button>
        </div>
        );
    }

    //Depending if the numbers are zero or over zero, the classes will change
    private getClassName() {
        let classes = "state";
        classes += (this.props.counter.value === 0) ? "Zero" : "OverZero";
        return classes;
    }
    
    //If the count is zero then it will display an h1 saying so, otherwise it will just display the count number
    private formatCount() {
        const {value: count} = this.props.counter;
        return count === 0 ? <h1>Zero</h1> : <h1>{count}</h1>
    }
};