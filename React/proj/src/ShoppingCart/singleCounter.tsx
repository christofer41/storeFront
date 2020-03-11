import * as React from 'react';

export default class Counter extends React.Component<{ counter:any, onDelete:any, onAdd:any, onMinus:any}>{


    render() { 
        return (
        <div style={singleCounterStyle}>
            <h2>{this.props.counter.id}</h2>
            <span style={styles} className={this.getClassName()}>{this.formatCount()}</span>
            <button style={giveMargin} onClick={() => this.props.onAdd(this.props.counter)}>Plus one</button>
            <button style={giveMargin} onClick={() => this.props.onMinus(this.props.counter, this.props.counter.id)}>Minus one</button>
            <button style={giveMargin} onClick={() => this.props.onDelete(this.props.counter.id)}>Delete</button>
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

const singleCounterStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    marginBottom: "30px"
}

const styles:React.CSSProperties = {
    fontSize: "20px",
};

const giveMargin: React.CSSProperties = {
    margin: "10px"
};