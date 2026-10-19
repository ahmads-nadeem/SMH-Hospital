
import { useState } from 'react';
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
    const [loading, setLoading] = useState(false);
    const [report, setReport] = useState(null);
    const navigate = useNavigate();

    async function sendToServer() {
        if (!window.confirm('Are You Sure?')) return;

        setLoading(true);
        try {
            const api = (roll == 'doctor') ? '/doctors/add-patient' : '/users/add-store-patient';
            const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}${api}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    patientDetails: childData,
                    patientPurchses: childData2,
                }),
            });
            const result = await res.json();
            console.log('API:', api, 'RESPONSE:', result);

            if (result.message == 'success' && result.report) {
                setReport(result.report);
            } else {
                alert('something went wrong!');
            }
        } catch (err) {
            console.error(err);
            alert('Server error!');
        } finally {
            setLoading(false);
        }
    }

    function reset() {
        setReport(null);
        navigate('/');
    }

    if (report) {
        return (
            <div className='block text-center relative w-[80%] h-[80vh] rounded-2xl my-2% mx-auto bg-white text-green-600 font-bold font-sans'>
                <span onClick={reset} className='absolute top-2 right-3 font-bold text-black cursor-pointer hover:text-red-600'>X</span>
                <h2 className='mt-4 mb-2'>Patient Entry Added Successfully</h2>
                <AncRegisterPrint data={report} />
            </div>
        );
    }

    return (
        <>
            <Header />
            <PatientDetails onSendData={setChild} />
            {(roll == 'doctor')
                ? <DoctorPatients onSendData={setChild2} />
                : <MedicinSelection onSendData={setChild2} />}
            <div className='w-full'>
                <button
                    onClick={sendToServer}
                    disabled={loading}
                    className='block w-[90%] bg-blue-600 rounded-2xl text-white font-bold cursor-pointer hover:bg-blue-400 p-2 mx-auto -mt-17 mb-2.5 disabled:opacity-50'
                >
                    {loading ? 'Saving...' : 'Submit'}
                </button>
            </div>
        </>
    );
}

export default NewPatient;