import { useState } from 'react';
import '../App.css'
import Cards from '../components/Cards';
import Header from '../components/Header';
import ShortTable from '../components/ShortTable';
function Home(){
    return(
        <>
            <Header/>
            <Cards/>
            {/* <ShortTable rol={role} heading="Today's Patients"/> */}
        </>
    )
}
export default Home;