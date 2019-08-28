import React from 'react';
import './App.css';
import ProductList from './containers/ProductList/ProductList';
import ProductListProps from './components/ProductList/ProductListProps';

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
