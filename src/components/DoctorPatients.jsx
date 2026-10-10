import React from 'react'
import "../App.css";
import { useState } from 'react';

export default function DoctorPatients( servicesData ) {
    const options = ['Ultrasound', 'CheckUp'];
    console.log(servicesData);
    // console.log("this is data");
    

    const [selectedOptions, setSelectedOptions] = useState([]);

    const toggleOption = (option) => {
        setSelectedOptions((prevSelected) =>
            prevSelected.includes(option)
                ? prevSelected.filter((item) => item !== option) // Remove if already selected
                : [...prevSelected, option] // Add if not selected
        );
    };

    return (
        <section className='w-full'>
            <div className="w-[94.5%] h-[50vh] bg-white m-auto mt-5 mb-5 rounded-lg">
                <div className="flex justify-center items-center border-b-2 border-gray-400">
                    <h2 className='text-[20px] font-bold pt-2.5 pb-2.5'>Select Services</h2>
                </div>
                <form className='flex h-[80%]' action="">
                    <div className='w-[50%] h-full' >
                        {options.map((option) => {
                            const isSelected = selectedOptions.includes(option);
                            return (
                                <button
                                    key={option}
                                    type="button"
                                    onClick={() => toggleOption(option)}
                                    className={`cursor-pointer m-5 px-4 py-2 rounded-lg font-medium border transition-colors ${isSelected
                                        ? 'bg-blue-600 text-white border-blue-600'
                                        : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200'
                                        }`}
                                >
                                    {isSelected ? '✓ ' : '+ '}
                                    {option}
                                </button>
                            );
                        })}
                    </div >
                    <div className="w-[50%] border-l-2 border-gray-400">
                        <div className=''>
                            <div className="">
                                <ul className='p-5 pl-[20%]'>
                                    {selectedOptions.map((value, index) => {
                                        return (<li key={index}>{value}:{ }</li>);
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>


                </form>
            </div>
        </section>
    )
}
