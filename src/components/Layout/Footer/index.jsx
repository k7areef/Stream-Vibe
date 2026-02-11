import { Link } from "react-router-dom";
import FooterCopyright from "./components/FooterCopyright";
import data from "@data/footer.json";

function Footer() {
    return (
        <footer className="bg-black-06">
            <div className="container py-5 md:py-10">
                <div className="content-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5">
                    {
                        data.linksColumns.map((dataItem, index) => (<div className="links-column space-y-2" key={index}>
                            <h3 className="font-semibold text-lg">{dataItem.title}</h3>
                            <ul>
                                {
                                    dataItem.links.map((link, index) => (<li key={index}>
                                        <Link
                                            to={link.to}
                                            className="text-grey-60 transition sm:hover:text-white inline-block py-1 font-medium"
                                        >{link.label}</Link>
                                    </li>))
                                }
                            </ul>
                        </div>))
                    }
                </div>
            </div>
            <FooterCopyright />
        </footer>
    )
}

export default Footer;