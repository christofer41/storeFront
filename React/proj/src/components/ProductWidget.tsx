import * as React from 'react';
import {Component, CSSProperties} from 'react';

export interface ProductData {
    image: string
    name: string
    salePrice: number
}

interface Props {
    productData: ProductData
}

export default class ProductWidget extends Component<Props> {
    render() {
        return (
            <div style={widget}>
                <img style={pic} src={this.props.productData.image} alt={this.props.productData.name}/>
                <div style={details}>{this.props.productData.name}</div>
            </div>
        )
    }
}

const widget: CSSProperties = {
    width: '220px',
    height: '320px',
    backgroundColor: 'white',
    margin: '1rem 0.5rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
}

const pic: CSSProperties = {
    maxWidth: '220px',
    maxHeight: '70%',
    flexGrow: 1,
    padding: '1rem 1rem',
}

const details: CSSProperties = {
    height: '100px',
    padding: '1rem 1rem',
    backgroundColor: '#f5f5f5'
}