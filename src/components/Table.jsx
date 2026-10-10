import Loading from '../components/Loading'
function Table({ title, data }) {
    if (!data || data.length === 0) {
        return (
            <Loading/>
        );
    }
    const headers = Object.keys(data[0]);
    let colWidth;
    headers.length <= 5 ? colWidth = `w-1/${headers.length}` : colWidth = 'w-[200px]'

    return (
        <>
            <div className='w-full flex justify-center items-center p-2 mt-10 -mb-6'>
                <h2 className='w-45 text-center font-bold text-[17px] bg-white p-2 rounded'>
                    {title}
                </h2>
            </div>
            <div className="flex flex-col w-[95%] min-h-125 max-h-125 bg-white rounded-[10px] m-auto mt-8.75">
                <div className='overflow-y-auto overflow-x-auto'>
                    <table className=' table-fixed border-collapse w-full rounded-[10px] m-auto'>
                        <thead className='bg-gray-400 sticky top-0 uppercase z-0'>
                            <tr>
                                {headers.map((header, index) => {
                                    return <th className={`${colWidth} text-center p-2`} key={index}>{header}</th>
                                })}
                            </tr>
                        </thead>
                        <tbody className='w-full'>
                            {
                                data.map((row, index) => {
                                    return <tr key={index} className='h-12.5 cursor-pointer hover:bg-gray-200 hover:font-bold'>{
                                        headers.map((header, index2) => {
                                            return <td key={index2} className={`${colWidth} h-2 text-center p-2`}>{row[header]}</td>
                                        })
                                    }</tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>


    )
}

export default Table;













// let [data, setData] = useState([]);
// let [ApiData, setApiData] = useState([]);


// useEffect(() => {
//     if (api_url === "/database-patients") {
//         let list = ['Name', 'Phone Number', 'Gender', 'Date'];
//         setData(list);
//     }
//     else if (api_url === "/database-medicines") {
//         let list = ['ID', 'Name', 'Formula', 'Category', 'Price', 'Stock'];
//         setData(list);
//     }
//     else if (api_url === "/database-sales-purchase") {
//         let list = ['Medicine Name', 'Quantity', 'Total Price'];
//         setData(list);
//     }
//     async function fetchData() {
//         const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}${api_url}`);
//         const apiData = await response.json();
//         // setApiData(apiData);
//         console.log(apiData);
//     } fetchData();
// }, [api_url]);