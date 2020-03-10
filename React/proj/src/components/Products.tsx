import * as React from 'react';
import {Component, CSSProperties} from 'react';
import ProductWidget, {ProductData} from './ProductWidget'
import axios from 'axios'


const apiKey = 'rVhwWD9xG3DBo1PXD3fWGeAO' // process.env.REACT_APP_BESTBUY_API_KEY
let selectedCategory = 'pcmcat158900050008'
const productsApiUrl = 'https://api.bestbuy.com/v1/products(categoryPath.id=' + selectedCategory + ')?format=json&show=sku,name,salePrice,image&sort=salePrice&apiKey=' + apiKey

// const productList = ['tomato', 'carrot', 'potato', 'cabbage', 'onion',
//     'tomato', 'carrot', 'potato', 'cabbage', 'onion']



interface Props {
}

interface State {
    productList: Array<ProductData>
}

export default class Products extends Component<Props> {
    constructor(props: Props) {
        super(props);

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
        return (
            <div style={productsView}>
                <h1>Products</h1>
                <div style={products}>
                    {
                        this.state.productList.map((product: ProductData, i) =>
                            <ProductWidget key={i} productData={product}/>
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