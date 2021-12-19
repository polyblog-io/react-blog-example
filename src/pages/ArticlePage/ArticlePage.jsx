import { getArticles } from '@polyblog/polyblog-js-client';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';


const ArticlePage = () => {
    const { locale, slug } = useParams()
    const [article, setArticle] = useState()
    console.log("locale: ", locale)
    console.log("slug: ", slug)

    useEffect(() => {

        if (article) return
        const fetchArticle = async () => {
            let articles = await getArticles({
                organizationId: 'c398463407b5c12f27f9aed4',
                project: 'polyblog',
                locale,
                slugLocalized: slug,
            })
            // console.log('SLUG', slug)
            // console.log({articles})
            let singleArticle = articles?.[0]
            setArticle(singleArticle)

        }

        fetchArticle()
    }, [article, locale, slug])

    return (
        <div className="single">
            <div className="singleBlogTop">
                <div className="singleBlogHeader">
                    <Link to="/" className="name">Blog</Link>
                </div>
                <img src={article?.coverUrl} alt={article?.title} />
                <div className="singleBlogHeaderOverlay"></div>
                <div className="singleBlogHero">
                    <h1>{article?.title}</h1>
                    <h3>{article?.subtitle}</h3>
                    <i>Posted by
                        <span> {article?.author}</span> 
                        {/* <span>{article?.creationTime.toString()}</span> */}
                    </i>
                </div>
            </div>
            <div className="singleBlogBody">
                <div 
                    dangerouslySetInnerHTML={{ __html: article?.content}}
                    className="singleBlogContent" 
                />
                     
            </div>
        </div>
    )
}

export default ArticlePage