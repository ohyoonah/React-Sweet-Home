import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Category from './containers/Category';
import Header from './containers/Head';
import Product from './containers/Product';
import Slider from './containers/Slider';
import Store from './containers/Store';

const App = () => {
  return (
    <Router>
      <Header />
      <Slider />
      <Store />
      <Product />
      <Category />
    </Router>
  );
}

export default App;
