import "../App.css";
import { useEffect, useState } from 'react';

export default function DoctorPatients({onSendData}) {
    // sendMedicineDetails
    const [search, setSearch] = useState('');
    const [services, setServices] = useState([]);
    const [medicines, setMedicines] = useState([]);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [selectedMedicines, setSelectedMedicines] = useState([]);

    useEffect(()=>{
        const object = {
            medicine:selectedMedicines,
            service: selectedOptions
        }
        onSendData(object)
    }, [selectedMedicines, selectedOptions])
    useEffect(() => {
        const fetchServices = async () => {
            try {
                const reqServices = await fetch(`${import.meta.env.VITE_API_BASE_URL}/doctors/services`);
                const res = await reqServices.json();
                setServices(res.fetchedServices);
            } catch (error) {
                console.error("Error fetching services:", error);
            }
        };
        fetchServices();
    }, []);

    async function searchMedicine(medName) {
        if (!search) {
            setMedicines([])
            return
        }
        const reqMedicin = await fetch(`${import.meta.env.VITE_API_BASE_URL}/users/search-medicin?medicin=${medName}`)
        const response = await reqMedicin.json()
        setMedicines(response.result)
    }
    useEffect(() => {
        const timer = setTimeout(() => {
            searchMedicine(search);
        }, 500);
        return () => clearTimeout(timer);
    }, [search]);

    const toggleOption = (option) => {
        setSelectedOptions((prevSelected) =>
            prevSelected.includes(option)
                ? prevSelected.filter((item) => item !== option) // Remove if already selected
                : [...prevSelected, option] // Add if not selected
        );
    };
    function addMedicine(value) {
        const check = selectedMedicines.filter(obj=> obj.productId == value.productId )
        if(check.length == 0)
        setSelectedMedicines([...selectedMedicines, value])
    }
    function removeMedicine(value){
        const dontRemove = selectedMedicines.filter(obj=> obj.productId !== value.productId )
        setSelectedMedicines([...dontRemove])
    }

    return (<>

        {
            services.length !== 0 ? (
                < section className='w-full' >
                    <div className="w-[94.5%] h-[90vh] bg-white m-auto mt-5 mb-5 rounded-lg">
                        <div className="flex justify-center items-center border-b-2 border-gray-400">
                            <h2 className='text-[20px] font-bold pt-2.5 pb-2.5'>Select Services</h2>
                        </div>
                        <form className='flex h-[80%]' action="">
                            <div className='w-[50%] h-full flex flex-col' >
                                <div>
                                    {services.map((option) => {
                                        const isSelected = selectedOptions.includes(option.service);
                                        return (
                                            <button
                                                key={option.id}
                                                type="button"
                                                onClick={() => toggleOption(option.service)}
                                                className={`cursor-pointer m-5 px-4 py-2 rounded-lg font-medium border transition-colors ${isSelected
                                                    ? 'bg-blue-600 text-white border-blue-600'
                                                    : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200'
                                                    }`}
                                            >
                                                {isSelected ? '✓ ' : '+ '}
                                                {option.service}
                                            </button>
                                        );
                                    })}
                                </div>
                                <div>
                                    <ul className='p-5 pl-4%]'>
                                        {selectedMedicines.map((value, index) => {
                                            return (
                                                <li className="w-full my-1 font-bold flex justify-between px-10 bg-gray-400 p-2" key={value.productId}>
                                                    <div>{value.category.toUpperCase()}</div>
                                                    <div>{value.productName.toUpperCase()}</div>
                                                    <div>{value.power.toUpperCase()}</div>
                                                    <span onClick={()=>removeMedicine(value)} className="cursor-pointer hover:text-white">X</span>                                                    
                                                </li>);
                                        })}
                                    </ul>
                                </div>
                            </div >
                            <div className="w-[50%] border-l-2 border-gray-400">
                                <div className=''>
                                    <div className=" p-4">
                                        <input className="w-[50%] block outline-0 mx-auto p-2 rounded-2xl border-2 border-purple-500" value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search Medicine" />
                                    </div>
                                    <div className="flex justify-between px-4 font-bold">
                                        <h3>Type</h3>
                                        <h3>Name</h3>
                                        <h3>Formula</h3>
                                        <h3>Power</h3>
                                    </div>
                                    <div className="p-2">
                                        {
                                            medicines.length !== 0 ? (
                                                <ul>
                                                    {
                                                        medicines.map((value, index) => {
                                                            return <li className="bg-pink-400 p-2 text-white font-bold flex justify-between mx-2 hover:bg-gray-400 cursor-pointer" onClick={() => addMedicine(value)} key={value.productId}><span>{value.category.toUpperCase()}</span><span>{value.productName.toUpperCase()}</span><span>{value.formula.toUpperCase()}</span> <span>{value.power}</span></li>
                                                        })
                                                    }
                                                </ul>
                                            )
                                                :
                                                (
                                                    <>
                                                        <p className="px-2.5">You are not suggested any medicine yet!</p>
                                                    </>

                                                )
                                        }
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div >
                </section >)
                :
                (
                    <div>loading</div>
                )
        }

    </>)
}