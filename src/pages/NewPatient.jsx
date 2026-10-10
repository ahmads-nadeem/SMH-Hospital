import { useEffect, useState } from 'react';
import '../App.css'
import Header from '../components/Header';
import MedicinSelection from '../components/MedicinSelection';
import PatientDetails from '../components/PatientDetails';
import DoctorPatients from '../components/DoctorPatients'
function NewPatient() {
    const [roll, setRoll] = useState('');
    const [patients, setPatients] = useState();
    const [details, setDetails] = useState();
    const FromChild1 = (data) => {
        setPatients(data);
    };


    console.log(patients);
    console.log(details);
    
    



    // const [servicesData, setServicesData] = useState([]);
    // setRoll('doctor');

    // useEffect(() => {
    //     async function api() {
    //         const service = await fetch(`${import.meta.env.VITE_API_BASE_URL}/users/doctor-services`);
    //         const res = await service.json();
    //         setServicesData(res)
    //     }
    //     api()
    // }, [])

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
    return (
        <>
            <Header />
            <PatientDetails onSendData={FromChild1} />
            {
                roll == 'doctor' ? <DoctorPatients servicesData={servicesData}  /> : <MedicinSelection />
            }


        </>
    )
}
export default NewPatient;


// This is the optional feature which we will decide later to deploy
{/* <div className="test-select">
                    <h2>Select Test</h2>
                    <div className="medical-test">
                        <form action="">
                            <div className="rows">
                                <span>
                                    <label htmlFor="">HbA1c </label>
                                    <br />
                                    <input type="radio" />
                                </span>
                                <span>
                                    <label htmlFor="">LFT </label>
                                    <br />
                                    <input type="radio" />
                                </span><span>
                                    <label htmlFor="">TFT </label>
                                    <br />
                                    <input type="radio" />
                                </span>
                            </div>
                            <div className="rows">
                                <span>
                                    <label htmlFor="">2D Echo </label>
                                    <br />
                                    <input type="radio" />
                                </span><span>
                                    <label htmlFor="">HPV </label>
                                    <br />
                                    <input type="radio" />
                                </span><span>
                                    <label htmlFor="">Urine R/M </label>
                                    <br />
                                    <input type="radio" />
                                </span>
                            </div>
                            <div className="rows">
                                <span>
                                    <label htmlFor="">Lipid Profile </label>
                                    <br />
                                    <input type="radio" />
                                </span><span>
                                    <label htmlFor="">Sonography </label>
                                    <br />
                                    <input type="radio" />
                                </span><span>
                                    <label htmlFor="">Blood Urea Level </label>
                                    <br />
                                    <input type="radio" />
                                </span>
                            </div>
                            <div className="rows">
                                <span>
                                    <label htmlFor="">ECG </label>
                                    <br />
                                    <input type="radio" />
                                </span>
                                <span>
                                    <label htmlFor="">TMT </label>
                                    <br />
                                    <input type="radio" />
                                </span><span>
                                    <label htmlFor="">Cheast X Ray </label>
                                    <br />
                                    <input type="radio" />
                                </span>
                            </div>

                        </form>
                    </div>
                </div> */}