import { useEffect, useState } from 'react';
import '../App.css'
import Header from '../components/Header';
import Table from '../components/Table';
function Patient() {

    // const [data3, setData] = useState({ patients: [], visits_patients: [] })
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
            <Table data={arr1} title={'All Patients'} />
            <Table data={arr2} title={'All Patients Visits'} />
        </>
    )
}
export default Patient;