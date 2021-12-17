import "./recentArticle.scss";
import moment from "moment";

const RecentArticle = ({ article }) => {

    return (
        <div className="article" key={article.id}>
            <div className="imgContainer">
                <img src={article.coverUrl} alt={article.title}/>
            </div>
            <div className="articleBody">
                <span>{article.author}</span> - <span>{moment(article.creationTime).format("MMMM D, YYYY")}</span>
                <h3>{article.title}</h3>
                <p>{article.subtitle}</p>
            </div>
        </div>
    )
}

export default RecentArticle
