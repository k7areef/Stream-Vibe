import heroImage from "@assets/contact-hero.png";
import Button from "@components/UI/Button";
import Input from "@components/UI/Input";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Formik } from "formik";
import * as Yup from "yup";

const inputList = [
    {
        id: "firstName",
        name: "firstName",
        label: "First Name",
        type: "text",
        placeholder: "Enter First Name",
        typeField: "input",
        autoComplete: "on"
    },
    {
        id: "lastName",
        name: "lastName",
        type: "text",
        label: "Last Name",
        placeholder: "Enter Last Name",
        typeField: "input",
        autoComplete: "on"
    },
    {
        id: "email",
        name: "email",
        type: "email",
        label: "Email",
        placeholder: "Enter your Email",
        typeField: "input",
        autoComplete: "on"
    },
    {
        id: "phone",
        name: "phone",
        type: "tel",
        label: "Phone Number",
        placeholder: "Enter Phone Number",
        typeField: "input",
        autoComplete: "on"
    },
    {
        id: "message",
        name: "message",
        type: "text",
        label: "Message",
        placeholder: "Enter your Message",
        typeField: "textarea",
        autoComplete: "on"
    }
];
const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    contditions: false
};
const validationSchema = Yup.object({
    firstName: Yup.string()
        .min(2, "First name is too short")
        .required("Please enter your first name"),

    lastName: Yup.string()
        .min(2, "Last name is too short")
        .required("Please enter your last name"),

    email: Yup.string()
        .email("Please enter a valid email address")
        .required("Email address is required"),

    phone: Yup.string()
        .matches(/^[0-9]+$/, "Phone number must contain only digits")
        .min(10, "Phone number is too short")
        .required("Phone number is required"),

    message: Yup.string()
        .min(10, "Message must be at least 10 characters")
        .required("Please enter your message"),

    contditions: Yup.boolean()
        .oneOf([true], "You must accept the terms and conditions")
});

function ContactForm() {
    return (
        <section className="contact-form py-5 md:py-10">
            <div className="container">
                <div className="content-grid grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-10">
                    <div className="contact-hero">
                        <div className="text-wrapper mb-5">
                            <h2 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl mb-3">Welcome to our support page!</h2>
                            <p>We're here to help you with any problems you may be having with our product.</p>
                        </div>
                        <div className="contact-hero-img rounded-md overflow-hidden border-4 border-black-15 bg-black-06">
                            <img
                                src={heroImage}
                                alt="Contact Hero"
                                className="object-cover w-full h-auto"
                            />
                        </div>
                    </div>
                    <div className="contact-form lg:col-span-2 rounded-md bg-black-06 border border-black-15 p-3 lg:p-5">
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={(values, { setSubmitting }) => {
                                setTimeout(() => {
                                    alert(JSON.stringify(values, null, 2));
                                    setSubmitting(false);
                                }, 400);
                            }}
                        >
                            {({
                                values,
                                touched,
                                errors,
                                handleChange,
                                handleBlur,
                                handleSubmit,
                                isSubmitting
                            }) => (
                                <form onSubmit={handleSubmit}>
                                    {/* Inputs */}
                                    <div className="inputs-wrapper grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                                        {
                                            inputList.map((field, index) => (<Input
                                                key={index}
                                                values={values}
                                                label={field.label}
                                                className={field.typeField === "textarea" ? "md:col-span-2" : ""}
                                                typeField={field.typeField}
                                                {...{
                                                    ...field,
                                                    onChange: handleChange,
                                                    onBlur: handleBlur
                                                }}
                                            />))
                                        }
                                    </div>
                                    {/* Submit */}
                                    <div className="form-submit flex md:items-center justify-between max-md:flex-col gap-3">
                                        {/* Submit Conditions */}
                                        <div className="submit-conditions flex items-center gap-2">
                                            <label>
                                                <input
                                                    type="checkbox"
                                                    id="contditions"
                                                    name="contditions"
                                                    onChange={handleChange}
                                                    className="hidden peer"
                                                />
                                                <div className={`checkbox w-6.5 h-6.5 rounded-md flex items-center justify-center transition duration-300 ease-in-out border ${errors.contditions && touched.contditions ? "border-red-45" : "border-black-15"} peer-checked:border-white peer-checked:*:scale-100 cursor-pointer text-sm`}>
                                                    <FontAwesomeIcon icon={faCheck} className="scale-0 transition duration-300 ease-in-out" />
                                                </div>
                                            </label>
                                            <label htmlFor="contditions">
                                                <p>I agree with Terms of Use and Privacy Policy</p>
                                            </label>
                                        </div>
                                        {/* Sbumit Btn */}
                                        <Button
                                            type="submit"
                                            className="submit-btn"
                                            disabled={isSubmitting}
                                        >
                                            Send Message
                                        </Button>
                                    </div>
                                </form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactForm;