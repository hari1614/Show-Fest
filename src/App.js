import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Summary from "./components/Summary/Summary";
import Home from "./components/home/Home";
import index from './index.css';

const App = () => {
  return (

    <div>

      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/summary:id" element={<Summary />} />
        </Routes>
      </Router>

    </div>


  );
}

export default App;