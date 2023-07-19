import HeroBannerImage from '../../resources/images/banner.png';
import './heroBanner.scss';
const HeroBanner = () => {
  return (
    <div className="herobanner">
        <h1 className="herobanner__theme">
            Fitness Club
        </h1>
        <h2 className="herobanner__tagline">
            Sweat, Smile<br/> 
            and Repeat
        </h2>
        <p className="herobanner__callToAction">
            Check out the most effective exercises <br/> for your body
        </p>
        <div
           className="herobanner__button button"
           onClick={() => window.scroll({
                                        top: 1910,
                                        behavior: "smooth"
                                    })}>
            Explore Exercises
        </div>
        <img src={HeroBannerImage} alt="hero-banner" className='herobanner__img' />
        <p className='herobanner__p-last'>
              Exercise
        </p>
    </div>
  )
}

export default HeroBanner