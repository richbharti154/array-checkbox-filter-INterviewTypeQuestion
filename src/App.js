import React from "react";
import {useState} from 'react'
const data=['apple','billy','orange','banna']
export default function App() {
  const[updateData,setUpdateData]=useState(data)
  const[show,setShow]=useState('')
  function handleCheckBox(ele){
    setShow(ele)
  }
  function handleDelete(ele){
    let data=updateData.filter((y)=>y!=ele)
    setUpdateData(data)
  }
  return (
    <div>
     {updateData.map((ele)=><div>
      <input type='checkbox'
      // id={ele}
      // value={ele}
      onClick={()=>handleCheckBox(ele)}/>
       {ele}
       {show==ele?<button onClick={()=>handleDelete(ele)}>Delete</button>:null}
     </div>)}
    </div>
  );
}
