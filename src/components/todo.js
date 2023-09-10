import React from 'react';
import {useState } from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addtodo} from '../actioncreators';
import { deletetodo } from '../actioncreators';
import { removeall } from '../actioncreators';


function Todo() {
    const [data,setdata]=useState("");
    const dispatch=useDispatch();
    const list=useSelector((state)=>state.todoreducers.todolist)
   // console.log(list)
  return (
    <>
    <div className='list'>
        <h1>LINE UP TASK</h1>
        <input 
        type="text" 
        placeholder='note down'
        onChange={(element) =>setdata(element.target.value)}
        />
      <button onClick={()=>dispatch(addtodo(data))}><span>+</span></button>
    </div>
    <div>
    {
      list.map((element)=>
      {
        return(
          <div className='listing'>
            <input
              type="text"
              placeholder={element.data}
              disabled
              />
        
            <button onClick={() => dispatch(deletetodo(element.id))}><span>X</span></button>
          </div>
        )
      })
    }
  </div>

  <div>
    
    <button className="remove" onClick={()=>dispatch(removeall())}>clear all</button>
    
  </div>
      


    </>
  )
}

export default Todo