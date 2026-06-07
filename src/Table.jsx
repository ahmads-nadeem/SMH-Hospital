import React from 'react'
import { useState, useEffect } from 'react';


function Table({ title, api_url }) {
    let [data, setData] = useState([]);
    let [ApiData, setApiData] = useState([]);

    useEffect(() => {
        if (api_url === "/database-patients") {
            let list = ['Name', 'Phone Number', 'Gender', 'Date'];
            setData(list);
        }
        else if (api_url === "/database-medicines") {
            let list = ['ID', 'Name', 'Formula', 'Category', 'Price', 'Stock'];
            setData(list);
        }
        else if (api_url === "/database-sales-purchase") {
            let list = ['Medicine Name', 'Quantity', 'Total Price'];
            setData(list);
        }
        async function fetchData() {
            const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}${api_url}`);
            const apiData = await response.json();
            // setApiData(apiData);
            console.log(apiData);
        } fetchData();
    }, [api_url]);
    return (
        <>
            <h2>{title}</h2>
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            {data.map((header, index) => (
                                <th key={index}>{header}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {/* <button onClick={fetchData}>Fetch Data</button> */}
                    </tbody>
                </table>
            </div>
        </>


    )
}

export default Table;