import { useState } from 'react'
import './App.css'
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Tier1 from './routes/tier1/tier1';
import Overview_Tier1 from './routes/tier1/overview_Tier1';
import Sections_Tier1 from './routes/tier1/settings_Tier1';
import Images_Tier1 from './routes/tier1/images_Tier1';
import Buttons_Tier1 from './routes/tier1/text_Tier1';


import Tier2 from './routes/tier2/tier2';
import Overview_Tier2 from './routes/tier2/overview_Tier2';
import Sections_Tier2 from './routes/tier2/sections_Tier2';
import Images_Tier2 from './routes/tier2/images_Tier2';
import Buttons_Tier2 from './routes/tier2/buttons_Tier2';

import Tier3 from './routes/tier3/tier3';
import Text_Tier1 from './routes/tier1/text_Tier1';
import Settings_Tier1 from './routes/tier1/settings_Tier1';
import GlobalState from './utils/globalState';

function App() {

  return (
    <>
      {/* <RouterProvider router={router} /> */}
      <GlobalState>
        <Router>
          <Routes>
            <Route path='/' element={<Tier1 />} />

            <Route path='tier1' element={<Tier1 />}>
              <Route index element={<Overview_Tier1 />} />
              <Route path='overview' element={<Overview_Tier1 />} />
              <Route path='text' element={<Text_Tier1 />} />
              <Route path='images' element={<Images_Tier1 />} />
              <Route path='settings' element={<Settings_Tier1 />} />
            </Route>

            <Route path='tier2' element={<Tier2 />}>
              <Route index element={<Overview_Tier2 />} />
              <Route path='overview' element={<Overview_Tier2 />} />
              <Route path='sections' element={<Sections_Tier2 />} />
              <Route path='images' element={<Images_Tier2 />} />
              <Route path='buttons' element={<Buttons_Tier2 />} />
            </Route>
            
            <Route path='tier3' element={<Tier3 />} />
          </Routes>
        </Router>
      </GlobalState>
    </>
  )
}

export default App
