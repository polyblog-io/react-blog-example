import RecentArticles from '../../components/RecentArticles/RecentArticles';
import { useParams } from 'react-router-dom';

const HomePage = () => {

    const { locale } = useParams();

    console.log('Locale:', locale)

    return (
        <div className="home">
            <RecentArticles />
        </div>
    )
}

export default HomePage
