import { Link } from 'react-router-dom';
import './App.css'
import './Cards.css'
function Cards() {
    return (
        <section className='section1'>
            <div className="box">
                <div className="xcard">
                    <div className="heading">
                        <h2>Today's Overview</h2>
                    </div>
                    <div className="overview">
                        <div className="databox">
                            <h3>22</h3>
                            <p>Total Patients</p>
                        </div>
                        <div className="databox">
                            <h3>22</h3>
                            <p>Doctors On Duty</p>
                        </div>
                        <div className="databox">
                            <h3>22%</h3>
                            <p>Bed Occupancy</p>
                        </div>
                        <div className="databox">
                            <h3>2</h3>
                            <p>No. Case</p>
                        </div>
                    </div>
                </div>
                <div className="xcard">
                    <div className="heading">
                        <h2>Quick Actions</h2>
                    </div>
                    <div className="actions">
                        <button><Link id='homelinks' to={'/new-patient'}>➕ New Patient</Link></button>
                        <button><Link id='homelinks' to={'/book-appointment'}>📅 Book Appointment</Link></button>
                        <button><Link id='homelinks' to={'/emergency-patient'}>🚨 Emergency</Link></button>
                        <button><Link id='homelinks' to={'/reports'}>📄 Reports</Link></button>
                    </div>
                </div>
            </div>
        </section>

    );
}
export default Cards;