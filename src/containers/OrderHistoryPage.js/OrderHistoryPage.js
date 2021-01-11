import React, {Component} from 'react';
import './OrderHistoryPage.css';
import Options from '../../components/Options';
import {connect} from 'react-redux';
import {getOrders} from '../../store/actions/orders';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

class OrderHistoryPage extends Component {
    componentDidMount(){
        document.title = 'JW Footwear | Order History';
        if(!this.props.lastUpdated){
            this.props.getOrders();
        }
    }

    render() {
        const {orders} = this.props;

        const optionElements = orders?.map(o => {
            const numItems = o.items.reduce((acc, next) => acc + next.quantity, 0) || 0;
            const total = o.subTotal + o.shipping + o.taxes;
            
            return (
                <Options.Item to={`/orders/${o._id}`} key={o._id}>
                    <div className='OrderHistoryPage-option-container'>
                        <p>{dayjs(o.date).format('MM/DD/YYYY')}</p>
                        <p>{numItems} items</p>
                        <p>${total.toFixed(2)}</p>
                    </div>
                </Options.Item>
            )}
        );

        return (
            <div className='OrderHistoryPage-main-container'>
                <h2>Order History</h2>
                <Options.Container>
                    {optionElements.length ? 
                        optionElements : 
                        (<p style={{textAlign: 'center'}}>You haven't placed any orders yet.</p>)
                    }
                </Options.Container>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        orders: state.orderReducer.orders,
        lastUpdated: state.orderReducer.lastUpdated
    };
}

OrderHistoryPage.propTypes = {
    order: PropTypes.array,
    lastUpdated: PropTypes.number,
    getOrders: PropTypes.func.isRequired
};

export default connect(mapStateToProps, {getOrders})(OrderHistoryPage);