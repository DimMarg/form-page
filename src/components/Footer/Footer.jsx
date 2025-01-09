const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <p>&copy; {new Date().getFullYear()} All rights reserved. </p>
                    </div>
                    <div className="col">
                        <p>Designed & Developed by <a href="https://www.sleed.com/" target="_blank">Sleed</a></p>
                    </div>
                    <div className="col useful-links">
                        <a href="#">Terms of Use</a>
                        <span>|</span>
                        <a href="#">Privacy Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;

