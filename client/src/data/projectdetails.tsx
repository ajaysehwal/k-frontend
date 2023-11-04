import Host from "../components/Secret/serverapi"
import { useState,useEffect } from "react"
import axios from "axios"
export const Commercial=()=>{
    const [data,setdata]=useState<string[]>([]);
    const getdata=async()=>{
     try{
        const res=await axios.get(`${Host()}/projectimages-commercial`);
        setdata(res.data.commercial);
     }catch(err){
         return err
     }
    }
    useEffect(()=>{
        getdata();
    },[])
   return data;
}

export const Institiutional=()=>{
    const [data,setdata]=useState<string[]>([]);
    const getdata=async()=>{
     try{
        const res=await axios.get(`${Host()}/projectimages-institiutional`);
        setdata(res.data.institiutional);
     }catch(err){
         return err
     }
    }
    useEffect(()=>{
        getdata();
    },[])
   return data;
}
export const Interior=()=>{
    const [data,setdata]=useState<string[]>([]);
    const getdata=async()=>{
     try{
        const res=await axios.get(`${Host()}/projectimages-Interior`);
        setdata(res.data.interior);
     }catch(err){
         return err
     }
    }
    useEffect(()=>{
        getdata();
    },[])
   return data;
}

export const Landscape=()=>{
    const [data,setdata]=useState<string[]>([]);
    const getdata=async()=>{
     try{
        const res=await axios.get(`${Host()}/projectimages-landscape`);
        setdata(res.data.landscape);
     }catch(err){
         return err
     }
    }
    useEffect(()=>{
        getdata();
    },[])
   return data;
}
export const Residentional=()=>{
    const [data,setdata]=useState<string[]>([]);
    const getdata=async()=>{
     try{
        const res=await axios.get(`${Host()}/projectimages-residentional`);
        setdata(res.data.residentional);
     }catch(err){
         return err
     }
    }
    useEffect(()=>{
        getdata();
    },[])
   return data;
}
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