import './home.scss';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import RecentArticles from '../../components/RecentArticles/RecentArticles';
import Footer from '../../components/Footer/Footer';

const Home = () => {
    return (
        <div className="home">
            <Header />
            <Hero />
            <RecentArticles />
            <Footer />
        </div>
    )
}

export default Home
