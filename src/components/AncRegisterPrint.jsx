import React, { useState } from 'react';

const AncRegisterPrint = ({ data }) => {

  console.log(data);
  
  const [loading, setLoading] = useState(false);

  const handleOpenPdf = async () => {
    // Data na ho to request hi na bhejein
    if (!data || Object.keys(data).length === 0) {
      alert('Report data maujood nahi hai.');
      return;
    }

    // Popup blocker se bachne ke liye tab click ke foran baad khol lein
    const newTab = window.open('', '_blank');

    try {
      setLoading(true);

      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/doctors/report`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data), // data already report object hai (data.report nahi)
        }
      );

      if (!response.ok) {
        throw new Error('Server response error');
      }

      // Response ko Blob mein convert karein
      const blob = await response.blob();

      // Temporary URL banayein aur pehle se khuli tab mein set karein
      const pdfUrl = URL.createObjectURL(blob);
      if (newTab) {
        newTab.location.href = pdfUrl;
      } else {
        // Agar browser ne tab block kar di ho
        window.location.href = pdfUrl;
      }

      // Memory free karne ke liye thori der baad URL revoke kar dein
      setTimeout(() => URL.revokeObjectURL(pdfUrl), 60000);
    } catch (error) {
      newTab?.close();
      console.error('PDF generation error:', error);
      alert('PDF generate nahi ho saki.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>ANC Register Print</h2>
      <button
        onClick={handleOpenPdf}
        disabled={loading}
        style={{
          padding: '10px 20px',
          backgroundColor: loading ? '#6c9fd8' : '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: loading ? 'not-allowed' : 'pointer',
        }}
      >
        {loading ? 'Generating PDF...' : 'View / Print ANC Register'}
      </button>
    </div>
  );
};

export default AncRegisterPrint;