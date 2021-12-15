import getArticles from '@polyblog/polyblog-js-client/getArticles'
import { Link } from "react-router-dom";
import "./recentArticles.scss";
import { Articles } from "../../dummyData";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import RecentArticle from "../RecentArticle/RecentArticle";

const RecentArticles = () => {

    const location = useLocation().pathname
    const [article, setArticle] = useState({})
    const [category, setCategory] = useState(location)
    console.log('category', category)

    const getArticle = (data) => {
        data.forEach((single) => {
            setArticle(single)
            // console.log('single',single)
        })
    }

    useEffect(() => {
        getArticle(Articles)
        console.log('Single Article', article)
    }, [article, category])

    return (
        <div className="recentArticles">
            <h1>Recent Articles</h1>
            <div className="articles">
                {Articles.map((item, key) => (
                    category === '/en' ? 
                    item.lang === 'en' && 
                        <Link to={{pathname: `/${item.lang}/${item.title}`, article: article}} key={item.id} className="articleLink">
                            <RecentArticle item={item} category={category}/> 
                        </Link>
                    :
                    category === '/es' ?
                    item.lang === 'es' && 
                        <Link to={{pathname: `/${item.lang}/${item.title}`}} key={item.id} className="articleLink">
                            <RecentArticle item={item} category={category}/>
                        </Link>
                    : 
                        <Link to={{pathname: `/${item.lang}/${item.title}`}} key={item.id} className="articleLink">
                            <RecentArticle item={item} category={category}/>
                        </Link>
                    
                ))}
                
            </div>
        </div>
    )
}

export default RecentArticles
