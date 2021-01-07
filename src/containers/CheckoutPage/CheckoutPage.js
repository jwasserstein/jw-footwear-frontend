import React, {Component} from 'react';
import InputField from '../../components/InputField';
import {connect} from 'react-redux';
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
            billingName: '',
            billingAddress: '',
            billingCard: '',
            billingExpDate: '',
            billingSecCode: ''
        };

        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.setState({...this.state, [e.target.name]: e.target.value});
    }

    render() {
        const {shippingName, shippingAddress, shippingCity, shippingState, 
            shippingCountry, billingName, billingAddress, billingCard,
            billingExpDate, billingSecCode} = this.state;

        return (
            <div className='CheckoutPage-main-container'>
                <h2>Checkout</h2>
                <div className='CheckoutPage-inner-container'>
                    <form className='CheckoutPage-form'>
                        <h3>Shipping Information</h3>
                        <InputField name='shippingName' type='text' value={shippingName} label='Full Name' onChange={this.onChange} />
                        <InputField name='shippingAddress' type='text' value={shippingAddress} label='Street Address' onChange={this.onChange} />
                        <div className='CheckoutPage-field-container'>
                            <InputField name='shippingCity' type='text' value={shippingCity} label='City' onChange={this.onChange} style={{marginRight: '20px'}}/>
                            <InputField name='shippingState' type='text' value={shippingState} label='State' onChange={this.onChange} />
                        </div>
                        <InputField name='shippingCountry' type='text' value={shippingCountry} label='Country' onChange={this.onChange} />
                    </form>
                    <form className='CheckoutPage-form'>
                        <h3>Payment Information</h3>
                        <InputField name='billingName' type='text' value={billingName} label='Name on Card' onChange={this.onChange} />
                        <InputField name='billingAddress' type='text' value={billingAddress} label='Billing Address' onChange={this.onChange} />
                        <InputField name='billingCard' type='text' value={billingCard} label='Card Number' onChange={this.onChange} />
                        <div className='CheckoutPage-field-container'>
                            <InputField name='billingExpDate' type='text' value={billingExpDate} label='Expiration Date' onChange={this.onChange} style={{marginRight: '20px'}}/>
                            <InputField name='billingSecCode' type='text' value={billingSecCode} label='Security Code' onChange={this.onChange} />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {

    };
}

export default connect()(CheckoutPage);