import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import SubHeader from './components/header/SubHeader';

const App = () => {
  return (
    <Router>
      <Header />
      <SubHeader />
    </Router>
  );
}

export default App;
