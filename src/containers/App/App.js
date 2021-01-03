import './App.css';
import Navbar from '../Navbar';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import {configureStore} from '../../store';

const store = configureStore();

function App() {
    return (
        <Provider store={store}>
            <Router>
                <div className="App">
                    <Navbar />
                </div>
            </Router>
        </Provider>
    );
}

export default App;
