import { useState } from "react";
import Header from "./Header.jsx";
import Search from "./Search.jsx";
import Offers from "./Offers.jsx";
import "../App.css";

const Home = () => {
  const [location, setLocation] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [isFullTimeOnly, setIsFullTimeOnly] = useState(false);
  return (
    <>
      <Header />
      <Search
        setLocation={setLocation}
        setSearchTerm={setSearchTerm}
        setIsFullTimeOnly={setIsFullTimeOnly}
      />
      <Offers
        location={location}
        searchTerm={searchTerm}
        isFullTimeOnly={isFullTimeOnly}
      />
    </>
  );
};

export default Home;
