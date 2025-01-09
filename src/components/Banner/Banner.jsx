import pageBanner from '../../assets/images/01.png';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';

const Banner = () => {
    return (
        <div className="banner">
            <Breadcrumbs />
            <img src={pageBanner} className="page-banner" alt="Hero Banner" width={1440} height={233} />
        </div>
    )
}

export default Banner;