import React from 'react'
import ReactDOM from 'react-dom/client'
// import AbuLunch from './pages/AbuLunch'
import './index.css'
import Ball from './pages/Ball'
import Classgrid from './pages/Classgrid'
import Flex from './pages/FlexClass'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Classgrid/> */}
    {/* <Ball /> */}
    {/* <AbuLunch /> */}
    <Flex/>
  </React.StrictMode>,
)
