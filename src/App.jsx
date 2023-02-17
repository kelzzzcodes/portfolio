
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {Header,} from './component'

import './App.css'

const App = () => {
  return (
    <div className="h-screen flex">
      <Header/>
      <div className="flex-1 overflow-auto ">
        
        <Routes>
          {/* <Route path="/" element={<BrowsePage />} /> */}
         
        </Routes>
      </div>
    </div>
  )
}

export default App
