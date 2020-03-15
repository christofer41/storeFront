import * as React from 'react';
import {Component, CSSProperties} from 'react';
import ProductWidget, {ProductData} from './ProductWidget'
import axios from 'axios'
import {CategoryData} from './Categories'

const apiKey = 'rVhwWD9xG3DBo1PXD3fWGeAO' // process.env.REACT_APP_BESTBUY_API_KEY

interface Props {
    category: CategoryData
}

interface State {
    productList: Array<ProductData>
}

export default class Products extends Component<Props> {
    constructor(props: Props) {
        super(props);



        const productsApiUrl = 'https://api.bestbuy.com/v1/products(categoryPath.id=' +
            this.props.category.id + ')?format=json&show=sku,name,salePrice,image&sort=salePrice&apiKey=' + apiKey

        axios.get(productsApiUrl)
            .then((response) => {
                if (response != null && response.data != null) {
                    console.log('response.data:', response.data)
                    // const listOfTVSubcategories = response.data.categories[0].subCategories
                    // const names = listOfTVSubcategories.map((item: any) => item.name)
                    this.setState({productList: response.data.products})
                }
            })
    }

    state: State = {
        productList: []
    }

    render() {
        let availableProducts = [<div style={banner}><h1>Sorry, no products in this category</h1></div>]

        if (this.state.productList.length > 0) {
            availableProducts = this.state.productList.map((product: ProductData, i) =>
                        <ProductWidget key={i} productData={product}/>)
        }

        return (
            <div style={productsView}>
                <h1>{this.props.category.name}</h1>
                <div style={products}>
                    {availableProducts}
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

const banner: CSSProperties = {
    height: '500px',
    width: '100%',
    backgroundColor: 'salmon',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}