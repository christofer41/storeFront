import * as React from 'react';
import {Component, CSSProperties} from 'react';
import ProductWidget from './ProductWidget'

const productList = ['tomato', 'carrot', 'potato', 'cabbage', 'onion',
    'tomato', 'carrot', 'potato', 'cabbage', 'onion']

export default class Products extends Component {
    render() {
        return (
            <div style={productsView}>
                <h1>Products</h1>
                <div style={products}>
                {
                    productList.map(product =>
                        <ProductWidget title={product} />
                    )
                }
                </div>
            </div>
        )
    }
}

const productsView: CSSProperties = {
    flexGrow: 1,
}

const products: CSSProperties = {
    flexGrow: 1,

    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    margin: '2rem 0',
    backgroundColor: '#f0f0f0'
}