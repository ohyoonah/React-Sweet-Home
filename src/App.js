import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Category from './containers/Category';
import Header from './containers/Head';
import Product from './containers/Product';
import Slider from './containers/Slider';

const App = () => {
  return (
    <Router>
      <Header />
      <Slider />
      <Product />
      <Category />
    </Router>
  );
}

export default App;
