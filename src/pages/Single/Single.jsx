import Footer from '../../components/Footer/Footer';
import RecentArticles from '../../components/RecentArticles/RecentArticles';
import SingleBlogBody from '../../components/SingleBlogBody/SingleBlogBody';
import SingleBlogHeader from '../../components/SingleBlogHeader/SingleBlogHeader';
import './single.scss';


const Single = () => {
    return (
        <div className="single">
            <SingleBlogHeader />
            <SingleBlogBody />
            <RecentArticles />
            <Footer />
        </div>
    )
}

export default Single
