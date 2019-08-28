import React from 'react';
import './App.css';
import ProductList from './containers/ProductList/ProductList';

class App extends React.Component {
  public render() {
    return (
      <div className='App'>
        <ProductList />
      </div>
    );
  }
}

export default App;
