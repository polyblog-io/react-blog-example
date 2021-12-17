import { getArticles } from '@polyblog/polyblog-js-client'
import { Link, useLocation } from "react-router-dom";
import "./recentArticles.scss";
import { useState, useEffect } from "react";
import RecentArticle from "../RecentArticle/RecentArticle";

const RecentArticles = () => {

    const location = useLocation().pathname
    const [articles, setArticles] = useState()
    const locale = location.replace('/', '')
    console.log(locale)
    
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
        <div className="recentArticles">
            <h1>Recent Articles</h1>
            <div className="articles">
                {articles?.map(article => (
                    locale === '/en' ? 
                    article.locale === 'en' && 
                        <Link to={{pathname: `/${article.locale}/${article.slug}`, article: article}} key={article._id} className="articleLink">
                            <RecentArticle article={article} locale={locale}/> 
                        </Link>
                    :
                    locale === '/es' ?
                    article.locale === 'es' && 
                        <Link to={{pathname: `/${article.locale}/${article.slug}`, article: article}} key={article._id} className="articleLink">
                            <RecentArticle article={article} locale={locale}/>
                        </Link>
                    : 
                        <Link to={{pathname: `/${article.locale}/${article.slug}`, article: article}} key={article._id} className="articleLink">
                            <RecentArticle article={article} locale={locale}/>
                        </Link>
                    
                ))}
                
            </div>
        </div>
    )
}

export default RecentArticles
