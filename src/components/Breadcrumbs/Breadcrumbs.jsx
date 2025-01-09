import { Link, useLocation } from 'react-router-dom';
import routeMap from '../../assets/js/routeMap';

const Breadcrumbs = () => {
    const location = useLocation();

    // We split the path into parts, removing the spaces (e.g. from "/form" we get ['form']).
    const pathnames = location.pathname.split('/').filter((x) => x);

    return (
        <div className="container">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumbs">
                    <li className="breadcrumb-item">
                        <Link to="/">ΑΡΧΙΚΗ</Link>
                    </li>
                    {pathnames.map((value, index) => {
                        // We build the full path up to this point (e.g. "/form").
                        const currentPath = `/${pathnames.slice(0, index + 1).join('/')}`;
                        // Check if it is the last breadcrumb.
                        const isLast = index === pathnames.length - 1;

                        // Get the name from the map (or fallback to the raw path if none exists).
                        const name = routeMap[currentPath] || decodeURIComponent(value);

                        return isLast ? (
                            <li className="breadcrumb-item active" key={currentPath} aria-current="page">
                                / {name}
                            </li>
                        ) : (
                            <li className="breadcrumb-item" key={currentPath}>
                                / <Link to={currentPath}>{name}</Link>
                            </li>
                        );
                    })}
                </ol>
            </nav>
        </div>
    );
};

export default Breadcrumbs;
