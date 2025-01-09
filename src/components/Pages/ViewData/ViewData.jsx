import Button from "../../Button/Button";
import Container from "../../Container/Container";

const ViewData = () => {
    const formData = JSON.parse(localStorage.getItem("formData")) || {};

    return (
        <div className="view-data-page">
            <Container title="Υποβληθέντα Στοιχεία">
                <div className="basic-info">
                    <p>{formData.name}</p>
                    <p>{formData.surname}</p>
                    <p>{formData.email}</p>
                    <p>#{formData.orderNumber}</p>
                </div>
                <div className="message">
                    <p className="issue">Λόγος Επικοινωνίας:{" "}{formData.issue}</p>
                    <p className="message-title">Μήνυμα</p>
                    <div className="message-content">
                        <p>{formData?.message}</p>
                    </div>
                </div>
                <div className="view-data-action">
                    <Button text={"Επιστροφή"} link="/" />
                </div>
            </Container>
        </div>
    )
}

export default ViewData;