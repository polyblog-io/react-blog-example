import { getArticles } from '@polyblog/polyblog-js-client'
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ArticleCard from '../ArticleCard/ArticleCard';
import Loading from '../Loader/Loading';


const RecentArticles = () => {

    const [articles, setArticles] = useState()
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
    )
}

export default RecentArticles
