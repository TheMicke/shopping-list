import React from 'react';

import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Home />
                <hr />
                <Login />
                <hr />
                <Register />
            </header>
        </div>
    );
}

export default App;
