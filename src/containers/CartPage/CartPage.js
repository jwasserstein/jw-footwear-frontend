import React, {Component} from 'react';
import {connect} from 'react-redux';
import CartItem from '../../components/CartItem';
import PropTypes from 'prop-types';
import {getProducts} from '../../store/actions/products';
import './CartPage.css';

class CartPage extends Component {
    componentDidMount(){
        if(!this.props.lastUpdated){
            this.props.getProducts();
        }
    }

    render() {
        const {cart, products, lastUpdated} = this.props;

        if(!lastUpdated){
            return (<p>Loading...</p>);
        }      

        let totalPrice = 0;
        const cartItemElements = [];
        cart && Object.keys(cart).forEach(productId => {
            const product = products.filter(p => p._id === productId)[0];
            cart[productId] && Object.keys(cart[productId]).forEach(size => {
                cartItemElements.push(<CartItem 
                                            imageUrl={`http://localhost:3001/${product.imageUrl}`} 
                                            name={product.name} 
                                            size={+size}
                                            price={product.price} 
                                            quantity={cart[productId][size]} 
                                            longDescription={product.longDescription}
                                            key={`${product.name}${size}`}
                                        />);
                totalPrice += product.price * cart[productId][size];
            });
        });

        return (
            <div className="CartPage-main-container">
                <h2>Your Cart</h2>
                <div className="CartPage-inner-container">
                    <div className="CartPage-items">
                        {cartItemElements}
                    </div>

                    <div className="CartPage-summary-container">
                        <div className="CartPage-summary">
                            <h3>Summary</h3>
                            <div className='CartPage-summary-line'>
                                <p>Subtotal:</p>
                                <p>${totalPrice.toFixed(2)}</p>
                            </div>
                            <div className='CartPage-summary-line CartPage-small'>
                                <p>Shipping:</p>
                                <p>$10.00</p>
                            </div>
                            <div className='CartPage-summary-line CartPage-small'>
                                <p>Taxes:</p>
                                <p>${(totalPrice*.0635).toFixed(2)}</p>
                            </div>
                            <hr />
                            <div className='CartPage-summary-line'>
                                <p>Total:</p>
                                <p>${(totalPrice*1.0635+10).toFixed(2)}</p>
                            </div>
                        </div>
                        <button>Checkout</button>
                    </div>
                    
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        cart: state?.cartReducer?.cart,
        products: state?.productReducer?.products,
        lastUpdated: state?.productReducer?.lastUpdated
    };
}

CartPage.propTypes = {
    cart: PropTypes.object,
    lastUpdated: PropTypes.number,
    getProducts: PropTypes.func.isRequired
};

export default connect(mapStateToProps, {getProducts})(CartPage);