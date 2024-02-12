import React from 'react'
import ThemeToggler from '../themeToggler/ThemeToggler'
import Modal from '../modal/Modal'
import { FaPlus } from "react-icons/fa";
import AddTask from '../modal/AddTask';

const Navbar = ({theme, setTheme, modal, setModal, closeModal, getData}) => {
  return (
    <div className="navbar bg-warning text-warning-content px-4 md:px-14 fixed z-10 top-0">
        <div className="navbar-start">
            <a className="btn btn-ghost text-xl font-bold">PRIORITA</a>
        </div>
        {modal && (
          <Modal content={<AddTask closeModal={closeModal} getData={getData} />} closeModal={closeModal} />
        )}
        
        <div className="navbar-end gap-2 md:gap-8">
            <div className='tooltip tooltip-bottom' data-tip='Add Task'>
                <button className="btn btn-ghost border-2 border-neutral btn-circle" onClick={() => setModal(true)}><FaPlus className='animate-pulse' size={18} /></button>
            </div>
            
            <ThemeToggler theme={theme} setTheme={setTheme} />
        </div>
    </div>
  )
}

export default Navbar