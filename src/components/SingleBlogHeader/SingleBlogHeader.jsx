import { Link } from 'react-router-dom';
import "./singleBlogHeader.scss";

const SingleBlogHeader = () => {
    return (
        <div className="singleBlogTop">
            <div className="singleBlogHeader">
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
            <img src="https://images.waiterio.com/images/article-image-write-and-edit-6f0d1776.jpg" alt='' />
            <div className="singleBlogHeaderOverlay"></div>
            <div className="singleBlogHero">
                <h1>22 Brilliant Content Marketing Tips</h1>
                <h3>Taking your content marketing to the next level</h3>
                <i>Posted by <span>Vindya Vithana</span> on <span>November 30, 2021</span></i>
            </div>
        </div>
    )
}

export default SingleBlogHeader
