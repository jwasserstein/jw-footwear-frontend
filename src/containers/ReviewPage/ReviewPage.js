import React, {Component} from 'react';
import './ReviewPage.css';
import {connect} from 'react-redux';
import Button from '../../components/Button';

class ReviewPage extends Component {
    constructor(props){
        super(props);

        this.state = {
            rating: 0,
            text: ''
        };
        this.onChange = this.onChange.bind(this);
    }

    onChange(e){
        this.setState({...this.state, [e.target.name]: e.target.value});
    }

    render() {
        const {rating, text} = this.state;

        return (
            <div className='ReviewPage-main-container'>
                <h2>Add a Review</h2>
                <div className='ReviewPage-item-container'>
                    <img src='http://localhost:3001/images/basketball-shoe.jpg' alt='' />
                    <div>
                        <h3>Red Basketball</h3>
                        <p>A red shoe with a rubber sole and some laces.  
                            It’s made from the highest quality fabric and rubber.  
                            Sold as a single shoe.</p>
                    </div>
                </div>
                <form className='ReviewPage-form'>
                    <div className='ReviewPage-rating-container'>
                        <label>Rating:</label>
                    </div>
                    <label for='ReviewPage-text'>Review:</label>
                    <textarea id='ReviewPage-text' placeholder='Type your review here...' name='text' value={text} onChange={this.onChange}></textarea>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {

    };
}

export default connect(mapStateToProps)(ReviewPage);