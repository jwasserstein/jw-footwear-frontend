import './App.css';
import Navbar from '../Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import {configureStore} from '../../store';
import LandingPage from '../LandingPage';

const store = configureStore();

function App() {
    return (
        <Provider store={store}>
            <Router>
                <div className="App">
                    <Navbar />
                    <Switch>
                        <Route path='/' component={LandingPage} />
                    </Switch>
                </div>
            </Router>
        </Provider>
    );
}

export default App;
