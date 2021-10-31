
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import HotelServices from '../HotelServices/HotelServices';
import Services from '../Services/Services';


const Home = () => {


    return (
        <div>
            <Banner></Banner>
            <Services></Services>

            <HotelServices></HotelServices>
            <Contact></Contact>
        </div>
    );
};

export default Home;