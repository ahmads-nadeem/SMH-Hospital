import { useEffect, useState } from 'react';
import '../App.css'
import Header from '../components/Header';
import MedicinSelection from '../components/MedicinSelection';
import PatientDetails from '../components/PatientDetails';
import DoctorPatients from '../components/DoctorPatients'
import { useSelector } from 'react-redux';
function NewPatient() {
    const roll = useSelector((store) => store.setUser.userRoll)
    const [childData, setChild] = useState({});
    const [childData2, setChild2] = useState({});
    const FromChild = (data) => {
        setChild(data);
    };
    const FromChild2 = (data) => {
        setChild2(data);
    };
    
    async function billApi(sendData) {
        const api = (roll == 'doctor')? '/doctors/add-patient' : '/users/add-store-patient'
        const sendBill = await fetch(`${import.meta.env.VITE_API_BASE_URL}${api}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(sendData)
        })
        const response = await sendBill.json()
    }
    async function sendToServer() {
        alert('clicked')
        const payload = {
            patientDetails:childData, 
            patientPurchses:childData2
        }
        await billApi(payload)
        console.log(childData);
        
    }
    return (
        <>
            <Header />
            <PatientDetails onSendData={FromChild} />
            {
                (roll == 'doctor') ? <DoctorPatients onSendData={FromChild2} /> : <MedicinSelection onSendData={FromChild2} />
            }
            <div className='w-full'>
                <button onClick={() => sendToServer()} className='block w-300 bg-blue-600 rounded-2xl text-white font-bold cursor-pointer hover:bg-blue-400 p-2 mx-auto -mt-10 mb-2.5'>Submit</button>
            </div>
        </>
    )
}
export default NewPatient;






// async function sendPatient() {
//     const patientSend = await fetch(
//         'http//localhost:1190/user/',
//         {
//             method: "post",
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 name: 'Ahmad',
//                 age: 22
//             })
//         }
//     )
// }