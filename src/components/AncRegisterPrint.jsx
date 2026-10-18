import React from 'react';

const AncRegisterPrint = () => {

    const handleOpenPdf = () => {
        // Express backend ka URL
        const pdfUrl = `${import.meta.env.VITE_API_BASE_URL}/doctors/report`

        // Naye tab me PDF open ho jayegi
        window.open(pdfUrl, '_blank');
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