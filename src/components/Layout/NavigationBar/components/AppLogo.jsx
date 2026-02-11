import { Link } from "react-router-dom";
import logoMobile from "@assets/logo/mobile.png";
import logoLaptop from "@assets/logo/laptop.png";
import logoDesktop from "@assets/logo/desktop.png";

function AppLogo() {
    return (
        <Link
            to={'/'}
            className="app-logo"
        >
            <picture className="app-logo">
                <source media="(min-width: 1024px)" srcSet={logoDesktop} />
                <source media="(min-width: 768px)" srcSet={logoLaptop} />
                <img src={logoMobile} alt="App Logo" />
            </picture>
        </Link>
    )
}

export default AppLogo;