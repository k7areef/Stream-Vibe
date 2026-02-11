import { Link } from "react-router-dom";

/**
 * @typedef {Object} CustomButtonProps
 * @property {string} [to]
 * @property {'primary' | 'secondary'} [variant]
 * @property {React.ReactNode} children
 * @property {React.ButtonHTMLAttributes<HTMLButtonElement> | import("react-router-dom").LinkProps} [props]
 */

/**
 * @param {ButtonProps & React.HTMLAttributes<HTMLElement>} props
 * @typedef {CustomButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement> & import("react-router-dom").LinkProps} ButtonProps
 */

function Button({ variant = "primary", to = "", children, ...props }) {

    const variants = {
        primary: "bg-red-45 text-white sm:hover:bg-red-50",
        secondary: "bg-black-06 text-white border border-black-15 sm:hover:bg-black-12",
    }

    const className = `px-4 py-2 sm:py-3 rounded-md font-semibold transition duration-300 ease-in-out  ${variants[variant]} ${props.className}`;

    if (to) {
        return (
            <Link
                to={to}
                {...props}
                className={className}
            >
                {children}
            </Link>
        )
    }

    return (
        <button
            {...props}
            className={className}
            type={props.type || "button"}
        >
            {children}
        </button>
    )
}

export default Button;