import './home.scss';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import RecentArticles from '../../components/RecentArticles/RecentArticles';
import Footer from '../../components/Footer/Footer';
import { useLocation } from 'react-router-dom';

const Home = () => {
    const { pathname: location } = useLocation();

    // console.log(location) 

    return (
        <div className="home">
            <Header />
            {location === '/es' ? 
                <Hero welcomeNote = 'Bienvenido a Polyblog' welcomeText='Explorar millones de artículos de blogs'/> :
                <Hero welcomeNote="Welcome to Polyblog" welcomeText="Explore millions of blog articles"/>
            }
            <RecentArticles/>
            <Footer />
        </div>
    )
}

export default Home
