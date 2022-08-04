import "./App.css";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Details from "./components/Details";
import WatchList from "./components/WatchList";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          {/* to do */}
          <Route path="/movies/filter" element={<Main />} />
          <Route path="/movies/search" element={<Main />} />
          <Route path="/movies/:id/details" element={<Details />} />
          <Route path="/movies/watchlist" element={<WatchList />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
