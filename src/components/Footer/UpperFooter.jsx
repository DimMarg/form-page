import footerMenus from "../../js/footerMenus";

const UpperFooter = () => {
    return (
        <div className="upper-footer">
            <div className="container">
                <div className="row">
                    {footerMenus.map((menu, index) => (
                        <div className="col" key={index}>
                            <ul className="footer-list">
                                {menu.map((item, index) => (
                                    <li className="list-item" key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default UpperFooter;