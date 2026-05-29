import './App.css'
import Cards from './Cards';
import Header from './Header';
import ShortTable from './ShortTable';

function Home(){

    return(
        <>
            <Header/>
            <Cards/>
            <ShortTable heading="Today's Patients"/>
        </>
    )
}
export default Home;