
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Navbar, Footer, ArticleForm, ProjectForm } from './component'
import { Home, Dashboard ,SignIn,SignUp} from './pages'




import './App.css'

const App = () => {
  return (
    <>
      <Navbar />

  

   <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/signin" element={<SignIn />}/>
        <Route path="/signup" element={<SignUp />}/>


        <Route path="dashboard" element={<Dashboard />} >
        <Route path="articleform" element={<ArticleForm />} />
        <Route path="projectform" element={<ProjectForm />} />
        </Route>

      
      </Routes>


  
    
      

      <Footer />
    </>
  )
}

export default App
