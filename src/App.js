import React from 'react'
import Navbar from './Navbar'
import Library from './Library'
import Check from './Check'
import { Route, Routes } from 'react-router-dom'
function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/Library" element={<Library />} />
                <Route exact path="/Check" element={<Check />} />
            </Routes>
        </>
    )
}

export default App
