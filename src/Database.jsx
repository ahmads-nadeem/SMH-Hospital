import './App.css'
import './Database.css';
import Header from './Header';
import DatabaseCards from './DatabaseCards';


function Database(){

    return(
        <div className="database-page">
            <Header/>
            {/* <button className='returnbtn' Link="/Home">Return to Home</button> */}
            <DatabaseCards/>
        </div>
    )
}
export default Database;