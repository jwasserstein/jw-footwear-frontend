import React, {Component} from 'react';
import InputField from '../../components/InputField';
import Button from '../../components/Button';
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
            shippingCountry: '',
            billingCard: '',
            billingExpDate: '',
            billingSecCode: ''
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
        const {shippingName, shippingAddress, shippingCity, shippingState, shippingCountry,
            billingCard, billingExpDate, billingSecCode} = this.state;

        this.props.placeOrder({
            items: this.props.cart,
            shippingName,
            shippingAddress,
            shippingCity,
            shippingState,
            shippingCountry,
            billingCard,
            billingExpDate,
            billingSecCode
        })
        .then(() => {
            this.props.emptyCart();
            this.props.history.push('/products');
        })
    }

    render() {
        const {shippingName, shippingAddress, shippingCity, shippingState, 
            shippingCountry, billingCard, billingExpDate, billingSecCode} = this.state;

        return (
            <div className='CheckoutPage-main-container'>
                <h2>Checkout</h2>
                <form className='CheckoutPage-form' onSubmit={this.onSubmit}>
                    <div>
                        <div className='CheckoutPage-subform'>
                            <h3>Shipping Information</h3>
                            <InputField name='shippingName' type='text' value={shippingName} label='Full Name' onChange={this.onChange} />
                            <InputField name='shippingAddress' type='text' value={shippingAddress} label='Street Address' onChange={this.onChange} />
                            <div className='CheckoutPage-field-container'>
                                <InputField name='shippingCity' type='text' value={shippingCity} label='City' onChange={this.onChange} style={{marginRight: '20px'}}/>
                                <InputField name='shippingState' type='text' value={shippingState} label='State' minLength='2' maxLength='2' onChange={this.onChange} />
                            </div>
                            <InputField name='shippingCountry' type='text' value={shippingCountry} label='Country' onChange={this.onChange} />
                        </div>
                        <div className='CheckoutPage-subform'>
                            <h3>Payment Information</h3>
                            <InputField name='billingCard' type='text' value={billingCard} label='Card Number' pattern='[\d]*' minLength='16' maxLength='16' onChange={this.onChange} />
                            <div className='CheckoutPage-field-container'>
                                <InputField name='billingExpDate' type='text' value={billingExpDate} label='Expiration Date' pattern='[\d]{2}/[\d]{2}' onChange={this.onChange} style={{marginRight: '20px'}}/>
                                <InputField name='billingSecCode' type='text' value={billingSecCode} label='Security Code' pattern='[\d]*' minLength='3' maxLength='3' onChange={this.onChange} />
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