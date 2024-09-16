import React, { useState } from 'react';
import './Css/Check.css';
import check from './assets/images/check.png';

function Check() {
    
    const [selectedCrop, setSelectedCrop] = useState('Select');

    const handleSelectChange = async (event) => {
        const cropName = event.target.value; // Get the updated selected crop
    
        setSelectedCrop(cropName);
        console.log('Selected crop:', cropName);
    
        try {
            const response = await fetch('http://localhost:5000/crop', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({cropName}),
            });
            const data = await response.json();
            console.log(data.cropData)
    
        } catch (error) {
            console.error('Error sending data to backend:', error);
        }
    };

    // Array of crop names
    const cropNames = ['Wheat', 'Rice', 'Maize (Corn)', 'Barley', 'Oats', 'Rye', 'Sorghum', 'Millet',
        'Soybean', 'Peanut', 'Cotton', 'Sugarcane', 'Sugar beet', 'Potato', 'Sweet potato', 'Cassava',
        'Yam', 'Tomato', 'Onion', 'Garlic', 'Cabbage', 'Cauliflower', 'Broccoli', 'Carrot', 'Spinach',
        'Lettuce', 'Pepper', 'Cucumber', 'Pumpkin', 'Zucchini', 'Eggplant', 'Squash', 'Watermelon',
        'Melon', 'Strawberry', 'Blueberry', 'Raspberry', 'Blackberry', 'Apple', 'Pear', 'Peach', 'Plum',
        'Cherry', 'Apricot', 'Mango', 'Banana', 'Pineapple', 'Grape', 'Orange', 'Lemon', 'Lime',
        'Grapefruit', 'Pomegranate', 'Kiwi', 'Avocado', 'Papaya', 'Date', 'Coconut', 'Almond', 'Walnut',
        'Pistachio', 'Cashew', 'Pea', 'Lentil', 'Chickpea', 'Bean', 'Flax', 'Sesame', 'Sunflower',
        'Rapeseed (Canola)', 'Olive', 'Tea', 'Coffee', 'Cocoa', 'Tobacco', 'Cotton', 'Hemp', 'Rubber',
        'Jute', 'Sisal', 'Alfalfa', 'Clover', 'Timothy', 'Fescue', 'Ryegrass', 'Orchardgrass', 'Sudangrass',
        'Switchgrass', 'Bamboo', 'Sugar maple', 'Rubber tree', 'Eucalyptus', 'Pine tree', 'Spruce', 'Fir',
        'Cedar', 'Teak', 'Mahogany', 'Cork oak', 'Date palm'];

    return (
        <div className='check'>
            <div className="container-check">
                <div className="left">
                    {/* Dropdown with default option "Select" */}
                    <select className='search-bar' id="crops" value={selectedCrop} onChange={handleSelectChange} >
                        <option value="Select" disabled>
                            Select a crop
                        </option>
                        {/* Map over the cropNames array to render the options */}
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
                            <p>pH of fertilizer: 6.1</p>
                            <p>Recommended pH of fertilizer: 7.4</p>
                            <p className="result-text">
                                Fertilizer is {selectedCrop === 'Rice' ? 'not good' : 'good'} for crop.
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







// import React, { useState } from 'react';

// import './Css/Check.css'
// import check from './assets/images/check.png'

// function Check() {
//     const [selectedCrop, setSelectedCrop] = useState('Select');

//     const handleSelectChange = (event) => {
//         setSelectedCrop(event.target.value);
//         console.log(selectedCrop)
//       };

//     const cropNames = ['Wheat', 'Rice', 'Maize (Corn)', 'Barley', 'Oats', 'Rye', 'Sorghum', 'Millet', 'Soybean', 'Peanut', 'Cotton', 'Sugarcane', 'Sugar beet', 'Potato', 'Sweet potato', 'Cassava', 'Yam', 'Tomato', 'Onion', 'Garlic', 'Cabbage', 'Cauliflower', 'Broccoli', 'Carrot', 'Spinach', 'Lettuce', 'Pepper', 'Cucumber', 'Pumpkin', 'Zucchini', 'Eggplant', 'Squash', 'Watermelon', 'Melon', 'Strawberry', 'Blueberry', 'Raspberry', 'Blackberry', 'Apple', 'Pear', 'Peach', 'Plum', 'Cherry', 'Apricot', 'Mango', 'Banana', 'Pineapple', 'Grape', 'Orange', 'Lemon', 'Lime', 'Grapefruit', 'Pomegranate', 'Kiwi', 'Avocado', 'Papaya', 'Date', 'Coconut', 'Almond', 'Walnut', 'Pistachio', 'Cashew', 'Pea', 'Lentil', 'Chickpea', 'Bean', 'Flax', 'Sesame', 'Sunflower', 'Rapeseed (Canola)', 'Olive', 'Tea', 'Coffee', 'Cocoa', 'Tobacco', 'Cotton', 'Hemp', 'Rubber', 'Jute', 'Sisal', 'Alfalfa', 'Clover', 'Timothy', 'Fescue', 'Ryegrass', 'Orchardgrass', 'Sudangrass', 'Switchgrass', 'Bamboo', 'Sugar maple', 'Rubber tree', 'Eucalyptus', 'Pine tree', 'Spruce', 'Fir', 'Cedar', 'Teak', 'Mahogany', 'Cork oak', 'Date palm'];

//     return (
//         <div className='check'>
//             <div className="container-check">
//                 <div className="left">

//                     <select className='search-bar' id="crops" value={selectedCrop} onChange={handleSelectChange}>
//                         {cropNames.map((crop, index) => (
//                             <option key={index} value={crop.toLowerCase().replace(/\s/g, '-')}>
//                                 {crop}
//                             </option>
//                         ))}
//                     </select>
//                     <div className="crop-info">
//                         <p><strong>Name:</strong> Rice</p>
//                         <p><strong>Checking pH ....</strong></p>
//                         <p><strong>Results:</strong></p>
//                         <p>pH of fertilizer: 6.1</p>
//                         <p>Recommended pH of fertilizer: 7.4</p>
//                     </div>
//                     <p className="result-text">Fertilizer is not good for crop.</p>
//                 </div>
//                 <div className="right">
//                     <img src={check} alt="Fertilizer Image" />
//                 </div>
//             </div>

//         </div>
//     )
// }

// export default Check


