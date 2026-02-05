import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import BoardOfDirectors from './pages/BoardOfDirectors';
import FAQ from './pages/FAQ';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="governance/board-of-directors" element={<BoardOfDirectors />} />
          <Route path="faq" element={<FAQ />} />
          {/* Fallback for other links to home for demo purposes */}
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;