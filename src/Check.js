import React from 'react'
import Navbar from './Navbar'
import './Css/Check.css'
import check from './assets/images/check.png'
function Check() {
    const cropNames = ['Wheat', 'Rice', 'Maize (Corn)', 'Barley', 'Oats', 'Rye', 'Sorghum', 'Millet', 'Soybean', 'Peanut', 'Cotton', 'Sugarcane', 'Sugar beet', 'Potato', 'Sweet potato', 'Cassava', 'Yam', 'Tomato', 'Onion', 'Garlic', 'Cabbage', 'Cauliflower', 'Broccoli', 'Carrot', 'Spinach', 'Lettuce', 'Pepper', 'Cucumber', 'Pumpkin', 'Zucchini', 'Eggplant', 'Squash', 'Watermelon', 'Melon', 'Strawberry', 'Blueberry', 'Raspberry', 'Blackberry', 'Apple', 'Pear', 'Peach', 'Plum', 'Cherry', 'Apricot', 'Mango', 'Banana', 'Pineapple', 'Grape', 'Orange', 'Lemon', 'Lime', 'Grapefruit', 'Pomegranate', 'Kiwi', 'Avocado', 'Papaya', 'Date', 'Coconut', 'Almond', 'Walnut', 'Pistachio', 'Cashew', 'Pea', 'Lentil', 'Chickpea', 'Bean', 'Flax', 'Sesame', 'Sunflower', 'Rapeseed (Canola)', 'Olive', 'Tea', 'Coffee', 'Cocoa', 'Tobacco', 'Cotton', 'Hemp', 'Rubber', 'Jute', 'Sisal', 'Alfalfa', 'Clover', 'Timothy', 'Fescue', 'Ryegrass', 'Orchardgrass', 'Sudangrass', 'Switchgrass', 'Bamboo', 'Sugar maple', 'Rubber tree', 'Eucalyptus', 'Pine tree', 'Spruce', 'Fir', 'Cedar', 'Teak', 'Mahogany', 'Cork oak', 'Date palm'];
    return (
        <div className='check'>
            {/* <Navbar /> */}
            
            <div className="container-check">
                <div className="left">
                    <select className='search-bar' id="cars">
                        {cropNames.map((crop, index) => (
                            <option key={index} value={crop.toLowerCase().replace(/\s/g, '-')}>
                                {crop}
                            </option>
                        ))}
                    </select>
                    <div className="crop-info">
                        <p><strong>Name:</strong> Rice</p>
                        <p><strong>Checking pH ....</strong></p>
                        <p><strong>Results:</strong></p>
                        <p>pH of fertilizer: 6.1</p>
                        <p>Recommended pH of fertilizer: 7.4</p>
                    </div>
                    <p className="result-text">Fertilizer is not good for crop.</p>
                </div>
                <div className="right">
                    <img src={check} alt="Fertilizer Image" />
                </div>
            </div>
            
        </div>
    )
}

export default Check
