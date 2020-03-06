import * as React from 'react';
import {Component, CSSProperties} from 'react';
import CategoryWidget from './CategoryWidget'


const categoryList = ['vegetables', 'fruits', 'grocery', 'bakery', 'meat', 'confectionery',
    'drinks', 'bakery', 'diary', 'baby', 'toys', 'health', 'pets', 'household' ]

export default class Categories extends Component {
    render() {
        return (
            <div style={categories}>
                {/*<h1>Categories</h1>*/}
                {
                    categoryList.map(category =>
                        <CategoryWidget title={category} />
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
    backgroundColor: '#f0f0f0'
}