import './PatientDetails.css'
import { useState } from 'react'
export default function PatientDetails({ onSendData }) {

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        cnic: '',
        gender: '',
        age: '',
        purpose: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value, // Dynamic key update
        }));
        onSendData(formData)
    }


    return (
        <>
            <section id='newpatientsection'>
                <div className="details-submit">
                    <h2>Confirm User Details & Make Bill</h2>
                    <div className="submit-bill">
                        <form id='form-1'>
                            <div className="submit-bill-form-out">
                                <div className="submit-bill-form1">
                                    <label htmlFor="">Name:</label>
                                    <input
                                        name='name'
                                        type="text"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder='Enter Patient Name' required />
                                </div>
                                <div className="submit-bill-form1">
                                    <label htmlFor="">Phone Number:</label>
                                    <input
                                        name='phone'
                                        type="number"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder='Enter Patient Number' required />
                                </div>
                                <div className="submit-bill-form1">
                                    <label htmlFor="">CNIC</label>
                                    <input
                                        name='cnic'
                                        type="number"
                                        value={formData.cnic}
                                        onChange={handleChange}
                                        placeholder='Enter Patient CNIC' required />
                                </div>
                                <div className="submit-bill-form1">
                                    <label htmlFor="">Gender</label>
                                    <select
                                        name='gender'
                                        value={formData.gender}
                                        onChange={handleChange}
                                    >
                                        <option value="female">Female</option>
                                        <option value="male">Male</option>
                                    </select>
                                </div>
                                <div className="submit-bill-form1">
                                    <label htmlFor="">Age</label>
                                    <input
                                        name='age'
                                        type="number"
                                        value={formData.age}
                                        onChange={handleChange}
                                        placeholder='Enter Patient CNIC' required />
                                </div>
                                <div className="submit-bill-form1">
                                    <label htmlFor="">Reason of Visit:</label>
                                    <textarea
                                    className='p-2 border-black-600 border-1 rounded-2xl'
                                        id="purpose"
                                        name="purpose"
                                        value={formData.purpose}
                                        onChange={handleChange}
                                        placeholder="Enter Reason of Visit"
                                        rows={1}
                                    />
                                </div>


                            </div>
                            <button id='submit-button' type='submit'>Submit Bill</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}
