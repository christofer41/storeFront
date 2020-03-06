import * as React from 'react';
import {Component, CSSProperties} from 'react';
import CategoryWidget from './CategoryWidget'

const categoryList = ['vegetables', 'fruits', 'grocery', 'bakery', 'meat', 'confectionery',
    'drinks', 'bakery', 'diary', 'baby', 'toys', 'health', 'pets', 'household']

export default class Sidebar extends Component {
    render() {
        return (
            <div style={sidebar}>
                <h2>Categories</h2>
                <ul>
                    {
                        categoryList.map(category =>
                            <li>{category}</li>
                        )
                    }
                </ul>
            </div>
        )
    }
}

const sidebar: CSSProperties = {
    fontSize: '1.2rem',
    backgroundColor: '#d8d8d8',
    width: '300px',
    minWidth: '250px',
}