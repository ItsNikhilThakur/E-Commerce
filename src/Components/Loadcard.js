import { useEffect, useState } from "react";
import CategoryOne from "./CategoryOne";
import { Flex } from "antd";

const Loadcard=()=>
{

    let[data,setData]=useState([]);

    const Urlfetch=()=>
    {
    fetch("https://fakestoreapi.com/products")
     .then((res)=>res.json() )
     .then((temp)=> setData(temp))
     .catch((e)=> console.log("erro"))
    }


    useEffect(()=>{
        Urlfetch()
    },[])


    return(<>
    <div style={{display: 'flex'}}>
{

    data.length?    data.map((e)=> <CategoryOne title={e.title} id={e.id} />) : <h1>null</h1>
}
 
</div>
    </>)

}
export default Loadcard;