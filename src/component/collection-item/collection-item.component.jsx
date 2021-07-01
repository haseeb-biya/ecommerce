import React from 'react'
import './collection-item.styles.scss';
import CustomButton from '../custom-button/custom-button.component'
import { addToCart } from '../../redux/cart/cart.actions'
import {connect} from 'react-redux'

const CollectionItem = ({ item, addToCart }) => {
    const { id, imageUrl, name, price } = item;
    return (
        <div className="collection-item">
            <div className="image"
            style={{backgroundImage:`url(${imageUrl})`}}>
            </div>
            <div className="collection-footer">
                    <span className="name">{name}</span>
                    <span className="price">${price}</span>
            </div>
            <CustomButton inverted onClick={()=>addToCart(item)}>Add to Cart</CustomButton>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addToCart: item => dispatch(addToCart(item))
})

export default  connect(null,mapDispatchToProps)(CollectionItem);
