import { Link } from "react-router-dom";
import "./recentArticles.scss";
import { Articles } from "../../dummyData";
import { useState } from "react";
import { useLocation } from "react-router-dom";


const RecentArticles = () => {

    const location = useLocation().pathname
    const [article, setArticle] = useState({})
    const [category, setCategory] = useState(location)
    console.log('category', category)

    console.log(location)


    return (
        <div className="recentArticles">
            <h1>Recent Articles</h1>
            <div className="articles">
                {Articles.map((item, key) => (
                    category === '/en' || '/' &&
                    item.lang === 'en' && 
                        <Link 
                            to={{pathname: `/en/${item.title}`}} 
                            className="article" key={item.id} 
                        >
                            <div className="imgContainer">
                                <img src={item.imgUrl} alt={item.title}/>
                            </div>
                            <div className="articleBody">
                                <span>{item.author}</span> - <span>{item.createdAt}</span>
                                <h3>{item.title}</h3>
                                <p>{item.body}</p>
                            </div>
                        </Link> 
                    ||
                    category === '/es' && item.lang === 'es' && 
                        <Link 
                            to={{pathname: `/es/${item.title}`, item: item}} 
                            className="article" key={item.id}
                            
                        >
                            <div className="imgContainer">
                                <img src={item.imgUrl} alt={item.title}/>
                            </div>
                            <div className="articleBody">
                                <span>{item.author}</span> - <span>{item.createdAt}</span>
                                <h3>{item.title}</h3>
                                <p>{item.body}</p>
                            </div>
                        </Link> 
                    
                ))}
                
            </div>
        </div>
    )
}

export default RecentArticles
