import { getArticles } from '@polyblog/polyblog-js-client';
import { useState, useEffect } from 'react';
import Footer from '../../components/Footer/Footer';
import './article.scss';
import { useParams, Link } from 'react-router-dom';
import moment from 'moment';


const Article = () => {
    const { locale, slug } = useParams()
    const [article, setArticle] = useState()

    useEffect(() => {

        if (article) return 
        const fetchArticles = async() => {
            let articles = await getArticles({
                organizationId: 'c398463407b5c12f27f9aed4',
                project: 'polyblog',
                locale,
                slugLocalized: slug,
            })
            console.log({articles})
            let articleArticle = articles?.[0]
            setArticle(articleArticle)

        }

        fetchArticles()
    }, [article, locale, slug])

    return (
        <div className="article">
            <div className="articleBlogTop">
                <div className="articleBlogHeader">
                    <h3>Polyblog Blog</h3>
                    <ul>
                        <Link className="link" to="#">POLYBLOG</Link>
                        <Link className="link" to="#">MARKETING</Link>
                        <Link className="link" to="#">DESIGN</Link>
                        <Link className="link" to="#">MANAGEMENT</Link>
                        <Link className="link" to="#">TECHNOLOGY</Link>
                        <Link className="link" to="#">ENGLISH</Link>
                    </ul>
                </div>
                <img src={article?.coverUrl} alt={article?.title} />
                <div className="articleBlogHeaderOverlay"></div>
                <div className="articleBlogHero">
                    <h1>{article?.title}</h1>
                    <h3>{article?.subtitle}</h3>
                    <i>Posted by <span>{article?.author}</span> on <span>{moment(article?.creationTime).format('MMMM D, YYYY')}</span></i>
                </div>
            </div>
            <div className="articleBlogBody">
            <div className="articleBlogContent">
               {article?.content}
            </div>
        </div>
            <Footer />
        </div>
    )
}

export default Article
