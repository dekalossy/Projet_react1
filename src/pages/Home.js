import Navigation from "../components/Navigation";
import Countries from "../components/Countries";

const Home = () => {
    return (
        <div className="Home">
            <Navigation/> 
            <h1>Home</h1>
            <Countries/>
        </div>
    )
}
export default Home;