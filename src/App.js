import './App.css';
import React, { useState } from 'react';

function App() {

  const [temperatureValue, setTemperatureValue] = useState(10);
  const [temperatureColor, setTemperatureColor] = useState('cold');

  let increaseTempereture = () => {
    const newTemperature = temperatureValue + 1;
		setTemperatureValue(newTemperature);

    if (newTemperature >= 15) {
			setTemperatureColor('hot');
		}
  }

  let decreaseTemperature = () => {
    const newTemperature = temperatureValue - 1;
		setTemperatureValue(newTemperature);

    if (newTemperature < 15) {
			setTemperatureColor('cold');
		}
  }

  return (
    <div className="app-container">
      <div className="container">
        <div className={`temp-display ${temperatureColor}`}>
          {temperatureValue}°C
        </div>
      </div>
      <div className="button-container">
        <button onClick={decreaseTemperature}>-</button>
        <button onClick={increaseTempereture}>+</button>
      </div>
    </div>
  );
}

export default App;
