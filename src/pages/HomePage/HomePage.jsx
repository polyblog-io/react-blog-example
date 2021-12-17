import './homePage.scss';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import RecentArticles from '../../components/RecentArticles/RecentArticles';
import Footer from '../../components/Footer/Footer';
import { useParams } from 'react-router-dom';

const HomePage = () => {

    const { locale } = useParams();

    console.log('Locale:', locale)

    return (
        <div className="home">
            <Header />
            {locale === 'es' ? 
                <Hero welcomeNote = 'Bienvenido a Polyblog' welcomeText='Explorar millones de artículos de blogs'/> :
                <Hero welcomeNote="Welcome to Polyblog" welcomeText="Explore millions of blog articles"/>
            }
            <RecentArticles/>
            <Footer />
        </div>
    )
}

export default HomePage
