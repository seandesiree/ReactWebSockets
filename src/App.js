import React, { useState, useEffect } from 'react';
import RealTimeChart from './components/RealTimeChart';
import ControlPanel from './components/ControlPanel';
import useWebSocket from './hooks/useWebSocket';
import './styles.css';

const App = () => {
  const [isPaused, setIsPaused] = useState(false);
  const { data } = useWebSocket('http://localhost:4000'); 

  const handlePauseResume = () => {
    setIsPaused(prev => !prev);
  };

  return (
    <div className="app">
      <h1>Real-Time Data Visualization</h1>
      <ControlPanel 
        isPaused={isPaused} 
        onPauseResume={handlePauseResume} 
      />
      {data.length > 0 ? (
        <RealTimeChart data={data} isPaused={isPaused} />
      ) : (
        <div>Loading data...</div>
      )}
    </div>
  );
};

export default App;