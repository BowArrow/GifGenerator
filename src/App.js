import React from 'react';
import logo from './logo.svg';
import './App.css';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import Home from './Component/Home';

function App() {
  return (
    <div className="App">
        <Home />
    </div>
  );
}

export default App;
