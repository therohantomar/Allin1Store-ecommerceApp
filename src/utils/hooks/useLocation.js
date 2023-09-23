import { useEffect,useState }  from "react";
import { GEOLOCATION_LINK } from "../constants";

function useLocation(){
    const [location, setLocation]=useState({})

    useEffect(()=>{
        navigator.geolocation.getCurrentPosition((position)=>{
             fetch(`${GEOLOCATION_LINK}&lat=${position.coords.latitude}&lon=${position.coords.longitude}`).then(res=>res.json()).then(data=>{
                setLocation(data)
             })
           
    })},[])

    return location
}

export default useLocation
