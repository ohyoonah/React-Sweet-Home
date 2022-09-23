import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './containers/Head';
import Slider from './containers/Slider';

const App = () => {
  return (
    <Router>
      <Header />
      <Slider />
    </Router>
  );
}

export default App;
