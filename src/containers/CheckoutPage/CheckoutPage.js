import React, {Component} from 'react';
import InputField from '../../components/InputField';
import Button from '../../components/Button';
import Message from '../../components/Message';
import {connect} from 'react-redux';
import {placeOrder} from '../../store/actions/orders';
import {emptyCart} from '../../store/actions/cart';
import PropTypes from 'prop-types';
import './CheckoutPage.css';

class CheckoutPage extends Component {
    constructor(props){
        super(props);

        this.state = {
            shippingName: '',
            shippingAddress: '',
            shippingCity: '',
            shippingState: '',
            billingCard: '',
            billingExpDate: '',
            billingSecCode: '',
            message: '',
            messageColor: 'red'
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount(){
        document.title = 'JW Footwear | Checkout';
        if(!this.props.cart.length){
            this.props.history.push('/cart');
        }
    }

    onChange(e) {
        this.setState({...this.state, [e.target.name]: e.target.value});
    }

    onSubmit(e) {
        e.preventDefault();
        const {shippingName, shippingAddress, shippingCity, shippingState,
            billingCard, billingExpDate, billingSecCode} = this.state;

        this.props.placeOrder({
            items: this.props.cart,
            shippingName,
            shippingAddress,
            shippingCity,
            shippingState,
            billingCard,
            billingExpDate,
            billingSecCode
        })
        .then(() => {
            this.setState({
                shippingName: '',
                shippingAddress: '',
                shippingCity: '',
                shippingState: '',
                billingCard: '',
                billingExpDate: '',
                billingSecCode: '',
                message: 'Your order has been placed successfully.  You will be redirected in 3 seconds.',
                messageColor: 'green'
            })
            return new Promise(resolve => setTimeout(() => resolve(), 3000));
        })
        .then(() => {
            this.props.emptyCart();
            this.props.history.push('/products');
        })
        .catch(err => this.setState({...this.state, messageColor: 'red', message: err}));
    }

    render() {
        const {shippingName, shippingAddress, shippingCity, shippingState, 
            billingCard, billingExpDate, billingSecCode, message, messageColor} = this.state;

        return (
            <div className='CheckoutPage-main-container'>
                <h2>Checkout</h2>
                {message && (<Message color={messageColor}>{message}</Message>)}
                <form className='CheckoutPage-form' onSubmit={this.onSubmit}>
                    <div>
                        <div className='CheckoutPage-subform'>
                            <h3>Shipping Information</h3>
                            <label htmlFor='shippingName' className='CheckoutPage-label' >Full Name:</label>
                            <InputField name='shippingName' type='text' value={shippingName} placeholder='John Doe' onChange={this.onChange} />

                            <label htmlFor='shippingAddress' className='CheckoutPage-label' >Street Address:</label>
                            <InputField name='shippingAddress' type='text' value={shippingAddress} placeholder='100 Wall Street' onChange={this.onChange} />

                            <div className='CheckoutPage-field-container'>
                                <div style={{marginRight: '20px'}}>
                                    <label htmlFor='shippingCity' className='CheckoutPage-label' >City:</label>
                                    <InputField name='shippingCity' type='text' value={shippingCity} placeholder='New York City' onChange={this.onChange} style={{marginRight: '20px'}}/>
                                </div>
                                <div>
                                    <label htmlFor='shippingState' className='CheckoutPage-label' >State <span>(2 letter abbr.):</span></label>
                                    <InputField name='shippingState' type='text' value={shippingState} placeholder='NY' minLength='2' maxLength='2' onChange={this.onChange} />
                                </div>
                            </div>
                        </div>
                        <div className='CheckoutPage-subform'>
                            <h3>Payment Information</h3>
                            <label htmlFor='billingCard' className='CheckoutPage-label' >Card Number <span>(Use a fake one):</span></label>
                            <InputField name='billingCard' type='text' value={billingCard} placeholder='3333444455556666' pattern='[\d]*' minLength='16' maxLength='16' onChange={this.onChange} />

                            <div className='CheckoutPage-field-container'>
                                <div style={{marginRight: '20px'}}>
                                    <label htmlFor='billingExpDate' className='CheckoutPage-label' >Exp. Date <span>(MM/YY):</span></label>
                                    <InputField name='billingExpDate' type='text' value={billingExpDate} placeholder='01/25' pattern='[\d]{2}/[\d]{2}' onChange={this.onChange}/>
                                </div>
                                <div>
                                    <label htmlFor='billingSecCode' className='CheckoutPage-label' >Security Code:</label>
                                    <InputField name='billingSecCode' type='text' value={billingSecCode} placeholder='793' pattern='[\d]*' minLength='3' maxLength='3' onChange={this.onChange} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <Button form className='CheckoutPage-btn'>Place Order</Button>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        cart: state.cartReducer.cart
    };
}

CheckoutPage.propTypes = {
    cart: PropTypes.array.isRequired,
    placeOrder: PropTypes.func.isRequired,
    emptyCart: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired
};

export default connect(mapStateToProps, {placeOrder, emptyCart})(CheckoutPage);