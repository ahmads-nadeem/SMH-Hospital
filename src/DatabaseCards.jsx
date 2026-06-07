import './App.css'
import './DatabaseCards.css';
import { useState } from 'react';
import Table from './Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function DatabaseCards() {
    let [statevar, setStatevar] = useState(null);
    function render() {
        switch (statevar) {
            case 'Patients':
                return <Table title="Patients" api_url="/database-patients" />;
            case 'Medicines':
                return <Table title="Medicines" api_url="/database-medicines" />;
            case 'Sales&Purchase':
                return <Table title="Sales & Purchase" api_url="/database-sales-purchase" />;
            default:
                return null;
        }
    }
    return (
        <div className="container">
            {
                !statevar ? (
                    <div className="cards-container">
                        <div className="card" onClick={() => setStatevar('Patients')}>
                            <div className="div">
                                <h3>Patients</h3>
                                <FontAwesomeIcon icon="users" className='icon'/>
                            </div>
                        </div>
                        <div className="card" onClick={() => setStatevar('Medicines')}>
                            <div className="div">
                                <h3>Medicines</h3>
                                <FontAwesomeIcon icon="pills" className='icon'/>
                            </div>
                        </div>
                        <div className="card" onClick={() => setStatevar('Sales&Purchase')}>
                            <div className="div">
                                <h3>Sales & Purchase</h3>
                                <FontAwesomeIcon icon="cart-plus" className='icon'/>
                            </div>
                        </div>
                    </div>
                ) : (
                    <button onClick={() => setStatevar(null)}>Go Back</button>
                )
            }
            <div className="render">
                {render()}
            </div>
        </div>

    );

}
export default DatabaseCards;