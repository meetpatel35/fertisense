import React from 'react'
import Navbar from './Navbar'
import Library from './Library'
import Check from './Check'
import Home from './Home'
import { Route, Routes } from 'react-router-dom'
import Features from './Features'
import Support from './Support'

function App() {
    return (
        <>
            <Navbar />
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/library" element={<Library />} />
                    <Route path="/check" element={<Check />} />
                    <Route path="/features" element={<Features />} />
                    <Route path="/support" element={<Support />} />
                </Routes>
            </div>

        </>
    )
}

export default App
