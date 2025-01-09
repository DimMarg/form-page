import Banner from "../../Banner/Banner";
import Container from "../../Container/Container";
import Form from "./Form/Form";

const Contact = () => {
    return (
        <div className="contact-form-view">
            <Banner/>
            <Container title={"Φόρμα Επικοινωνίας"}>
                <Form />
            </Container>
        </div>
    );
};

export default Contact;
