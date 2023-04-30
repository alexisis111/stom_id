import React from 'react';

export default function Modal({ active, onClose, children }) {
    const handleOnClose = () => {
        onClose()
    }

    if (!active) return null
    return (
        <>
            <div onClick={handleOnClose} className='modal fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm overflow-y-auto '>
                <button onClick={onClose} className='fixed top-10 right-10 '>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-teal-300">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>

                </button>
                <div onClick={e => e.stopPropagation()} className="bg-white m-4  mx-auto p-4 rounded-md w-5/6 h-auto ">
                    <div className="flex justify-center items-center ">
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
}

