import { Link } from 'react-router-dom';
import './App.css';
import './ShortTable.css'

function ShortTable() {
    return (
        <>
            <section className='shortTable-section'>
                <div className="headingh2-div">
                    <h2 className='h2headings'>Today's Patients</h2>
                </div>
                <div className="table-10">
                    <table>
                        <thead>
                            <tr>
                                <td>Id</td>
                                <td>Name</td>
                                <td>Phone-Number</td>
                                <td>Date</td>
                            </tr>
                        </thead>

                    </table>
                    <Link id='morebuttontoday' to='/today-patients-details'>More &rarr;</Link>
                </div>
            </section>
        </>
    );
}
export default ShortTable;
