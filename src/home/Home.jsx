import Navbar from "../components/navbar/Navbar"
import "./home.scss"
import Api_App from "../api"


const Home = () => {
    return (
        <div className='home'>
            <Navbar />
            <br />
            <br />
            <br />
            <br />
            <Api_App />
        </div>
    )
}

export default Home
