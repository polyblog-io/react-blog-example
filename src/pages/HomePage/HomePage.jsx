import { getArticles } from '@polyblog/polyblog-js-client';
import { useState, useEffect } from "react";
import { useParams, Link } from 'react-router-dom';
import ArticleCard from '../../components/ArticleCard/ArticleCard';
import Loading from '../../components/Loader/Loading';

const HomePage = () => {

    const [articles, setArticles] = useState();
    const { locale } = useParams();

    useEffect(() => {

        if (articles) return

        const fetchArticles = async () => {
            let articles = await getArticles({
                organizationId: 'c398463407b5c12f27f9aed4',
                project: 'polyblog',
                locale,
                published: true,
                sortDirection: 'DESC',
            })
            console.log({ articles })
            setArticles(articles)
        }

        fetchArticles()
    }, [articles, locale])      
    
    return (
        <div className="home">
            <div>
                <h1 style={{textAlign: 'center'}}>Recent Articles</h1>
                <div className="articles">
                    {articles ? 
                    articles?.map(article => (
                        article.locale === locale &&
                        <Link
                            to={{ pathname: `/${article.locale}/${article.slugLocalized}`}}
                            key={article._id}
                            className="articleLink"
                        >
                            <ArticleCard article={article} />
                        </Link>

                    )) : <Loading />}

                </div>
            </div>
        </div>
    )
}

export default HomePage
