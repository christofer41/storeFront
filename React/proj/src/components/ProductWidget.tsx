import * as React from 'react';
import {Component, CSSProperties} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeart, faCartPlus} from '@fortawesome/free-solid-svg-icons';

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
        // make product name no longer than N letters
        const N = 45
        let name = this.props.productData.name
        if (name.length > N) {
            name = name.substr(0, N) + '...'
        }

        return (
            <div style={widget}>
                <img style={pic} src={this.props.productData.image} alt={this.props.productData.name}/>
                <div style={details}>
                    <div style={description}>{name}</div>
                    <div style={icons}>
                        <FontAwesomeIcon icon={faHeart}/>
                        <FontAwesomeIcon icon={faCartPlus}/>
                    </div>
                </div>
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
    backgroundColor: '#f5f5f5',
    display: 'flex',
    flexDirection: 'column'
}

const icons: CSSProperties = {
    height: '13px',
    color: 'green'
}

const description: CSSProperties = {
    flexGrow: 1
}