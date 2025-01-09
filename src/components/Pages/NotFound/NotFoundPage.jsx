import Button from "../../Button/Button";
import Container from "../../Container/Container";

const NotFoundPage = () => {
    return (
        <div className="error-page">
            <Container title={"404"}>
                <p className="subtitle">Η σελίδα δεν βρέθηκε!</p>
                <Button text={"Πίσω στην Αρχική"} link="/" cls={"corner-rounded"} />
            </Container>
        </div>
    )
}

export default NotFoundPage;