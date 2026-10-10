import { useState } from 'react';
import '../App.css'
import Cards from '../components/Cards';
import Header from '../components/Header';
import ShortTable from '../components/ShortTable';
function Home(){
    const [role, setRole] = useState('doctor');
    

    return(
        <>
            <Header role={role}/>
            <Cards role={role}/>
            <ShortTable rol={role} heading="Today's Patients"/>
        </>
    )
}
export default Home;