import React from "react";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NavNotifications() {

    const [opened, setOpened] = React.useState(false);
    const ref = React.useRef(null);

    React.useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                setOpened(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="nav-notifications relative" ref={ref}>
            <button
                title="Notifications"
                aria-label="Notifications"
                onClick={() => setOpened(prev => !prev)}
                className={`nav-notifications-button text-2xl transition duration-300 ease-in-out ${opened ? "text-red-45" : ""}`}
            >
                <FontAwesomeIcon icon={faBell} />
                <span className="sr-only">Notifications</span>
            </button>
            {/* Notification Box */}
            <div
                className={`grid transition-all duration-300 ease-in-out absolute z-50 right-0 top-14 min-w-70 ${opened ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0 pointer-events-none"
                    }`}
            >
                <div className="overflow-hidden">
                    <div className={`notification-box bg-black-06 p-5 border-2 border-black-12 min-h-50 rounded-md`}>
                        Notification Box
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavNotifications;