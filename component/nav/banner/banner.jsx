import './banner.css'

const Banner = () => {
    return (
        <div className="banner">
            <div className="banner-content">
                <h1>Unleash Your Inner Chef: Customized Cooking Classes to Elevate Your Kitchen Game</h1>
                <p>Whisking Wisdom: Culinary Mastery Through Flavorful Lessons and Hands-On Experience. Elevate Your Palate, One Bite at a Time</p>
                <div className="btn">
                    <a className='explore-now' href="#">Explore Now</a>
                    <a href="#">Our Feedback</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;