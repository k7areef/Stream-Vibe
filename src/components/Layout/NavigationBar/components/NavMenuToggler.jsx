import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function NavMenuToggler({ menuOpened = false, onClick = () => { } }) {
    return (
        <button
            aria-label={menuOpened ? "Close Menu" : "Open Menu"}
            title={menuOpened ? "Close Menu" : "Open Menu"}
            onClick={onClick}
            className="nav-menu-toggler-button text-2xl lg:hidden relative w-8 h-8 flex items-center justify-center"
        >
            <FontAwesomeIcon icon={faBars} className={`absolute left-1/2 top-1/2 -translate-1/2 transition duration-300 ease-in-out ${menuOpened ? "opacity-0 rotate-90" : "opacity-100 rotate-0"}`} />
            <FontAwesomeIcon icon={faXmark} className={`absolute left-1/2 top-1/2 -translate-1/2 transition duration-300 ease-in-out text-red-45 ${menuOpened ? "opacity-100 rotate-90" : "opacity-0 rotate-90"}`} />
        </button>
    )
}

export default NavMenuToggler;