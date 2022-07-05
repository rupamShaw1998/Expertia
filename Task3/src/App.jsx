import './App.css'
import { Routes, Route } from "react-router-dom"
import { LandingPage } from './Components/LandingPage'
import {SearchResult} from './Components/SearchResult'
import {SearchDetails} from './Components/SearchDetails'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage/>}></Route>
        <Route path='/search/:job' element={<SearchResult/>}></Route>
        <Route path='/search/:job/:id' element={<SearchDetails/>}></Route>
      </Routes>
    </div>
  )
}

export default App;
