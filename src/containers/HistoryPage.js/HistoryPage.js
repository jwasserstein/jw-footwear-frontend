import React, {Component} from 'react';
import './HistoryPage.css';
import Options from '../../components/Options';
import {connect} from 'react-redux';
import {getOrders} from '../../store/actions/orders';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

class HistoryPage extends Component {
    componentDidMount(){
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
                <Options.Item to={`/orders/${o._id}`}>
                    <div className='HistoryPage-option-container' key={o._id}>
                        <p>{dayjs(o.date).format('MM/DD/YYYY')}</p>
                        <p>{numItems} items</p>
                        <p>${total.toFixed(2)}</p>
                    </div>
                </Options.Item>
            )}
        );

        return (
            <div className='HistoryPage-main-container'>
                <h2>Order History</h2>
                <Options.Container>
                    {optionElements}
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

HistoryPage.propTypes = {
    order: PropTypes.array,
    lastUpdated: PropTypes.number,
    getOrders: PropTypes.func.isRequired
};

export default connect(mapStateToProps, {getOrders})(HistoryPage);