const Container = ({title, children}) => {
    return (
        <div className="content-container">
            <h1 className="container-title">{title}</h1>
            {children}
        </div>
    );
};

export default Container;
