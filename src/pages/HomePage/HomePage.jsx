import { useEffect, useState } from "react";
import { getArticles } from '@polyblog/polyblog-js-client';
import { useParams, Link } from 'react-router-dom';
import ArticleCard from "../../components/ArticleCard/ArticleCard";
import './homePage.scss';

const Home = () => {
    const { locale = 'en'} = useParams()
    const [articles, setArticles] = useState()

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
            console.log({articles})
            setArticles(articles)
        }

        fetchArticles()
    }, [articles, locale])

    return (
        <div className="articlesContainer">
            <h1>Blog</h1>
            <div className="articles">
                {articles?.map(article =>
                  <Link to={{pathname: `/${article.locale}/${article.slug}`, article: article}} key={article._id} className="articleLink">
                    <ArticleCard article={article} locale={locale}/> 
                  </Link>
                )}
                
            </div>
        </div>
    )
}

export default Home
