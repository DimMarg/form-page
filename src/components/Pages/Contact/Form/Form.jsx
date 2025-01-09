import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"; // Hook for managing form state and validation
import Input from "./Input";
import Select from "./Select";
import Textarea from "./Textarea";

const Form = () => {
    const navigate = useNavigate(); // Initialize navigation hook for route changes
    const {
        register, // Registers input fields for validation and handling
        handleSubmit, // Handles form submission
        formState: {errors} // Contains form validation errors
    } = useForm({
        defaultValues: { // Default values for the form fields
            issue: "",
            name: "",
            surname: "",
            email: "",
            orderNumber: "",
            message: "",
            acceptTerms: false
        }
    });

     // Function to handle form submission
    const submitHandler = (data) => {
        localStorage.setItem("formData", JSON.stringify(data)); // Store form data in local storage
        navigate("/view-data") // Redirect to view-data route after form submission
    };

    const issueOptions = [
        { value: "Επικοινωνία με το τμήμα προσωπικού", label: "Επικοινωνία με το τμήμα προσωπικού" },
        { value: "Ακύρωση Παραγγελίας", label: "Να ακυρώσεις την παραγγελία σου" },
        { value: "Αλλαγή Παραγγελίας", label: "Να αλλάξεις την παραγγελία σου" },
        { value: "Άλλο", label: "Άλλο" },
    ];

    return (      
      <form onSubmit={handleSubmit(submitHandler)}>  
        <div className="control-row">
            <div className="control w-100 select-wrapper">
                <Select
                    label="Λόγος Επικοινωνίας"
                    {...register("issue", { required: 'Πρέπει να επιλέξετε λόγο επικοινωνίας.' })}
                    options={issueOptions}
                />
                <p className="error">{errors.issue?.message}</p>
            </div>
            <div className="control">
                <Input
                    label="Όνομα"
                    id="name"
                    type="text"
                    {...register("name", { required: 'Το όνομά σας είναι υποχρεωτικό.' })}
                    placeholder="Όνομα*"
                />
                <p className="error">{errors.name?.message}</p>
            </div>
            <div className="control">
                <Input
                    label="Επώνυμο"
                    id="surname"
                    type="text"
                    {...register("surname", { required: 'Το επώνυμό σας είναι υποχρεωτικό.' })}
                    placeholder="Επώνυμο*"
                />
                <p className="error">{errors.surname?.message}</p>
            </div>
            <div className="control">
                <Input
                    label="Email"
                    id="email"
                    type="email"
                    {...register("email", { 
                        required: 'Το email σας είναι υποχρεωτικό.',
                        pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                            message: "Παρακαλώ εισάγετε ένα έγκυρο email."
                        }
                    })}
                    placeholder="Email*"
                />
                <p className="error">{errors.email?.message}</p>
            </div>
            <div className="control">
                <Input
                    label="Κωδικός παραγγελίας"
                    id="orderNumber"
                    type="text"
                    {...register("orderNumber", { 
                        required: 'Ο κωδικός παραγγελίας είναι υποχρεωτικός.',
                        pattern: {
                            value: /^\d{8}$/,
                            message: "Ο κωδικός παραγγελίας πρέπει να περιέχει 8 αριθμητικά ψηφία."
                        }
                    })}
                    placeholder="Κωδικός παραγγελίας*"
                />
                <p className="error">{errors.orderNumber?.message}</p>
            </div>
            <div className="control textarea">
                <Textarea
                    label="Μήνυμα"
                    id="message"
                    {...register("message")}
                    rows="8" 
                    cols="33"
                    placeholder="Γράψε μας..."
                />
            </div>
        </div>
        <div className="control-row acceptance-row">
            <div className="grey-comment">*Όλα τα πεδία είναι υποχρεωτικά</div>
            <div className="checkbox-area">
                <label className="acceptance">
                    <input type="checkbox" {...register("acceptTerms", { required: 'Πρέπει να αποδεχθείτε τους όρους χρήσης.' })} /> 
                    <div className="input-label">
                        <span>Αποδέχομαι τους{" "}<a rel="noreferrer" href="#" target="_blank">Όρους Χρήσης</a></span>
                    </div>
                </label>
                <p className="error">{errors.acceptTerms?.message}</p>
            </div>
        </div>
        <div className="form-actions">
          <button type="submit" className="primary-btn">Υποβολή<svg xmlns="http://www.w3.org/2000/svg" width="12.379" height="12.69" viewBox="0 0 12.379 12.69">
                <g id="Icon_feather-arrow-right" data-name="Icon feather-arrow-right" transform="translate(0 0.53)">
                    <path id="Path_38024" data-name="Path 38024" d="M7.5,18H19.129" transform="translate(-7.5 -12.185)" fill="none" stroke="#fff" strokeLinejoin="round" strokeWidth="1.5"/>
                    <path id="Path_38025" data-name="Path 38025" d="M18,7.5l5.815,5.815L18,19.129" transform="translate(-12.185 -7.5)" fill="none" stroke="#fff" strokeLinejoin="round" strokeWidth="1.5"/>
                </g>
            </svg></button>
        </div>
      </form>
    );
}

  export default Form;