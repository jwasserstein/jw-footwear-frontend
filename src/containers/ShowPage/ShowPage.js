import React, {Component} from 'react';
import {connect} from 'react-redux';
import Rating from '../../components/Rating';
import AvailableSizes from '../../components/AvailableSizes';
import Review from '../../components/Review';
import {getProducts} from '../../store/actions/products';
import {addCartItem} from '../../store/actions/cart';
import Message from '../../components/Message';
import PropTypes from 'prop-types';
import './ShowPage.css';

class ShowPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedSize: 0,
            message: '',
            messageColor: ''
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

        this.timeout = setTimeout(() => this.setState({...this.state, message: '', messageColor: ''}), 3000);
        if(selectedSize === 0){
            this.setState({...this.state, message: 'Select a size first', messageColor: 'red'});
            return false;
        }

        this.props.addCartItem(productId, selectedSize, 1);
        this.setState({...this.state, selectedSize: 0, message: 'Item added to cart', messageColor: 'green'});
    }

    componentWillUnmount(){
        clearTimeout(this.timeout);
    }

    componentDidMount(){
        if(this.props.products.length === 0){
            this.props.getProducts()
                .then(() => {
                    const product = this.props.products.find(p => p._id === this.props.match.params.productId);
                    document.title = `JW Footwear | ${product.name}`;
                });
        } else {
            const product = this.props.products.find(p => p._id === this.props.match.params.productId);
            document.title = `JW Footwear | ${product.name}`;
        }
    }

    render() {
        const {match, products} = this.props;
        const {selectedSize, message, messageColor} = this.state;

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
        } = products.find(p => p._id === match.params.productId);

        return (
            <div className="ShowPage-main-container">
                <h2>{name}</h2>
                <div className="ShowPage-inner-container">
                    <img className='ShowPage-image' src={imageUrl} alt='Shoe' />
                    <AvailableSizes availableSizes={availableSizes} selectedSize={selectedSize} updateSize={this.updateSize}/>
                    <div className='ShowPage-price-container'>
                        <p className='ShowPage-price'>${price}</p>
                        <Rating rating={rating} />
                        <button onClick={this.addToCart}>Add to Cart</button>
                        {message && (
                            <Message color={messageColor}>
                                {message}
                            </Message>
                        )}
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