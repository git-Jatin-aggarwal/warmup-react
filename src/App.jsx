import Details from "./components/Details"
import Home from "./components/Home"
import {Routes,Route} from "react-router-dom"


function App() {

  return (
    <>
      <div className="h-screen w-screen flex">

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/details/:id" element={<Details/>}/>
        </Routes>

        
      </div>
    </>
  )
}

export default App
