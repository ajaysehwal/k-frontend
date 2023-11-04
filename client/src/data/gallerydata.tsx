import Host from "../components/Secret/serverapi"
import { useState,useEffect } from "react"
import axios from "axios"
export const All=()=>{
    const [data,setdata]=useState<string[]>([]);
    const getdata=async()=>{
     try{
        const res=await axios.get(`${Host()}/projectimages-all`);
        setdata(res.data.all);
     }catch(err){
         return err
     }
    }
    useEffect(()=>{
        getdata();
    },[])
   return data;
}