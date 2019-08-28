import React from 'react';
import './App.css';
import ProductList from './containers/ProductList/ProductList';
import { BrowserRouter, Route } from 'react-router-dom';
import ProductDetails from './containers/ProductDetails/ProductDetails';

class App extends React.Component {
  public render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <Route exact path='/' component={ProductList} />
          <Route path='/details' component={ProductDetails} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
