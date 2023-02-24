import React, { useState } from 'react';
import Prosthetics from '../../../assets/svgImages/prosthetics';
import Modal from '../../modal/modal';
import ProstheticsModal from './modalInComponent/prostheticsModal';
const ProstheticsComponent = () => {

    const [modalActive, setModalActive] = useState(false);
    const handleOnClose = () => setModalActive(false)


    return (
        <>
            <Modal onClose={handleOnClose} active={modalActive}>
                <ProstheticsModal />
            </Modal>
            <div class="m-2 group basis-1/2">
                <div class="ring-2 ring-blue-500/50 p-6 rounded-md shadow-lg hover:bg-teal-300 text-center">
                    <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-400 group-hover:bg-indigo-500 text-indigo-500 mb-4 ">
                        <Prosthetics />
                    </div>
                    <h2 class="text-lg text-gray-900 font-semibold title-font mb-2 group-hover:text-white">Протезы</h2>
                    <button onClick={() => {
                        setModalActive(true)
                    }} className='leading-relaxed text-base group-hover:text-white open_btn underline underline-offset-1'>Узнать больше</button>
                </div>
            </div>
        </>
    );
}

export default ProstheticsComponent;
