import { ProductContext } from "../utilis/Context"
import { useContext } from "react"
import { Link } from "react-router-dom"

function Nav(){

  const [products]= useContext(ProductContext)

  let distinctCategory = products && products.reduce((acc , cv)=>[...acc,cv.category],[])
  distinctCategory=[...new Set(distinctCategory)]

    return(
        <nav className="w-[15%] h-screen bg-zinc-50 flex  flex-col items-center pt-5">
          <a className="py-3 px-5 border rounded border-blue-200 text-blue-300" href="/create">Add New Products</a>
          <hr className="w-[80%] my-3" />
          <h1 className="text-2xl mb-3 w-[80%]">Category Filter</h1>
          <div className=" w-[80%]">
            {distinctCategory.map((c , i)=>{
             return <Link to={`/?category=${c}`} key={i} className="mb-3 flex items-center">
              <span className="rounded-full mr-2  w-[15px] h-[15px] bg-blue-100"></span>
              {c}</Link>
            })}
            
            
            
          </div>
        </nav>
    )
}

export default Nav