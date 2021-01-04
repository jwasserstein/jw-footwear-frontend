import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getProducts} from '../../store/actions/products';

class ProductPage extends Component {
    componentDidMount(){
        if(!this.props.lastUpdated){
            this.props.getProducts()
                .catch(err => console.log(err));
        }
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        products: state.productReducer.products,
        lastUpdated: state.productReducer.lastUpdated
    };
}

export default connect(mapStateToProps, {getProducts})(ProductPage);