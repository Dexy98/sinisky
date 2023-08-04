import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import Home from "./components/Route/Home";
import Service from "./components/Route/Service";
import Contatti from "./components/Route/Contatti";
import Error from "./components/Route/Error";
import Loader from "./lottie/animation_lksghk94.json";

// import "./Loading.css"; // Import the Loading.css file

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [animationComplete, setAnimationComplete] = useState(false); // Add a state to track animation completion

  // Simulate a delay for the loading animation (replace with actual data fetching if needed)
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Set the duration you want for the loading animation
  }, []);

  const handleAnimationComplete = () => {
    setAnimationComplete(true); // Set the flag to true when the animation completes
  };

  // Wait for the animation to complete before setting isLoading to false
  useEffect(() => {
    if (animationComplete) {
      setIsLoading(false);
    }
  }, [animationComplete]);

  return (
    <Router>
      {isLoading ? (
        <Player
          autoplay
          loop
          src={Loader}
          style={{ height: '100vh', width: '100%' }}
          onComplete={handleAnimationComplete}
        >
          <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
        </Player>
      ) : (
        <div>
          <Routes>
            <Route path='/sinisky' element={<Home />} />
            <Route path='/sinisky/Service' element={<Service />} />
            <Route path='/sinisky/Contatti' element={<Contatti />} />
            {/* Fallback route for handling errors */}
            <Route path='*' element={<Error />} />
          </Routes>
        </div>
      )}
    </Router>
  );
}

export default App;