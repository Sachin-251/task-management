import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { MdDeleteSweep } from "react-icons/md";

const Card = ({title, description, isCompleted, id, getData}) => {

  const [completed, setCompleted] = useState(isCompleted === 'true'? true : false);
  
  const handleUpdate = async () => {
    let data;
    if(completed){
      data = 'false';
    }else{
      data = 'true';
    }
    const result = await fetch(`http://localhost:8000/api/tasks/${id}`, {
      method: 'PUT',
      headers: {"CONTENT-TYPE": "application/json"},
      body: JSON.stringify({data})
    });

    if(result.status === 201){
      console.log("Updated")
      setCompleted(!completed)
    }else{
      console.log("Something went wrong");
    }
  }

  const handleDelete = async () => {
    const result = await fetch(`http://localhost:8000/api/tasks/${id}`, {
      method: 'DELETE'
    });

    if(result.status === 201){
      getData();
      toast.success("Task Deleted");
    }else{
      console.log("Something went wrong");
    }
  }

  return (
      <div className="xl:w-1/4 md:w-1/2 w-full p-4">
        <div className="bg-base-200 text-base-content flex flex-col justify-between gap-2 border-2 border-base-content shadow-xl p-6 h-full rounded-lg">
            <h2 className="text-2xl text-center font-bold mb-4">{title}</h2>
            <p>{description}</p>
            <div className="flex justify-between items-end mt-4">
                <label className="swap">
                    <input type="checkbox" checked={completed} onChange={handleUpdate}/>
                    <div className="swap-on btn btn-success rounded-full">Completed</div>
                    <div className="swap-off btn btn-error rounded-full">Incomplete</div>
                </label>
                <button className="btn btn-ghost hover:bg-transparent hover:scale-110" onClick={handleDelete}><MdDeleteSweep size={25} /></button>
            </div>
        </div>
    </div>
  )
}

export default Card