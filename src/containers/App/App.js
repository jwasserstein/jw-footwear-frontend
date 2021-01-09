import React, {Component} from 'react';
import './App.css';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import withAuth from '../../hocs/withAuth';
import LandingPage from '../LandingPage';
import AboutPage from '../AboutPage';
import LoginPage from '../LoginPage';
import SignupPage from '../SignupPage';
import PasswordPage from '../PasswordPage';
import ProductPage from '../ProductPage';
import ShowPage from '../ShowPage';
import CartPage from '../CartPage';
import CheckoutPage from '../CheckoutPage';
import {restoreCart} from '../../store/actions/cart';
import {logOut} from '../../store/actions/auth';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


class App extends Component {
    componentDidMount(){
        this.props.restoreCart();
    }

    render() {
        const {username, cartCount, logOut} = this.props;

        return (
            <Router>
                <div className="App">
                    <Navbar username={username} cartCount={cartCount} logOut={logOut} />
                    <Switch>
                        <Route path='/checkout' component={withAuth(CheckoutPage)} />
                        <Route path='/cart' component={CartPage} />
                        <Route path='/products/:productId' component={ShowPage} />
                        <Route path='/products' component={ProductPage} />
                        <Route path='/password' component={withAuth(PasswordPage)} />
                        <Route path='/signup' component={SignupPage} />
                        <Route path='/login' component={LoginPage} />
                        <Route path='/about' component={AboutPage} />
                        <Route path='/' component={LandingPage} />
                    </Switch>
                    <Footer />
                </div>
            </Router>
        );
    }
}

function mapStateToProps(state){
	return {
		username: state?.authReducer?.username,
		cartCount: state.cartReducer.cartCount
	};
}

App.propTypes = {
    restoreCart: PropTypes.func.isRequired,
    username: PropTypes.string,
	cartCount: PropTypes.number.isRequired,
	logOut: PropTypes.func.isRequired
};

export default connect(mapStateToProps, {restoreCart, logOut})(App);