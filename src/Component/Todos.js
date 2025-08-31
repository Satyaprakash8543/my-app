import React, { useState } from "react";

import { MdDelete } from "react-icons/md";




const Todos=()=>{
    const[initial,setinitial]=useState();
    const[data, setData]=useState([]);

    const getInput=(event)=>{
        console.log(event.target.value);
        setinitial(event.target.value)
    }
 const getData = ()=>{
      console.log(initial);
      let store = [...data, initial]
     // setData(initial)
     setData(store)
     setinitial("")

    
 }
  const deleteTask=(index)=>{
    console.log(index);//0,1...
    let filterData= data.filter((curElem,id)=>{
        return id !== index
    })
    setData(filterData);
  };
  console.log(data)
    return(
        <>
         <div className="Container">
            <h1>To-Do List</h1>
            <div className="InputTask">
                <input type="text" placeholder="Enter your Task" value={initial} onChange={getInput}/>
                <button onClick={getData}>Add</button>
            </div>
            {data.map((curVal,index)=>{
                return(
                    <>
                    <div className="taskData">
                        <p>{curVal}</p>
                  
                       
                       <div id="deleteIcon" onClick={()=>deleteTask(index)}><MdDelete /></div>
                        
                    </div>
                    </>
                )
            })}
         </div>

        </>
    )
}
export default Todos