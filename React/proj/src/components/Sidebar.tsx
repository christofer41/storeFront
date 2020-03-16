import * as React from 'react';
import reactCSS, {hover} from 'reactcss';
import {Component, CSSProperties} from 'react';
import CategoryWidget from './CategoryWidget'
import {CategoryData} from './Categories'
import {inherits} from 'util'

interface Props {
    categoryList: Array<CategoryData>
}

export default class Sidebar extends Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <div style={sidebar}>
                <h2>Categories</h2>
                <ul style={categoryListCss}>
                    {
                        this.props.categoryList.map((category: CategoryData, i) =>
                            <li key={i} style={indCategoryListCss}>{category.name}</li>
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
    width: '350px',
    minWidth: '250px',
    border: '2px solid white',
    borderRadius: '12px',
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'Calibri, serif',
    fontWeight: 'bold',
    padding: '1em 1.5em',
}

const categoryListCss: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '20px'
}

const indCategoryListCss: CSSProperties = {
    padding: '0.5em 0',
    fontSize: '1rem',
    listStyle: 'none',
    userSelect: 'none'
}
