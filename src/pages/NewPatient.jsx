import { useEffect, useState } from 'react';
import '../App.css'
import Header from '../components/Header';
import MedicinSelection from '../components/MedicinSelection';
import PatientDetails from '../components/PatientDetails';
import DoctorPatients from '../components/DoctorPatients'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AncRegisterPrint from '../components/AncRegisterPrint';
function NewPatient() {
    const roll = useSelector((store) => store.setUser.userRoll)
    const [childData, setChild] = useState({});
    const [childData2, setChild2] = useState({});
    const [status, setStatus] = useState(false);
    const navigate = useNavigate();
    const FromChild = (data) => {
        setChild(data);
    };
    const FromChild2 = (data) => {
        setChild2(data);
    };

    async function billApi(sendData) {
        const api = (roll == 'doctor') ? '/doctors/add-patient' : '/users/add-store-patient'
        const sendBill = await fetch(`${import.meta.env.VITE_API_BASE_URL}${api}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(sendData)
        })
        const response = await sendBill.json()
        if (response.message == 'success'){
            setStatus(true)
        }
        else{
            alert('something went wrong!')
        }
    }
    async function sendToServer() {
        alert('Are You Sure')
        setStatus('loading')
        const payload = {
            patientDetails: childData,
            patientPurchses: childData2
        }
        await billApi(payload)
    }
    function reset(value){
        setStatus(value)
        navigate('/');
    }
    return (
        status?(
        <>
            <div className='relative w-[80%] h-[80vh] rounded-2xl my-2% mx-auto bg-white text-green-600 font-bold font-sans'>
                <span onClick={()=>reset(false)} className='absolute top-2 right-3 font-bold text-black cursor-pointer hover:text-red-600'>X</span>
                <h2>Patient Entry Added Successfully</h2>
                <AncRegisterPrint/>
            </div>
        </>)
        :(
        <>
            <Header />
            <PatientDetails onSendData={FromChild} />
            {
                (roll == 'doctor') ? <DoctorPatients onSendData={FromChild2} /> : <MedicinSelection onSendData={FromChild2} />
            }
            <div className='w-full'>
                <button onClick={() => sendToServer()} className='block w-300 bg-blue-600 rounded-2xl text-white font-bold cursor-pointer hover:bg-blue-400 p-2 mx-auto -mt-10 mb-2.5'>Submit</button>
            </div>
        </>)

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