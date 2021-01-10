import React, {Component} from 'react';
import './OrderShowPage.css';
import {connect} from 'react-redux';
import {getOrders} from '../../store/actions/orders';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import OrderItem from '../../components/OrderItem';

class OrderShowPage extends Component {
    componentDidMount(){
        document.title = 'JW Footwear | Order';
        if(!this.props.lastUpdated){
            this.props.getOrders();
        }
    }

    render() {
        const {orders, products, lastUpdated, match} = this.props;
        const order = orders.find(o => o._id === match.params.orderId);
        const total = order.subTotal + order.shipping + order.taxes;

        if(!lastUpdated) {
            return (<p>Loading...</p>);
        }

        const orderItemElements = order?.items?.map(item => {
            const product = products.find(product => product._id === item.id);
            return (<OrderItem 
                        id={item.id}
                        imageUrl={product.imageUrl} 
                        name={product.name} 
                        size={+item.size}
                        price={product.price} 
                        quantity={item.quantity} 
                        longDescription={product.longDescription}
                        key={`${product.name}${item.size}`}
                    />);
        });

        return (
            <div className="OrderShowPage-main-container">
                <h2>Your Order</h2>
                <p className='OrderShowPage-date'>{dayjs(order.date).format('MM/DD/YYYY')}</p>
                <div className="OrderShowPage-inner-container">
                    <div className="OrderShowPage-items">
                        {orderItemElements}
                    </div>

                    <div className="OrderShowPage-info-container">
                        <div className="OrderShowPage-info">
                            <h3>Summary</h3>
                            <div className='OrderShowPage-info-line'>
                                <p>Subtotal:</p>
                                <p>${order.subTotal.toFixed(2)}</p>
                            </div>
                            <div className='OrderShowPage-info-line OrderShowPage-small'>
                                <p>Shipping:</p>
                                <p>${order.shipping.toFixed(2)}</p>
                            </div>
                            <div className='OrderShowPage-info-line OrderShowPage-small'>
                                <p>Taxes:</p>
                                <p>${order.taxes.toFixed(2)}</p>
                            </div>
                            <hr />
                            <div className='OrderShowPage-info-line'>
                                <p>Total:</p>
                                <p>${total.toFixed(2)}</p>
                            </div>
                        </div>
                        <div className="OrderShowPage-info">
                            <h3>Payment Information</h3>
                            <div className='OrderShowPage-info-line'>
                                <p>Name:</p>
                                <p>{order.shippingName}</p>
                            </div>
                            <div className='OrderShowPage-info-line'>
                                <p>Address:</p>
                                <div>
                                    <p>{order.shippingAddress}</p>
                                    <p>{order.shippingCity}, {order.shippingState}</p>
                                </div>
                            </div>
                            <div className='OrderShowPage-info-line'>
                                <p>Card Number:</p>
                                <p>{String(order.billingCard).match(/.{4}/g).join('-')}</p>
                            </div>
                            <div className='OrderShowPage-info-line'>
                                <p>Expiration Date:</p>
                                <p>{order.billingExpDate}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        orders: state.orderReducer.orders,
        lastUpdated: state.orderReducer.lastUpdated,
        products: state.productReducer.products
    };
}

OrderShowPage.propTypes = {
    orders: PropTypes.array,
    lastUpdated: PropTypes.number,
    getOrders: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired
};

export default connect(mapStateToProps, {getOrders})(OrderShowPage);