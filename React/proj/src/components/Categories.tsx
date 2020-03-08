import * as React from 'react';
import {Component, CSSProperties} from 'react';
import CategoryWidget from './CategoryWidget'

import axios from 'axios'

// colors from https://colorhunt.co/
const widgetColors = ['#918ba7', '#f18867', '#e85f99', '#50bda1', '#a8e6cf', '#dcedc1',
    '#ffd3b6', '#ffaaa5']

const apiKey = 'rVhwWD9xG3DBo1PXD3fWGeAO' // process.env.REACT_APP_BESTBUY_API_KEY
const categoriesApiUrl = 'https://api.bestbuy.com/v1/categories(id=abcat0100000)?format=json&&apiKey=' + apiKey

interface Props {
}

export default class Categories extends Component<Props> {
    constructor(props: Props) {
        super(props);

        axios.get(categoriesApiUrl)
            .then((response) => {
                if (response != null && response.data != null) {
                    console.log('response.data:', response.data)
                    const listOfTVSubcategories = response.data.categories[0].subCategories
                    const names = listOfTVSubcategories.map((item: any) => item.name)
                    this.setState({categoryList: names})
                }
            })
    }

    state = {
        categoryList: ['', '', '']
    }

    getColor = (i: number) => {
        // i in [0..N] ? => element from widgetColors [0..7]
        const colorIndex = i % 8
        return widgetColors[colorIndex]
    }

    render() {
        // variable categoryList should be a part of component STATE
        return (
            <div style={categories}>
                {
                    this.state.categoryList.map((category, i) =>
                        <CategoryWidget key={i} title={category} color={this.getColor(i)}/>
                    )
                }
            </div>
        )
    }
}

const categories: CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    margin: '2rem 0',
    // backgroundColor: '#f0f0f0'
}