import React, {Component} from 'react';
import {connect} from 'react-redux';
import Rating from '../../components/Rating';
import AvailableSizes from '../../components/AvailableSizes';
import Review from '../../components/Review';
import {getProducts} from '../../store/actions/products';
import {addCartItem} from '../../store/actions/cart';
import PropTypes from 'prop-types';
import './ShowPage.css';

class ShowPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedSize: 0
        };
        this.addToCart = this.addToCart.bind(this);
        this.updateSize = this.updateSize.bind(this);
    }

    updateSize(size){
        this.setState({...this.state, selectedSize: size});
    }

    addToCart(){
        const productId = this.props.match.params.productId;
        const selectedSize = this.state.selectedSize;

        if(selectedSize === 0){
            console.log('You need to pick a size first');
            return false;
        }

        this.props.addCartItem(productId, selectedSize, 1);
        
        this.setState({selectedSize: 0});
    }

    componentDidMount(){
        if(this.props.products.length === 0){
            this.props.getProducts();
        }
    }

    render() {
        const {match, products} = this.props;
        const {selectedSize} = this.state;

        if(products.length === 0){
            return (<p>Loading...</p>);
        }

        const {
            name, 
            rating, 
            availableSizes, 
            longDescription,
            imageUrl, 
            price
        } = products.filter(p => p._id === match.params.productId)[0];

        return (
            <div className="ShowPage-main-container">
                <h2>{name}</h2>
                <div className="ShowPage-inner-container">
                    <img className='ShowPage-image' src={`http://localhost:3001/${imageUrl}`} alt='Shoe' />
                    <AvailableSizes availableSizes={availableSizes} selectedSize={selectedSize} updateSize={this.updateSize}/>
                    <div className='ShowPage-price-container'>
                        <p className='ShowPage-price'>${price}</p>
                        <Rating rating={rating} />
                        <button onClick={this.addToCart}>Add to Cart</button>
                    </div>
                </div>
                <h2>Description</h2>
                <p className='ShowPage-description'>{longDescription}</p>
                <h2>Reviews</h2>
                <Review rating={4} author='testUsername' comment='I bought this shoe and I really like it.'/>
                <Review rating={2} author='otherUsername' comment="It didn't really fit"/>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        products: state.productReducer.products
    };
}

ShowPage.propTypes = {
    match: PropTypes.object.isRequired,
    products: PropTypes.array.isRequired,
    getProducts: PropTypes.func.isRequired,
    addCartItem: PropTypes.func.isRequired
};

export default connect(mapStateToProps, {getProducts, addCartItem})(ShowPage);