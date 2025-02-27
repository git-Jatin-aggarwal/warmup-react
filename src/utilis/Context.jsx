import Axios from "./Axios"
import { createContext, useEffect, useState } from "react"

export const ProductContext = createContext()

function Context(props){
    const [products, setproducts] = useState(null)
     const getproducts = async ()=>{
        try {
            const {data} =await Axios("/products")
            setproducts(data)
         } catch (error) {
            console.log(error)
        }
     }

     useEffect(()=>{
        getproducts()
     },[])
    return<>
       <ProductContext.Provider value={[products, setproducts]}>
      {props.children}
      </ProductContext.Provider>
    </>
}
export default Context