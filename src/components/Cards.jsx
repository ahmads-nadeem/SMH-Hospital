import { Link } from 'react-router-dom';
import '../App.css'
import './Cards.css'
import { useSelector } from 'react-redux';
function Cards() {
    const roll = useSelector((store) => {
        return store.setUser.userRoll
    })

    const notAllowed = 'rounded-lg bg-blue-600 px-4 py-2 text-white opacity-50 cursor-not-allowed'
    return (
        <section className='section1'>
            <div className="box">
                <div className="xcard">
                    <div className="heading">
                        <h2 className='font-bold'>Today's Overview</h2>
                    </div>
                    <div className="overview">
                        <div className="databox">
                            <h3>22</h3>
                            <p>Today Patients</p>
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
                        <h2 className='font-bold'>Quick Actions</h2>
                    </div>
                    <div className="actions">
                        <button><Link id='homelinks' to={'/new-patient'}>➕ New Patient</Link></button>
                        <button><Link id='homelinks' className={roll == 'doctor' ? notAllowed : ''} to={roll == 'doctor' ? '' : '/new-purchase'}>{roll == 'doctor' ? "--------------" : "📦 New Purchase"}</Link></button>
                        {/* <button><Link id='homelinks' to={'/patient'}>{role=='doctor'? "Patients":"⏳ Queue"}</Link></button> */}
                        <button><Link id='homelinks' to={'/patient'}>{roll == 'doctor' ? "⏳ Queue" : "⏳ Queue"}</Link></button>
                        <button><Link id='homelinks' to={'/reports'}>📄 Reports</Link></button>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Cards;