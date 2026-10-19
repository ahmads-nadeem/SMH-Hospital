// import React from 'react';
// const AncRegisterPrint = () => {

//     const handleOpenPdf = () => {
//         // Express backend ka URL
//         const pdfUrl = `${import.meta.env.VITE_API_BASE_URL}/doctors/report`

//         // Naye tab me PDF open ho jayegi
//         window.open(pdfUrl, '_blank');
//     };

//     return (
//         <div style={{ padding: '20px' }}>
//             <h2>ANC Register Print</h2>
//             <button
//                 onClick={handleOpenPdf}
//                 style={{
//                     padding: '10px 20px',
//                     backgroundColor: '#007bff',
//                     color: '#fff',
//                     border: 'none',
//                     borderRadius: '4px',
//                     cursor: 'pointer'
//                 }}
//             >
//                 View / Print ANC Register
//             </button>
//         </div>
//     );
// };

// export default AncRegisterPrint;


import React from 'react';

const AncRegisterPrint = (data) => {

  const handleOpenPdf = async () => {
    // 1. Aapka Data Object
    // const reportData = {
    //   facilityName: "DHQ Hospital",
    //   phcRegNo: "PHC-98765",
    //   patientName: "Ayesha Bibi",
    //   age: "26",
    //   bp: "110/70",
    //   hb: "11.2"
    //   // Jo bhi data aap bhejna chahte hain yahan add karein
    // };

    try {
      // 2. Simple fetch POST request
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/doctors/report`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data.report), // Object ko JSON string me convert kiya
      });

      if (!response.ok) {
        throw new Error('Server response error');
      }

      // 3. Response ko Blob (Binary Data) me convert karein
      const blob = await response.blob();

      // 4. Memory me Temporary Blob URL banayein
      const pdfUrl = URL.createObjectURL(new Blob([blob], { type: 'application/pdf' }));

      // 5. PDF ko naye tab me open karein
      window.open(pdfUrl, '_blank');

    } catch (error) {
      console.error("PDF generation error:", error);
      alert("PDF generate nahi ho saki.");
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>ANC Register Print</h2>
      <button 
        onClick={handleOpenPdf}
        style={{
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        View / Print ANC Register
      </button>
    </div>
  );
};

export default AncRegisterPrint;