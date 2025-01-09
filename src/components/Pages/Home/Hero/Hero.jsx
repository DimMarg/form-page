import heroBanner from '../../../../assets/images/hero-banner.png';
import gradient from '../../../../assets/images/gradient.png';
import Button from '../../../Button/Button';

const Hero = () => {
    return (
        <div className="hero">
            <img src={heroBanner} className="hero-banner" alt="Hero Banner" width={1440} height={805} />
            <img src={gradient} className="hero-gradient" alt="Hero Gradient" width={708} height={805} />
            <div className="hero-content">
                <p className="season">SEASON 2022</p>
                <h5 className="hero-title">Επικοινώνησε μαζί μας!</h5>
                <Button text={"Συμπλήρωσε τη φόρμα"} link="contact" cls={"corner-rounded"} />
            </div>
        </div>
    )
}

export default Hero;