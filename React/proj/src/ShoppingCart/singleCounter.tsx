import * as React from 'react';

export default class Counter extends React.Component<{ counter:any, onDelete:any, onAdd:any, onMinus:any}>{


    render() { 
        return (
        <div style={singleCounterStyle}>
            <div style={textDiv}>
                <h2>{this.props.counter.id}</h2>
                <h2 style={styles}>{this.formatCount()}</h2>
            </div>
            <div style={buttonDiv}>
                <button style={buttonStyle} onClick={() => this.props.onAdd(this.props.counter)}>Plus one</button>
                <button style={buttonStyle} onClick={() => this.props.onMinus(this.props.counter, this.props.counter.id)}>Minus one</button>
                <button style={buttonStyle} onClick={() => this.props.onDelete(this.props.counter.id)}>Delete</button>
            </div>
        </div>
        );
    }
    
    //If the count is zero then it will display an h1 saying so, otherwise it will just display the count number
    private formatCount() {
        const {value: count} = this.props.counter;
        return <React.Fragment>{count}</React.Fragment>
    }
};

const singleCounterStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    marginBottom: "30px"
}

const styles:React.CSSProperties = {
    fontSize: "30px",
    marginLeft: "10px"
};

const buttonStyle: React.CSSProperties = {
    margin: "5px",
    height: "40px",
    width: "60px",
};

const buttonDiv: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: "none",
    marginLeft: "5px"
};

const textDiv: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: "none",
    marginRight: "5px"
};