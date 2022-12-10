import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Auctions, Drop, Home, Marketplace, SharedLayout } from './pages';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/auctions" element={<Auctions />} />
            <Route path="/drop" element={<Drop />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
