import "./App.css";
import Home from "./components/Home.jsx";
import Details from "./components/offerDetails.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div className="app">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/offer/:offer_id" element={<Details />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
