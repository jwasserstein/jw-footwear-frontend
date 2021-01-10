import React, {Component} from 'react';
import './ReviewPage.css';
import {connect} from 'react-redux';
import Rating from '../../components/Rating';
import {submitReview} from '../../store/actions/reviews';
import {getProducts} from '../../store/actions/products';
import PropTypes from 'prop-types';

class ReviewPage extends Component {
    constructor(props){
        super(props);

        this.state = {
            rating: 0,
            text: ''
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        document.title = 'JW Footwear | Review';
    }

    onChange(e){
        this.setState({...this.state, [e.target.name]: e.target.value});
    }

    onSubmit(e){
        e.preventDefault();
        const {text, rating} = this.state;
        const {match, history, submitReview, getProducts} = this.props;
        const productId = match.params.productId;

        submitReview(productId, text, rating)
            .then(() => getProducts())
            .then(() => history.push(`/products/${productId}`));
    }

    render() {
        const {rating, text} = this.state;
        const {products, match} = this.props;

        const product = products.find(p => p._id === match.params.productId);

        return (
            <div className='ReviewPage-main-container'>
                <h2>Add a Review</h2>
                <div className='ReviewPage-item-container'>
                    <img src={product.imageUrl} alt={product.name} />
                    <div>
                        <h3>{product.name}</h3>
                        <p>{product.longDescription}</p>
                    </div>
                </div>
                <form className='ReviewPage-form' onSubmit={this.onSubmit}>
                    <div className='ReviewPage-rating-container'>
                        <label>Rating:</label>
                        <Rating rating={rating} onClick={rating => this.setState({...this.state, rating})} className='ReviewPage-rating'/>
                    </div>
                    <label htmlFor='ReviewPage-text'>Review:</label>
                    <textarea id='ReviewPage-text' placeholder='Type your review here...' name='text' value={text} onChange={this.onChange}></textarea>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        products: state.productReducer.products
    };
}

ReviewPage.propTypes = {
    match: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    products: PropTypes.array,
    submitReview: PropTypes.func.isRequired,
    getProducts: PropTypes.func.isRequired
};

export default connect(mapStateToProps, {submitReview, getProducts})(ReviewPage);