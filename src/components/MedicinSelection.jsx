import './MedicinSelection.css';
import '../App.css'
import { useEffect, useState } from 'react';
function MedicinSelection({onSendData}) {
    const spanCss = 'w-38 text-center'
    const [search, setSearch] = useState('')
    const [matched, setMatch] = useState([])
    const [selectedMedicine, setMedicine] = useState([])
    useEffect(()=>{
        onSendData(selectedMedicine)
    }, [selectedMedicine])
    async function searchMedicin(medName) {
        const reqMedicin = await fetch(`${import.meta.env.VITE_API_BASE_URL}/users/search-medicin?medicin=${medName}`)
        const response = await reqMedicin.json()
        setMatch(response.result)
    }
    useEffect(() => {
        if (!search) return;
        const timer = setTimeout(() => {
            searchMedicin(search);
        }, 100);
        return () => clearTimeout(timer);
    }, [search]);

    function selectedMedicinefun(value) {
        const isExist = selectedMedicine.some(medicine => medicine.productId == value.productId)
        if (!isExist) {
            setMedicine([...selectedMedicine, value])
        }
    }
    const grandTotal = selectedMedicine.reduce((total, item) => {
        const itemPrice = item.tabs ? (item.tabs * item.sellprice) : (item.boxes || 0) * (item.boxprice || 0);
        return total + (itemPrice || 0);
    }, 0);

    function isCompelete() {
        alert('clicked')
        const isValid = selectedMedicine.filter(item => {
            const hasTabs = item.tabs !== undefined && item.tabs !== '' && item.tabs !== 0;
            const hasBoxes = item.boxes !== undefined && item.boxes !== '' && item.boxes !== 0;
            return hasTabs || hasBoxes;
        });

        // const isValide = selectedMedicine.map((item, index)=>{
        //     return (item.tabs !== '' || item.boxes !== '' ? true : false)
        // })
        // setValidation(isValide[0]);
        console.log(isValid)
        console.log(isValid.length !== 0);
        selectedMedicine.map((value, index) => {
            console.log(value.boxes, value.tabs);

        })
    }

    function updateQuantity(id, field, newValue) {
        setMedicine(prevMedicines =>
            prevMedicines.map(item => {
                if (item.productId === id) {
                    return {
                        ...item,
                        [field]: newValue === '' ? '' : Number(newValue),
                        [field === 'tabs' ? 'boxes' : 'tabs']: ''
                    };
                }
                return item;
            })
        );
    }
    function subtractFromCalculate(id) {
        const filterArry = selectedMedicine.filter(obj => obj.productId !== id)
        setMedicine([...filterArry])
    }
    const tableHeading = 'w-35 text-2xl'
    return (
        <section id='medicin-section'>
            <div className=" w-[100%] h-[80vh] bg-white"> {/*medicin-selection-div*/}
                <div className="search-bar">
                    <input className='inline-block p-5 ' type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Search Medicines here' />
                </div>
                <table className='w-[100%]'>
                    <thead className='w-[100%] flex justify-center'>
                        <tr className='w-[100%] flex justify-between '>
                            <th className={tableHeading}>Name</th>
                            <th className={tableHeading}>Formula</th>
                            <th className={tableHeading}>Price</th>
                            <th className={tableHeading}>Power</th>
                            <th className={tableHeading}>Availability</th>
                            <th className={tableHeading}>Category</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            matched.length !== 0 ?
                                matched.map((value, index) => {
                                    return <tr className='w-[100%] font-bold text-[17px] bg-blue-300 flex justify-between cursor-pointer hover:bg-blue-400' onClick={() => selectedMedicinefun(value)} key={index}>
                                        <td className={spanCss}>{value.productName.toUpperCase()}</td>
                                        <td className={spanCss}>{value.formula.toUpperCase()}</td>
                                        <td className={spanCss}>{value.sellprice.toFixed(2)}</td>
                                        <td className={spanCss}>{value.power.toUpperCase()}</td>
                                        <td className={spanCss}>{value.nopiec}</td>
                                        <td className={spanCss}>{value.category.toUpperCase()}</td>
                                    </tr>
                                })
                                :
                                <tr><td>Nothing you search</td></tr>
                        }
                    </tbody>
                </table>
            </div>
            <div className="calculate w-180 mt-5">
                <div className="calculateheading">
                    <h2 className='font-bold text-50 text-center py-5'>Selected Medicines</h2>
                </div>
                <div className='w-[100%] flex justify-around px-3'>
                    <span>No</span>
                    <span>Name</span>
                    <span>Catagory</span>
                    <span>Price</span>
                    <span>Tabs</span>
                    <span>Boxes</span>
                    <span>Calculated Price</span>
                    <span></span>
                </div>
                <div className="listofselectedmad">
                    <ul>
                        {
                            selectedMedicine.length !== 0 ?
                                selectedMedicine.map((value, index) => {
                                    return (
                                        <li className='text-white flex justify-around items-center' key={value.productId}>
                                            <span>{index + 1}.</span>
                                            <span>{value.productName}</span>
                                            <span>{value.category}</span>
                                            <span>{value.sellprice.toFixed(2)}</span>
                                            <input className='text-black [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none inline-block w-17 h-6 p-2 bg-white placeholder-gray-400' type="number" placeholder='Tabs'
                                                value={value.tabs || ''}
                                                onChange={(e) => updateQuantity(value.productId, 'tabs', e.target.value)}
                                            />
                                            <input className='text-black [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none inline-block w-17 h-6 p-2 bg-white placeholder-gray-400' type="number" placeholder='Boxes'
                                                value={value.boxes || ''}
                                                onChange={(e) => updateQuantity(value.productId, 'boxes', e.target.value)}
                                            />
                                            <span>{(value.tabs ? value.tabs * value.sellprice : value.boxes * value.boxprice || 0).toFixed(2)}</span>
                                            <button className='flex items-center justify-center rounded-full w-8 h-8 bg-white text-black cursor-pointer'
                                                onClick={() => subtractFromCalculate(value.productId)}>
                                                X
                                            </button>
                                        </li>
                                    )
                                })
                                :
                                <li className='text-center text-white'>Nothing is Selected</li>
                        }
                    </ul>
                </div>
                <div className="buttonsforclear">
                    <button className='bg-white p-2 rounded-2xl cursor-pointer' onClick={() => setMedicine([])}>Clear</button>
                </div>
            </div>
            <div className="w-100 mt-5 bg-white rounded-4xl relative">
                <div className="calculateheading">
                    <h2 className='font-bold text-2xl text-center p-2'>Selected Items Summary</h2>
                </div>
                <div className="listofselectedmad">
                    <ul>
                        {
                            selectedMedicine.length !== 0 ?
                                selectedMedicine.map((values, index) => {
                                    return (
                                        <li className='flex justify-around font-bold text-white' key={index}>
                                            <span>{index + 1}.</span>
                                            <span>{values.category}</span>
                                            <span>{values.productName}</span>
                                            <span>{(values.tabs ? values.tabs * values.sellprice : values.boxes * values.boxprice || 0).toFixed(2)}</span>
                                        </li>
                                    )
                                })
                                :
                                <li className='text-center'>Nothing is Select</li>
                        }
                    </ul>
                </div>
                <h3 onClick={() => isCompelete()} className='w-50 text-center absolute bottom-5 right-25 p-2 rounded-2xl bg-green-400 cursor-pointer'>Grand Total: {grandTotal.toFixed(2)}</h3>
            </div>
        </section>
    )
}
export default MedicinSelection;