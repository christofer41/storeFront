import * as React from 'react';
import {Component, CSSProperties} from 'react';
import Categories, {CategoryData} from './Categories'
import Sidebar from './Sidebar'
import Products from './Products'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowCircleLeft, faHeart} from '@fortawesome/free-solid-svg-icons'

export default class Content extends Component {

    // temporary solution
    state = {
        activePage: 1,
        activeCategory: {name: '', id: ''}
    }

    // temporary solution
    switch = () => {
        if (this.state.activePage === 1) {
            this.setState({activePage: 2})
            return
        }
        this.setState({activePage: 1})
    }

    onCategorySelected = (category: CategoryData) => {
        this.setState({activePage: 2})
        this.setState({activeCategory: category})
    }

    render() {
        //let selectedCategory = 'pcmcat158900050008'

        let page = <Categories categorySelected={this.onCategorySelected}/>
        if (this.state.activePage === 2) {
            page = <>
                <div style={btnBack} onClick={this.switch}>
                    <FontAwesomeIcon icon={faArrowCircleLeft} style={pic}/>
                    <a>Go back</a>
                </div>
                <div style={productsView}>
                    <Sidebar/>
                    <Products category={this.state.activeCategory} />
                </div>
            </>
        }

        return (
            <div style={content}>
                <div style={header}>
                    <div style={logo}>LOGO</div>
                    <div style={subtitle}>subtitle about the shop</div>
                    <div>
                        <input style={search} type="text" placeholder="Search"/>
                    </div>
                </div>
                {page}
            </div>
        )
    }
}

const content: CSSProperties = {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
}

const header: CSSProperties = {
    textAlign: 'center'
}

const search: CSSProperties = {
    fontSize: '1.5rem',
    borderRadius: '0.15em',
    border: '1px solid #cccccc',
    padding: '0.2em 0.8em',
}
// eslint-disable-next-line 
const categories: CSSProperties = {
    flexGrow: 1
}

const logo: CSSProperties = {
    fontSize: '5rem',
    marginTop: '0.5em',
    marginBottom: '0.2em'
}

const subtitle: CSSProperties = {
    fontSize: '1.5rem',
    marginTop: '0.5em',
    marginBottom: '0.5em'
}

const productsView: CSSProperties = {
    display: 'flex'
}

const btnBack: CSSProperties = {
    width: '6em',
    margin: 'auto',
    marginBottom: '1em',
    marginTop: '1em',
    backgroundColor: 'lightgrey',
    fontSize: '1.5rem',
    borderRadius: '1em',
    display: 'flex',
    alignItems: 'center'

}

const pic: CSSProperties = {
    marginRight: '0.3em',
    marginLeft: '0.08em'
}