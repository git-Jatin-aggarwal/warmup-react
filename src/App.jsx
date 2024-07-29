import Details from "./components/Details"
import Home from "./components/Home"
import {Routes,Route, Link, useLoaderData, useLocation} from "react-router-dom"


function App() {
       const {search , pathname}=  useLocation()
  return (
    <>
      <div className="h-screen w-screen flex">


        {(pathname !="/" || search.length>0) &&( 
        <Link className="absolute text-red-300 left-[18%] top-[6%]" to="/">Home
        </Link>)}

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/details/:id" element={<Details/>}/>
        </Routes>

        
      </div>
    </>
  )
}

export default App
