import React from 'react';
import {connect} from 'react-redux';
import {deleteFromCart} from '../../actions';
import './cart-table.scss';

const CartTable = ({items, deleteFromCart}) => {
    return (
        <>
            <div className="cart__title">Ваш заказ:</div>
            <div className="cart__head">
                <div className="cart__head-photo">Photo</div>
                <div className="cart__head-title">Title</div>
                <div className="cart__head-qtty">Quantity</div>
                <div className="cart__head-price">Price</div>
                <div className="cart__head-sum">Sum</div>
            </div>
            <div className="cart__list">
                {
                    items.map(item => {
                        const {product: {title, price, url, id}, qtty, sum} = item;
                        return (
                            <div key={id} className="cart__item">
                                <div className="cart__item-img">
                                    <img src={url}  alt={title}></img>
                                </div>
                                <div className="cart__item-title">{title}</div>
                                <div className="cart__item-qtty">{qtty}</div>
                                <div className="cart__item-price">{price}$</div>
                                <div className="cart__item-sum">{sum}$</div>
                                <div onClick={() => deleteFromCart(id)} className="cart__close">&times;</div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
};

const mapStateToProps = ({items}) => {
    return {
        items
    }
}

const mapDispatchToProps = {
    deleteFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(CartTable);