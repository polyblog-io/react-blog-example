import { useEffect, useState } from 'react'
import { getArticles } from '@polyblog/polyblog-js-client'
import { useParams, Link } from 'react-router-dom'
import './homePage.scss'

const HomePage = () => {
  const { locale = 'en' } = useParams()
  const [articles, setArticles] = useState()

  useEffect(() => {
    if (articles) return

    const fetchArticles = async () => {
      let articles = await getArticles({
        blogId: '4217f90b8eaa86551e7f7d55',
        locale,
        published: true,
        sortDirection: 'DESC',
      })
      console.log({ articles })
      setArticles(articles)
    }

    fetchArticles()
  }, [articles, locale])

  return (
    <div className="container">
      <h1>Blog</h1>
      <div className="articles">
        {articles?.map(
          ({
            _id,
            locale,
            slug,
            coverUrl,
            title,
            author,
            creationTime,
            subtitle,
          }) => (
            <Link
              to={{
                pathname: `/${locale}/${slug}`,
              }}
              key={_id}
              className="articleLink"
            >
              <div className="article" key={_id}>
                <div className="imgContainer">
                  <img src={coverUrl} alt={title} />
                </div>
                <div className="articleBody">
                  <span>{author}</span> -{' '}
                  <span>
                    {new Date(creationTime).toLocaleString(locale, {
                      dateStyle: 'long',
                    })}
                  </span>
                  <h3>{title}</h3>
                  <p>{subtitle}</p>
                </div>
              </div>
            </Link>
          ),
        )}
      </div>
    </div>
  )
}

export default HomePage
