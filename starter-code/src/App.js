import React, { Component } from 'react';
import './App.css';
import foods from './foods.json'
import Header from './components/Header';
import FoodBox from './components/FoodBox';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
           <FoodBox />
        </div>
       
      </div>
    );
  }
}

export default App;
