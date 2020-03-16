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
                <ul style={categoryListCss}>
                    {
                        categoryList.map(category =>
                            <li style={indCategoryListCss}>{category}</li>
                        )
                    }
                </ul>
            </div>
        )
    }
}

const sidebar: CSSProperties = {
    fontSize: '1.2rem',
    backgroundColor: '#d7e3ed',
    width: '300px',
    minWidth: '250px',
    border: "2px solid white",
    borderRadius: "12px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    fontFamily: "Calibri",
    fontWeight: "bold"
}

const categoryListCss: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    marginTop: "20px"
}

const indCategoryListCss: CSSProperties = {
    margin: "4px"
}