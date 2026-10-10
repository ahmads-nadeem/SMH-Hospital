import { useEffect, useState } from 'react';
import '../App.css'
import Header from '../components/Header';
import Table from '../components/Table';
export default function Reports() {

    // const [data3, setData] = useState({ patients: [], visits_patients: [] })
    const [activeTab, setTab] = useState("normal")
    const [arr1, setArr] = useState([])
    const [arr2, setArr2] = useState([])
    useEffect(() => {
        async function api() {
            const data = await fetch(`${import.meta.env.VITE_API_BASE_URL}/users/doctor/patientsTables`);
            const res = await data.json();
            setArr(res.patients)
            setArr2(res.visits_patients)
        }
        api();
    }, []);
    return (
        <>
            <Header />
            <div className="flex justify-around w-120 bg-white mx-auto mt-10 p-2 rounded-2xl">
                <button onClick={() => setTab("normal")} className={`${activeTab == "normal" ? 'font-bold' : ''} w-40 bg-purple-500 p-2 text-white rounded-2xl cursor-pointer`}>Normal Reports</button>
                <button onClick={() => setTab("opd")} className={`${activeTab == "normal" ? '' : 'font-bold'} w-50 bg-purple-500 p-2 text-white rounded-2xl cursor-pointer`}>OPD</button>
            </div>
            {activeTab == 'normal' ? (
                <section>
                    <Table data={arr1} title={'All Patients'} />
                    <Table data={arr2} title={'All Patients Visits'} />
                </section>

            ) : (
                <h2>this is opd</h2>
            )}


        </>
    )
}
// export default Patient;