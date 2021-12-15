import "./hero.scss";

const Hero = ({ welcomeNote, welcomeText }) => {
    return (
        <div className="hero">
            <div className="heroContainer">
                <h1>{ welcomeNote }</h1>
                <p>{ welcomeText }</p>
            </div>
        </div>
    )
}

export default Hero
