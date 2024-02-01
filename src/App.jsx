import "./app.scss"
import Home from "./home/Home";
import './App.css'
import { BrowserRouter as Router,  Routes, Route } from "react-router-dom";
import Cast_api from './pages/detail/cast_api'
import Login from './pages/login/login' 
import "./app.scss"
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";
import Featured from "./components/featured/Featured";


const App = () => {


  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/detail' element={<Cast_api />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/watch' element={<Watch />}></Route>
          <Route path='/feautred' element={<Featured />}></Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App
