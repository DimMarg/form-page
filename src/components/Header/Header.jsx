import sleedLogo from '../../assets/images/sleed-logo.png'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <Link to={'/'}>
                <img src={sleedLogo} className="logo" alt="Sleed logo" width={96} height={38} />
            </Link>
        </header>
    )
}

export default Header;