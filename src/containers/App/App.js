import './App.css';
import Navbar from '../Navbar';
import Footer from '../Footer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import {configureStore} from '../../store';
import LandingPage from '../LandingPage';
import AboutPage from '../AboutPage';
import LoginPage from '../LoginPage';

const store = configureStore();

function App() {
    return (
        <Provider store={store}>
            <Router>
                <div className="App">
                    <Navbar />
                    <Switch>
                        <Route path='/login' component={LoginPage} />
                        <Route path='/about' component={AboutPage} />
                        <Route path='/' component={LandingPage} />
                    </Switch>
                    <Footer />
                </div>
            </Router>
        </Provider>
    );
}

export default App;
