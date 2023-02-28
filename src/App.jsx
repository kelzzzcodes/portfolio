
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './component/Header/header'
import {Home,About} from './pages'

import './App.css'

const App = () => {
  return (
    <div>
    <Header/>
  
      
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
         
        </Routes>
      </div>
   
  )
}

export default App
