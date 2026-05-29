import { useEffect, useState } from 'react';
import './App.css'
import './NewPatient.css'
import Header from './Header';
import MedicinSelection from './MedicinSelection';
function NewPatient() {
    let [medicinSelected, updateMedicin] = useState(null)
    async function postnewpatient() {
        const postnewpatientapi = await fetch(
            'http//localhost:1190/user/',
            {
                method: "post",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: 'Ahmad',
                    age: 22
                })
            }
        )
    }
    return (
        <>
            <Header />
            <section id='newpatientsection'>
                <div className="details-submit">
                    <h2>Conform User Details & Make Bill</h2>
                    <div className="submit-bill">
                        <form id='form-1'>
                            <div className="submit-bill-form-out">
                                <div className="submit-bill-form1">
                                    <label htmlFor="">Name:</label>

                                    <input type="text" placeholder='Enter Patient Name' required />
                                </div>
                                <div className="submit-bill-form1">
                                    <label htmlFor="">Phone Number:</label>

                                    <input type="number" placeholder='Enter Patient Number' required />
                                </div>
                            </div>
                            <button id='submit-button' type='submit'>Submit Bill</button>
                        </form>edic
                    </div>
                </div>
                <div className="test-select">
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
                </div>
            </section>
            <MedicinSelection />
        </>
    )
}
export default NewPatient;
