import './home.scss';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import RecentArticles from '../../components/RecentArticles/RecentArticles';
import Footer from '../../components/Footer/Footer';

const Home = ({ category, setCategory}) => {

    return (
        <div className="home">
            <Header category={category} setCategory={setCategory}/>
            <Hero />
            <RecentArticles category={category} setCategory={setCategory}/>
            <Footer />
        </div>
    )
}

export default Home
