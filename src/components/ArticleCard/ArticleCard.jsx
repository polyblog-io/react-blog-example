const ArticleCard = ({ article }) => {

    return (
        <div className="article">
            <div className="imgContainer">
                <img src={article.coverUrl} alt={article.title} />
            </div>
            <div className="articleBody">
                <span>{article.author}</span> - <span>{article.creationTime}</span>
                <h3>{article.title}</h3>
                <p>{article.subtitle}</p>
            </div>
        </div>
    )
}

export default ArticleCard