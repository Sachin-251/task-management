import React, { useEffect } from 'react';
import Card from '../card/Card';
import { FaPlus } from "react-icons/fa";
import Modal from '../modal/Modal';
import AddTask from '../modal/AddTask';

const MainContent = ({theme, getData, data, modal, setModal, closeModal}) => {

  useEffect(() => {
    getData();
  },[])
  return (
    <section data-theme={theme} className="text-gray-600 body-font w-full mt-6 py-16">
      <div className="container px-5 py-8 mx-auto">
        <div className="flex flex-wrap -m-4">
          {
            data?.result?.map((task) => (
              <Card key={task.id} title={task.title} description={task.description} isCompleted={task.completed} id={task.id} getData={getData} />
            ))
          }

          <div className="xl:w-1/4 md:w-1/2 w-full p-4 animate-pulse">
            <div className="bg-base-200 text-base-content flex flex-col justify-center items-center gap-2 border-2 border-base-content shadow-xl p-6 h-full rounded-lg">
              {modal && (<Modal content={<AddTask closeModal={closeModal} getData={getData} />} closeModal={closeModal} />)}
              <button onClick={() => setModal(true)}><FaPlus className='border-2 border-dashed border-base-content rounded-lg w-20 h-20 p-6' size={30} /></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MainContent