import { Link } from "react-router-dom";
import data from "@data/footer.json";
import React from "react";

function FooterCopyright() {
    return (
        <div className="copyright">
            <div className="container">
                <hr className="border-black-15" />
                <div className="copyright-content py-5 flex items-center justify-between max-md:flex-col gap-2">
                    <p>@{new Date().getFullYear()} {data.copyright.text}</p>
                    <ul className="flex items-center justify-center gap-2">
                        {
                            data.copyright.links.map((link, index) => (<React.Fragment key={index}>
                                {
                                    index > 0 && <li><span className="text-grey-60">|</span></li>
                                }
                                <li>
                                    <Link to={link.to} >
                                        <p className="transition sm:hover:text-white!">{link.label}</p>
                                    </Link>
                                </li>
                            </React.Fragment>))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default FooterCopyright;