import React, { useState } from 'react'
import toast from 'react-hot-toast';

const AddTask = ({closeModal, getData}) => {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (data) => {
    data.preventDefault();
    console.log(title, description);
    const values = {title: title, description: description};
    const res = await fetch(`http://localhost:8000/api/addtask`, {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(values)
    })
    if(res.status === 201){
      console.log("Task Added")
      closeModal();
      getData();
      toast.success("Task Added");
    }else{
      console.log("Some Error Occured");
    }
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input type="text" placeholder="Title" name='title' className="input input-bordered input-primary w-full" onChange={(e) => setTitle(e.target.value)}/>
        <textarea className="textarea textarea-primary" name='description' placeholder="Description" onChange={(e) => setDescription(e.target.value)}></textarea>
        <div className='flex justify-between items-center'>
            <button type='reset' className="btn btn-neutral">Reset</button>
            <button type='submit' className="btn btn-primary">Add</button>
        </div>
    </form>
  )
}

export default AddTask