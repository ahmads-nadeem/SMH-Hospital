import './medicinSelection.css';
import { useEffect, useState } from 'react';

function MedicinSelection() {
    let [medicinSelected, updateMedicin] = useState(null)
    const medicines = [
            "Panadol",
            "Calpol",
            "Brufen",
            "Augmentin",
            "Flagyl",
            "Ponstan",
            "Disprin",
            "Arinac",
            "Cac1000",
            "Zyrtec",
            "Rigix",
            "Ventolin",
            "Nuberol",
            "Nims",
            "Diclowin",
            "Paracetamol",
            "Ibuprofen",
            "Amoxil",
            "Clavam",
            "Klaricid",
            "Moxiget",
            "Ciproxin",
            "Fexet",
            "Loprin",
            "Lipiget",
            "Glucophage",
            "Diamicron",
            "Neuromet",
            "SurbexZ",
            "OneAlpha",
            "Evion",
            "Ferosoft",
            "Sangobion",
            "Omeprazole",
            "Nexum",
            "Risek",
            "Gaviscon",
            "Buscopan",
            "Imodium",
            "ORS",
            "Betnesol",
            "Hydrocortisone",
            "Cetirizine",
            "Loratadine",
            "Telfast",
            "Actifed",
            "Coartem",
            "Malarone",
            "Xyzal",
            "Azomax"
        ];
        const [search, setSearch] = useState('')
        const [matched, setMatch] = useState([])
        function searchUpdating(e) {
            setSearch(e.target.value)
        }
        useEffect(() => {
            apiChecking(medicines, search)
        }, [search])
        function apiChecking(medicines, search) {
            let list = medicines.filter((filersData) => {
                if (!search.trim()) return false;
                return filersData.toLowerCase().includes(search.toLowerCase())
            })
            setMatch(list)
        }
        // selected data system
        let [selectedMedicin, setMedicin] = useState([])
        function selectMedicin(value) {
            if (!selectedMedicin.includes(value)) {
                setMedicin([...selectedMedicin, value])
            }
        }
        function subtractFromCalculate(index) {
            let newArray = [...selectedMedicin];
            newArray.splice(index, 1)
            setMedicin(newArray)
        }

    return (
        <section id='medicin-section'>
            <div className="medicin-selection-div">
                <div className="search-bar">
                    <input type="text" value={search} onChange={searchUpdating} placeholder='Search Medicines here' />
                </div>
                <div className="status">
                    <h3>Name</h3>
                    <h3>Power</h3>
                    <h3>Availability</h3>
                    <h3>Catagery</h3>
                </div>
                <div className="medicin-lists">
                    <ul>
                        {matched.length !== 0 ?
                            matched.map((value, index) => {
                                return <li onClick={() => selectMedicin(value)} key={index}>{value}</li>
                            })
                            :
                            <li>Nothing you search</li>
                        }
                    </ul>
                </div>
            </div>
            <div className="calculate">
                <div className="calculateheading">
                    <h2>Selected Medicines</h2>
                </div>
                <div className="listofselectedmad">
                    <ul>
                        {
                            selectedMedicin.length !== 0 ?
                                selectedMedicin.map((value, index) => {
                                    return (
                                        <li key={index}>{index + 1}. {value}
                                            <input className='quantityInput' type="number" placeholder='Tabs' />
                                            <input className='quantityInput extraLeft' type="number" placeholder='Boxes' />
                                            <button onClick={() => subtractFromCalculate(index)}>X</button>
                                        </li>
                                    )
                                })
                                :
                                <p>select medicins</p>
                        }
                    </ul>
                </div>
                <div className="buttonsforclear">
                    <button onClick={() => setMedicin([])}>Clear</button>
                </div>
            </div>
        </section>
    )
}
export default MedicinSelection;