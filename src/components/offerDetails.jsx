import { useState, useEffect } from 'react'
import '../App.css'
import  Header  from './Header.jsx'
// import  Footer  from './Footer.jsx'
import MainContent from './MainContent.jsx'

function Details() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 100);
  }, []);

  return (
    <div className="app-container">
      <Header />

      <MainContent isLoaded={isLoaded} />
    </div>
  )
}

export default Details;