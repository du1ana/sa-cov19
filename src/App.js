import './App.css';
import Home from './components/home.component.js';
import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
    <Route path="/" component={Home}/>
    </div>
</Router>
  );
}

export default App;
