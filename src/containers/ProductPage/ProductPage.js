import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getProducts} from '../../store/actions/products';
import Product from '../../components/Product';
import './ProductPage.css';

class ProductPage extends Component {
    componentDidMount(){
        document.title = 'JW Footwear | Products';
        if(!this.props.lastUpdated){
            this.props.getProducts()
                .catch(err => console.log(err));
        }
    }

    render() {
        const {products} = this.props;

        let productElements = [];
        if(products.length > 0){
            products.forEach(p => productElements.push(<Product 
                                                            name={p.name} 
                                                            price={p.price} 
                                                            shortDescription={p.shortDescription} 
                                                            imageUrl={`http://localhost:3001/${p.imageUrl}`}
                                                            rating={p.rating}
                                                            numReviews={p.reviews.length}
                                                            _id={p._id}
                                                            key={p._id}
                                                        />));
        } else {
            productElements.push(<p key='loading'>Loading...</p>)
        }

        return (
            <div>
                <p className='ProductPage-materials'>Our shoes are made from the highest quality materials.</p>
                <div className='ProductPage-product-container'>
                    {productElements}
                </div>
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