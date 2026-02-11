import React from "react";
import { NavLink } from "react-router-dom";

const links = [
    { to: "/", label: "Home" },
    { to: "/movies-and-shows", label: "Movies & Shows" },
    { to: "/support", label: "Support" },
    { to: "/subscribtion", label: "Subscribtion" },
]

function NavMenu({ menuOpened = false, handleClose = () => { } }) {
    return (
        <div className="nav-menu max-lg:w-full max-lg:max-lg:order-1">
            <div
                className={`grid transition-all rounded-xl duration-300 ease-in-out bg-black-06 border-4 lg:border-black-12 lg:p-0 lg:px-4 lg:py-2 ${menuOpened ? "max-lg:grid-rows-[1fr] max-lg:opacity-100 max-lg:mt-5 max-lg:p-4 max-lg:border-black-12" : "max-lg:grid-rows-[0fr] max-lg:opacity-0 max-lg:border-transparent"
                    }`}
            >
                <div className="overflow-hidden">
                    <ul className="flex lg:items-center gap-2 max-lg:flex-col">
                        {
                            links.map((link, index) => (
                                <li key={index}>
                                    <NavLink
                                        to={link.to}
                                        onClick={handleClose}
                                        className={({ isActive }) => `nav-link block py-2 px-4 text-xl transition rounded-md ${isActive ? "font-medium bg-black-10 text-white" : "text-grey-75 sm:hover:text-white sm:hover:bg-black-12"}`}
                                    >
                                        {link.label}
                                    </NavLink>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavMenu;