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
            <section class="text-gray-600 body-font bg-slate-100">
                <div class="container py-24 mx-auto">
                    <div class="flex flex-col text-center w-full">
                        <h1 class="sm:text-4xl text-2xl font-medium title-font mb-16 text-gray-900">
                            Оказываем широкий спектр стоматологических услуг</h1>
                    </div>
                    <div class="flex flex-col md:flex-row">
                        <InspectionComponent />
                        <HugieneComponent />
                        <TreatmentComponent />
                        <SurgeryComponent />
                    </div>
                    <div class="flex flex-col md:flex-row">
                        <ParadontalComponent />
                        <ImplantationComponent />
                        <ProstheticsComponent />
                        <PricusComponent />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Descriptions;
