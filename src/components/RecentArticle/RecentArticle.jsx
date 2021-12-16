import "./recentArticle.scss";

const RecentArticle = ({ article }) => {

    return (
        <div className="article" key={article.id}>
            <div className="imgContainer">
                <img src={article.coverUrl} alt={article.title}/>
            </div>
            <div className="articleBody">
                <span>{article.author}</span> - <span>{article.createdAt}</span>
                <h3>{article.title}</h3>
                <p>{article.body}</p>
            </div>
        </div>
    )
}

export default RecentArticle
