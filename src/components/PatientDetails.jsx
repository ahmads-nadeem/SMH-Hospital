import { useSelector } from 'react-redux';
import './PatientDetails.css'
import { useEffect, useState } from 'react'
export default function PatientDetails({ onSendData }) {
    const roll = useSelector((store) => store.setUser.userRoll)
    const doctorName = useSelector((store) => store.setUser.userName)

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        gender: '',
        age: '',

    });

    const [formData2, setFormData2] = useState({
        name: '',
        phone: '',
        age: '',
        gender: 'female',
        lmp: '',
        gpa: '',
        gestationalAge: '',
        hb: '',
        bp: '',
        suger: '',
        urine: '',
        clinicalFindings: '',
        remarks: '',
        purpose: '',
        visitDate: '',
        nextVisit: '',
        createdby: doctorName
    });

    const handleChangeDoctor = (e) => {
        const { name, value } = e.target;
        setFormData2((prev) => ({ ...prev, [name]: value }));

    };

    const gestationalWeeks = [
        { showingValue: "None", value: '' },
        { showingValue: "1 Week", value: 1 },
        { showingValue: "2 Weeks", value: 2 },
        { showingValue: "3 Weeks", value: 3 },
        { showingValue: "4 Weeks", value: 4 },
        { showingValue: "5 Weeks", value: 5 },
        { showingValue: "6 Weeks", value: 6 },
        { showingValue: "7 Weeks", value: 7 },
        { showingValue: "8 Weeks", value: 8 },
        { showingValue: "9 Weeks", value: 9 },
        { showingValue: "10 Weeks", value: 10 },
        { showingValue: "11 Weeks", value: 11 },
        { showingValue: "12 Weeks", value: 12 },
        { showingValue: "13 Weeks", value: 13 },
        { showingValue: "14 Weeks", value: 14 },
        { showingValue: "15 Weeks", value: 15 },
        { showingValue: "16 Weeks", value: 16 },
        { showingValue: "17 Weeks", value: 17 },
        { showingValue: "18 Weeks", value: 18 },
        { showingValue: "19 Weeks", value: 19 },
        { showingValue: "20 Weeks", value: 20 },
        { showingValue: "21 Weeks", value: 21 },
        { showingValue: "22 Weeks", value: 22 },
        { showingValue: "23 Weeks", value: 23 },
        { showingValue: "24 Weeks", value: 24 },
        { showingValue: "25 Weeks", value: 25 },
        { showingValue: "26 Weeks", value: 26 },
        { showingValue: "27 Weeks", value: 27 },
        { showingValue: "28 Weeks", value: 28 },
        { showingValue: "29 Weeks", value: 29 },
        { showingValue: "30 Weeks", value: 30 },
        { showingValue: "31 Weeks", value: 31 },
        { showingValue: "32 Weeks", value: 32 },
        { showingValue: "33 Weeks", value: 33 },
        { showingValue: "34 Weeks", value: 34 },
        { showingValue: "35 Weeks", value: 35 },
        { showingValue: "36 Weeks", value: 36 },
        { showingValue: "37 Weeks", value: 37 },
        { showingValue: "38 Weeks", value: 38 },
        { showingValue: "39 Weeks", value: 39 },
        { showingValue: "40 Weeks", value: 40 }
    ];
    useEffect(() => {
        if (roll == 'doctor') {
            onSendData(formData2)
        }
        else {
            onSendData(formData)
        }
    }, [formData, formData2])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    return (
        <>
            {
                roll == 'doctor' ?
                    (
                        <>
                            <div className="w-[95%] mt-10 mx-auto flex items-center justify-center p-1">
                                {/* Outer container with purple border wrapper and white background */}
                                <div className="w-full bg-white rounded-lg shadow-xl border-4 border-transparent p-4 ">
                                    <form className="space-y-6">
                                        {/* 3-Column Grid Layout */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                            {/* 1. Asset Name */}
                                            <div className="flex flex-col">
                                                <label className="text-sm font-bold text-gray-900 mb-1">
                                                    Patient Name
                                                </label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={formData2.name}
                                                    onChange={handleChangeDoctor}
                                                    className="w-full bg-white border border-gray-300 rounded px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                                    placeholder="Name"
                                                    required
                                                />
                                            </div>

                                            {/* 2. Phone Number */}
                                            <div className="flex flex-col">
                                                <label className="text-sm font-bold text-gray-900 mb-1">
                                                    Phone Number
                                                </label>
                                                <input
                                                    type="text"
                                                    name="phone"
                                                    value={formData2.phone}
                                                    onChange={handleChangeDoctor}
                                                    className="w-full bg-white border border-gray-300 rounded px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                                    placeholder='0300000000'
                                                    required
                                                />
                                            </div>

                                            {/* 3. Patient Age */}
                                            <div className="flex flex-col">
                                                <label className="text-sm font-bold text-gray-900 mb-1">
                                                    Patient Age
                                                </label>
                                                <input
                                                    type="text"
                                                    name="age"
                                                    value={formData2.age}
                                                    onChange={handleChangeDoctor}
                                                    className="w-full bg-white border border-gray-300 rounded px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                                    placeholder="Age"
                                                    required
                                                />
                                            </div>

                                            <div className="flex flex-col">
                                                <label className="text-sm font-bold text-gray-900 mb-1">
                                                    Gender
                                                </label>
                                                <div className="relative">
                                                    <select
                                                        name="gender"
                                                        value={formData2.gender}
                                                        onChange={handleChangeDoctor}
                                                        className="w-full bg-white border border-gray-300 rounded px-3 py-2 text-gray-800 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition pr-8"
                                                    >
                                                        <option selected value="female">Female</option>
                                                        <option value="male">Male</option>
                                                    </select>
                                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 mr-2 text-gray-700">
                                                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* 4. LMP */}
                                            <div className="flex flex-col">
                                                <label className="text-sm font-bold text-gray-900 mb-1">
                                                    LMP (MM/DD/YYYY)
                                                </label>
                                                <div className="relative">
                                                    <input
                                                        type="date"
                                                        name="lmp"
                                                        value={formData2.lmp}
                                                        onChange={handleChangeDoctor}
                                                        className="w-full bg-white border border-gray-300 rounded px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition pr-4"
                                                    />
                                                    {/* <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-700">
                                                        <svg className="h-5 w-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                        </svg>
                                                    </div> */}
                                                </div>
                                            </div>

                                            {/* 5. GPA */}
                                            <div className="flex flex-col">
                                                <label className="text-sm font-bold text-gray-900 mb-1">
                                                    Gravida(G) / Para(P)
                                                </label>
                                                <div className="relative">
                                                    <select
                                                        name="gpa"
                                                        value={formData2.gpa}
                                                        onChange={handleChangeDoctor}
                                                        className="w-full bg-white border border-gray-300 rounded px-3 py-2 text-gray-800 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition pr-8"
                                                    >
                                                        <option selected value="">None</option>
                                                        <option value="g">Gravida (G)</option>
                                                        <option value="p">Para (P)</option>
                                                    </select>
                                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 mr-2 text-gray-700">
                                                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* 6. Gestational Age */}
                                            <div className="flex flex-col">
                                                <label className="text-sm font-bold text-gray-900 mb-1">
                                                    Gestational Age
                                                </label>
                                                <div className="relative">
                                                    <select
                                                        name="gestationalAge"
                                                        value={formData2.gestationalAge}
                                                        onChange={handleChangeDoctor}
                                                        className="w-full bg-white border border-gray-300 rounded px-3 py-2 text-gray-800 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition pr-8"
                                                    >
                                                        {
                                                            gestationalWeeks.map((values, index) => {
                                                                return <option key={index} value={values.value}>{values.showingValue}</option>
                                                            })
                                                        }
                                                    </select>
                                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 mr-2 text-gray-700">
                                                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* 7. Investigations */}

                                            {/* 8. Clinical Findings */}
                                            <div className="flex flex-col">
                                                <label className="text-sm font-bold text-gray-900 mb-1">
                                                    Clinical Findings
                                                </label>
                                                <input
                                                    type="text"
                                                    name="clinicalFindings"
                                                    value={formData2.clinicalFindings}
                                                    onChange={handleChangeDoctor}
                                                    className="w-full bg-white border border-gray-300 rounded px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                                />
                                            </div>

                                            {/* 9. Remarks */}
                                            <div className="flex flex-col">
                                                <label className="text-sm font-bold text-gray-900 mb-1">
                                                    Remarks
                                                </label>
                                                <input
                                                    type="text"
                                                    name="remarks"
                                                    value={formData2.remarks}
                                                    onChange={handleChangeDoctor}
                                                    className="w-full bg-white border border-gray-300 rounded px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                                />
                                            </div>

                                            {/* 10. Purpose Of Visit */}
                                            <div className="flex flex-col">
                                                <label className="text-sm font-bold text-gray-900 mb-1">
                                                    Purpose Of Visit
                                                </label>
                                                <textarea
                                                    type="text"
                                                    name="purpose"
                                                    value={formData2.purpose}
                                                    onChange={handleChangeDoctor}
                                                    className="w-full bg-white border border-gray-300 rounded px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                                />
                                            </div>
                                        </div>

                                        {/* Payment Status Row (Spans or positioned below) */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">

                                            {/* 11. Visit Date */}
                                            <div className="flex flex-col">
                                                <label className="text-sm font-bold text-gray-900 mb-1">
                                                    Visit Date
                                                </label>
                                                <div className="relative">
                                                    <input
                                                        type="date"
                                                        name="visitDate"
                                                        value={formData2.visitDate}
                                                        onChange={handleChangeDoctor}
                                                        placeholder="mm/dd/yyyy"
                                                        className="w-full bg-white border border-gray-300 rounded px-3 py-2 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition pr-5"
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            {/* 12. Next Visit */}
                                            <div className="flex flex-col">
                                                <label className="text-sm font-bold text-gray-900 mb-1">
                                                    Next Visit Date
                                                </label>
                                                <div className="relative">
                                                    <input
                                                        type="date"
                                                        name="nextVisit"
                                                        value={formData2.nextVisit}
                                                        onChange={handleChangeDoctor}
                                                        placeholder="mm/dd/yyyy"
                                                        className="w-full bg-white border border-gray-300 rounded px-3 py-2 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition pr-5"
                                                    />
                                                </div>
                                            </div>

                                            <div className='flex justify-between'>
                                                <div className='flex flex-col'>
                                                    <label className="text-sm font-bold text-gray-900 mb-1">
                                                        HB
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="hb"
                                                        value={formData2.hb}
                                                        onChange={handleChangeDoctor}
                                                        className="w-20 bg-white border border-gray-300 rounded px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                                    />
                                                </div>
                                                <div className='flex flex-col'>
                                                    <label className="text-sm font-bold text-gray-900 mb-1">
                                                        BP
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="bp"
                                                        value={formData2.bp}
                                                        onChange={handleChangeDoctor}
                                                        className="w-20 bg-white border border-gray-300 rounded px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                                    />
                                                </div>
                                                <div className='flex flex-col'>
                                                    <label className="text-sm font-bold text-gray-900 mb-1">
                                                        Suger
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="suger"
                                                        value={formData2.suger}
                                                        onChange={handleChangeDoctor}
                                                        className="w-20 bg-white border border-gray-300 rounded px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                                    />
                                                </div>
                                                <div className='flex flex-col'>
                                                    <label className="text-sm font-bold text-gray-900 mb-1">
                                                        Urine
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="urine"
                                                        value={formData2.urine}
                                                        onChange={handleChangeDoctor}
                                                        className="w-20 bg-white border border-gray-300 rounded px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </>
                    )
                    :
                    (
                        <>
                            < section id='newpatientsection'>
                                <div className="details-submit pb-8">
                                    <h2>Confirm User Details & Make Bill</h2 >
                                    <div className="submit-bill">
                                        <form id='form-1' >
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

                                            </div>

                                        </form>
                                    </div>
                                </div >
                            </section >
                        </>
                    )

            }
        </>
    )
}