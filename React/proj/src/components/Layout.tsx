import * as React from 'react';
import { Component } from 'react';
import Counters from "./Counters";


export default class Layout extends React.Component {
    render() {
        return (
            <div>
                <Counters/>
            </div>
        )
    }
}