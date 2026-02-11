import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function NavSearchLink() {
    return (
        <Link
            to={'/search'}
            className="nav-link text-2xl"
        >
            <FontAwesomeIcon icon={faSearch} />
        </Link>
    )
}

export default NavSearchLink;