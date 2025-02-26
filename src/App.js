import "./App.css";
import Header from "./components/Header.jsx";
import Search from "./components/Search.jsx";
import Offers from "./components/Offers.jsx";

import { useState } from "react";

function App() {
  const [location, setLocation] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [isFullTimeOnly, setIsFullTimeOnly] = useState(false);

  return (
    <div className="app">
      <Header />
      <Search setLocation={setLocation} setSearchTerm={setSearchTerm} setIsFullTimeOnly={setIsFullTimeOnly}/>
      <Offers location={location} searchTerm={searchTerm} isFullTimeOnly={isFullTimeOnly}/>
      
    </div>
  );
}

export default App;
