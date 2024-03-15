import React, { useEffect, useState } from 'react'
import { FaInfoCircle } from 'react-icons/fa';
import axios from 'axios';
const Table = () => {
    const [data,setData]=useState([]);
    useEffect(()=>{
fetchData();
   },[])
   const fetchData=async()=>{
    try{
       const response=await axios.get('https://intradayscreener.com/api/openhighlow/cash')
       setData(response.data);
    }catch(error){
console.log("Error");
    }
   } 
  return (
    <div style={{display:'inline-block',alignItems:'center',justifyContent:'center', textAlign:'center', width:'100%'}}>
    {/* <h2>Details</h2> */}
    <table style={{borderCollapse:'collapse',height:'950px'}} className='table'  >
     <tr className="heading">
     <th className='heading'>SYMBOL</th>
    <th className='heading'>LTP <FaInfoCircle /></th>
   <th className='heading' colSpan={2}>Momentum <FaInfoCircle /></th>
     <th className='heading'>OPEN <FaInfoCircle /></th>
    <th className='heading'>Deviation from Pivots <FaInfoCircle /></th>
    <th className='heading' >TODAYS RANGE <FaInfoCircle /></th>
    <th className='heading'>OHL <FaInfoCircle /></th>
     </tr>
 {data.map((data) => (
     <tr key = {data.index}>
     <td>{data.symbol}</td> 
     {/* symbol */}
     <td>{data.ltp}</td>
     {/* ltp */}
     <td>{data.open}</td>
     <td>{data.high}</td>
     {/* momnetum */}
     <td>{data.low}</td>
     <td> {data.high}-{data.open}   </td>
     {/* <td>{data.close}</td> */}
     <td>{data.change} <input type='range'/> {data.pctChange}</td>
     
     
     <td className='low'>{data.openHighLowSignal}</td>
     <td style={{ color: data.openHighLowSignal === 'Open=Low' ? 'red' : 'green' }}>{data.openHighLowSignal}</td>
 </tr>

 ))}
     

    </table>
     
 </div>
  )
}

export default Table;