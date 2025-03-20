import Navbar from '../Components/Navbar'
import SearchBar from '../Components/SearchBar'
import Footer from '../Components/Footer'


export default function Home(){

    return(
        <div style={{minHeight: "600px"}}>
        <>
        <Navbar /><br></br>
        <SearchBar /><br></br><br></br><br></br><br></br>
        <Footer />
        </>
        </div>
    )
}
