import { Link, useLocation } from "react-router-dom";
import Nav from "./Nav";
import { useContext, useEffect, useState } from "react";
import {ProductContext} from "../utilis/Context"
import Loading from "./Loading"
import axios from "../utilis/Axios"
function Home(){

  const [products]= useContext(ProductContext)
  const {search} = useLocation()

  const category = decodeURIComponent(search.split("=")[1])
const[filterproducts , setfilterproducts] = useState(null)
  const getcategoryproduct = async ()=>{
    try {
      const response = await axios(`/products/category/${category}`)
      setfilterproducts(response.data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    if (!filterproducts || category === "undefined") setfilterproducts(products)
    if (category != "undefined") getcategoryproduct();
  },[category, products])


    return(products ?<>
    
    
    <Nav/>
    <div className=" w-[85%] p-10 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto">
      {filterproducts && filterproducts.map((p, i)=>{
      return <Link key={p.id} to={`/details/${p.id}`} className="card p-5 border w-[18%] h-[30vh] shadow mr-3 mb-3 rounded flex justify-center items-center flex-col">

           <div className="hover:scale-110 mb-3 w-full h-[80%] bg-contain bg-no-repeat bg-center" style={{backgroundImage: `url(${p.image})`}}></div>
              <h1 className="hover:text-blue-300">{p.title}</h1>
              </Link>
      })}

        
      </div>
      </>:< Loading/>)
}

export default Home