import Navigation from "../components/Navigation";
import Countries from "../components/Countries";

const Home = () => {
    return (
        <div className="Home">
            <Navigation/> 
            <h3>Bienvenue..</h3>
            <Countries/>
        </div>
    )
}
export default Home;