import React, {Component} from 'react';
import './App.css';
import Navbar from '../Navbar';
import Footer from '../Footer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import withAuth from '../../hocs/withAuth';
import LandingPage from '../LandingPage';
import AboutPage from '../AboutPage';
import LoginPage from '../LoginPage';
import SignupPage from '../SignupPage';
import ProfilePage from '../ProfilePage';
import ProductPage from '../ProductPage';
import ShowPage from '../ShowPage';
import {restoreCart} from '../../store/actions/cart';
import {connect} from 'react-redux';


class App extends Component {
    componentDidMount(){
        this.props.restoreCart();
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <Navbar />
                    <Switch>
                        <Route path='/products/:productId' component={ShowPage} />
                        <Route path='/products' component={ProductPage} />
                        <Route path='/profile' component={withAuth(ProfilePage)} />
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

export default connect(null, {restoreCart})(App);