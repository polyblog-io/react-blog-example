import { Link } from "react-router-dom";
import "./recentArticles.scss";

const RecentArticles = () => {
    return (
        <div className="recentArticles">
            <h1>Recent Articles</h1>
            <div className="articles">
                <Link to="/sadf" className="article">
                    <div className="imgContainer">
                        <img src="https://images.waiterio.com/images/article-cover-22-content-marketing-tips-f7606fd5-640w.webp" alt="pic"/>
                    </div>
                    <div className="articleBody">
                        <span>Vindya Vithana</span> - <span>November 30, 2021</span>
                        <h3>22 Brilliant Content Marketing Tips</h3>
                        <p>Taking your content marketing to the next level</p>
                    </div>
                </Link>

                <Link to="/slf" className="article">
                    <div className="imgContainer">
                        <img src="https://images.waiterio.com/images/article-cover-22-content-marketing-tips-f7606fd5-640w.webp" alt="pic"/>
                    </div>
                    <div className="articleBody">
                        <span>Vindya Vithana</span> - <span>November 30, 2021</span>
                        <h3>22 Brilliant Content Marketing Tips</h3>
                        <p>Taking your content marketing to the next level</p>
                    </div>
                </Link>

                <Link to="/asdf" className="article">
                    <div className="imgContainer">
                        <img src="https://images.waiterio.com/images/article-cover-22-content-marketing-tips-f7606fd5-640w.webp" alt="pic"/>
                    </div>
                    <div className="articleBody">
                        <span>Vindya Vithana</span> - <span>November 30, 2021</span>
                        <h3>22 Brilliant Content Marketing Tips</h3>
                        <p>Taking your content marketing to the next level</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default RecentArticles
