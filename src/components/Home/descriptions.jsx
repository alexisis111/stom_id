import React from 'react';
import InspectionComponent from './svgInfoComponent/inspectionComponent';
import HugieneComponent from './svgInfoComponent/hygieneComponent';
import TreatmentComponent from './svgInfoComponent/treatmentComponent';
import SurgeryComponent from './svgInfoComponent/surgeryComponent';
import ParadontalComponent from './svgInfoComponent/paradontalComponent';
import ImplantationComponent from './svgInfoComponent/implantationComponent';
import ProstheticsComponent from './svgInfoComponent/prostheticsComponent';
import PricusComponent from './svgInfoComponent/pricusComponent';


const Descriptions = () => {
    return (
        <div>
            {/* <div class="w-full bg-slate-50">
                <div className='bg-repeat flex flex-row opacity-20'>
                    <div className=" bg-[url('./assets/svgEL/1.svg')] w-[64px] h-[64px] skew-x-12"></div>
                    <div className="bg-[url('./assets/svgEL/2.svg')] w-[64px] h-[64px] skew-x-12"></div>
                    <div className="bg-[url('./assets/svgEL/3.svg')] w-[64px] h-[64px] skew-x-12"></div>
                    <div className="bg-[url('./assets/svgEL/4.svg')] w-[64px] h-[64px] skew-x-12"></div>
                    <div className="bg-[url('./assets/svgEL/5.svg')] w-[64px] h-[64px] skew-x-12"></div>
                    <div className="bg-[url('./assets/svgEL/6.svg')] w-[64px] h-[64px] skew-x-12"></div>
                    <div className="bg-[url('./assets/svgEL/7.svg')] w-[64px] h-[64px] skew-x-12"></div>
                    <div className="bg-[url('./assets/svgEL/8.svg')] w-[64px] h-[64px] skew-x-12"></div>
                    <div className="bg-[url('./assets/svgEL/9.svg')] w-[64px] h-[64px] skew-x-12"></div>
                </div>
            </div> */}
            <div className="bg-[url('./assets/Screenshot_1.jpg')] -mb-10">
                <section class="text-gray-600 body-font">
                    <div class="container py-10 mx-auto">
                        <div class="text-center">
                            <h1 class="sm:text-4xl text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-my to-blue-500 pb-10 underline decoration-my">
                                Оказываем широкий спектр стоматологических услуг</h1>
                        </div>
                        <div class="flex flex-col md:flex-row ">
                            <InspectionComponent />
                            <HugieneComponent />
                            <TreatmentComponent />
                            <SurgeryComponent />
                        </div>
                        <div class="flex flex-col md:flex-row ">
                            <ParadontalComponent />
                            <ImplantationComponent />
                            <ProstheticsComponent />
                            <PricusComponent />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Descriptions;
