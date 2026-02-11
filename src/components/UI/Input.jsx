import { ErrorMessage } from "formik";

function Input({ label = "", typeField = "input", values = {}, className = "", ...field }) {

    const sharedClassName = `w-full p-3 rounded-md bg-black-08 border border-black-15 focus:border-red-45 transition duration-300 ease-in-out`;

    if (typeField === "textarea" || typeField === "select") {
        delete field.type
    };

    return (
        <div className={`input-field ${className}`}>
            {label && <label
                htmlFor={field.id}
                className="block w-fit mb-2"
            >{label}</label>}
            {
                typeField === "input" ? (
                    <input
                        {...field}
                        className={sharedClassName}
                        value={values[field.name]}
                    />
                ) : typeField === "textarea" ? (
                    <textarea
                        {...field}
                        className={`${sharedClassName} resize-none h-32`}
                        value={values[field.name]}
                    ></textarea>
                ) : typeField === "select" ? (
                    <select>
                        <option>Option 1</option>
                        <option>Option 2</option>
                        <option>Option 3</option>
                    </select>
                ) : null
            }
            <ErrorMessage name={field.name} className="mt-2 text-red-45" component={"div"} />
        </div>
    )
}

export default Input;