import { useEffect, useState } from 'react';
import '../App.css'
import Cards from '../components/Cards';
import Header from '../components/Header';
import ShortTable from '../components/ShortTable';
const role = 'doctor';
function Home(){
    // const [role, setRole] = useState('')


    return(
        <>
            <Header rol={role}/>
            <Cards rol={role}/>
            <ShortTable rol={role} heading="Today's Patients"/>
        </>
    )
}
export default Home;