import "./recentArticle.scss";

const RecentArticle = ({ item }) => {

    return (
        <div className="article" key={item.id}>
            <div className="imgContainer">
                <img src={item.imgUrl} alt={item.title}/>
            </div>
            <div className="articleBody">
                <span>{item.author}</span> - <span>{item.createdAt}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
            </div>
        </div>
    )
}

export default RecentArticle
