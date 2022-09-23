import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './containers/Head';

const App = () => {
  return (
    <Router>
      <Header />
    </Router>
  );
}

export default App;
