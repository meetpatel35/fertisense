import React, { useState, useEffect } from 'react';
import './Css/Check.css';
import check from './assets/images/check.png';

function Check() {
  const [selectedCrop, setSelectedCrop] = useState('Select');
  const [phRange, setphRange] = useState(null);
  const [espdata, setEspdata] = useState(null);
  const [intervalId, setIntervalId] = useState(null); // To store interval ID for clearing later

  const fetchCropData = async (cropName) => {
    try {
      const response = await fetch('http://localhost:5000/espdatareceive', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cropName }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      } 

      const data = await response.json();
      console.log(data)
      console.log(data.cropData);
      console.log(data.number);

      setphRange(data.cropData);
      setEspdata(data.number.number);
    
    } catch (error) {
      console.error('Error sending data to backend:', error);
    }
  };

  const handleSelectChange = (event) => {
    const cropName = event.target.value;
    setSelectedCrop(cropName);
    console.log('Selected crop:', cropName);

    // Stop any existing interval before starting a new one
    if (intervalId) {
      clearInterval(intervalId);
    }

    // Start a new interval to fetch data every second
    const newIntervalId = setInterval(() => {
      fetchCropData(cropName);
    }, 1500);

    // Store the interval ID so we can clear it later
    setIntervalId(newIntervalId);
  };

  // Clean up the interval on unmount
  useEffect(() => {
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [intervalId]);

  const cropNames = ['Wheat', 'Rice', 'Maize (Corn)', 'Barley', 'Oats', 'Rye', 'Sorghum', 'Millet', 'Soybean', 'Peanut', 'Cotton', 'Sugarcane', 'Sugar beet', 'Potato', 'Sweet potato', 'Cassava', 'Yam', 'Tomato', 'Onion', 'Garlic', 'Cabbage', 'Cauliflower', 'Broccoli', 'Carrot', 'Spinach', 'Lettuce', 'Pepper', 'Cucumber', 'Pumpkin', 'Zucchini', 'Eggplant', 'Squash', 'Watermelon', 'Melon', 'Strawberry', 'Blueberry', 'Raspberry', 'Blackberry', 'Apple', 'Pear', 'Peach', 'Plum', 'Cherry', 'Apricot', 'Mango', 'Banana', 'Pineapple', 'Grape', 'Orange', 'Lemon', 'Lime', 'Grapefruit', 'Pomegranate', 'Kiwi', 'Avocado', 'Papaya', 'Date', 'Coconut', 'Almond', 'Walnut', 'Pistachio', 'Cashew', 'Pea', 'Lentil', 'Chickpea', 'Bean', 'Flax', 'Sesame', 'Sunflower', 'Rapeseed (Canola)', 'Olive', 'Tea', 'Coffee', 'Cocoa', 'Tobacco', 'Cotton', 'Hemp', 'Neem', 'Jute', 'Sisal', 'Alfalfa', 'Clover', 'Timothy', 'Fescue', 'Ryegrass', 'Orchardgrass', 'Sudangrass', 'Switchgrass', 'Bamboo', 'Sugar maple', 'Rubber tree', 'Eucalyptus', 'Pine tree', 'Spruce', 'Fir', 'Cedar', 'Teak', 'Mahogany', 'Cork oak', 'Date palm'];

  return (
    <div className='check'>
      <div className="container-check">
        <div className="left">
          <select
            className='search-bar'
            id="crops"
            value={selectedCrop}
            onChange={handleSelectChange}
          >
            <option value="Select" disabled>
              Select a crop
            </option>
            {cropNames.map((crop, index) => (
              <option key={index} value={crop}>
                {crop}
              </option>
            ))}
          </select>

          {selectedCrop !== 'Select' && (
            <div className="crop-info">
              <p><strong>Name:</strong> {selectedCrop}</p>
              <p><strong>Checking pH ....</strong></p>
              <p><strong>Results:</strong></p>
              <p>pH of fertilizer: {espdata}</p>
              <p>Recommended pH of fertilizer: {`${phRange?.ph_low} - ${phRange?.ph_high}`}</p>
              <p className="result-text">
              </p>
            </div>
          )}
        </div>
        <div className="right">
          <img src={check} alt="Fertilizer" />
        </div>
      </div>
    </div>
  );
}

export default Check;
