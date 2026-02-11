import React from "react";
import NavMenu from "./components/NavMenu";
import NavNotifications from "./components/NavNotifications";
import NavMenuToggler from "./components/NavMenuToggler";
import NavSearchLink from "./components/NavSearchLink";
import AppLogo from "./components/AppLogo";

function NavigraitonBar() {

    const [menuOpened, setMenuOpened] = React.useState(false);
    const handleClose = React.useCallback(() => {
        setMenuOpened(false);
    }, []);

    return (
        <nav className="py-5">
            <div className="container flex items-center justify-between max-lg:flex-wrap">
                {/* App Logo */}
                <AppLogo />
                {/* Nav Menu */}
                <NavMenu
                    handleClose={handleClose}
                    menuOpened={menuOpened}
                />
                {/* Nav Utils */}
                <div className="nav-utils flex items-center gap-3">
                    {/* Search */}
                    <NavSearchLink />
                    {/* Notifications */}
                    <NavNotifications />
                    {/* Menu Toggler */}
                    <NavMenuToggler
                        menuOpened={menuOpened}
                        onClick={() => setMenuOpened(prev => !prev)}
                    />
                </div>
            </div>
        </nav>
    )
}

export default NavigraitonBar;