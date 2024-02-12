import React from 'react'

const Modal = ({content, closeModal}) => {

  return (
    <div className='fixed top-0 left-0 w-full h-screen z-50 flex justify-center items-center'>
        <div className='absolute top-0 left-0 w-full h-screen bg-[#00000073] blur-lg' onClick={closeModal}></div>
        <div className={`my-0 mx-4 p-8 relative max-w-[630px] w-full z-50 bg-base-200 text-base-content border-2 border-base-content shadow-xl rounded-xl`}>{content}</div>
    </div>
  )
}

export default Modal