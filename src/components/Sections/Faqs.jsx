import data from "@data/faqs.json";
import SectionHeader from "./common/SectionHeader";
import Button from "@components/UI/Button";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

function Faqs() {

    const { title, description, faqsList } = data;
    const [faqOpened, setFaqOpened] = React.useState(null);

    return (
        <section className="faqs py-5 md:py-10">
            <div className="container">
                <SectionHeader
                    title={title}
                    description={description}
                >
                    <Button className="text-nowrap max-sm:w-full">Ask a Question</Button>
                </SectionHeader>
                <div className="faqs-grid grid grid-cols-1 md:grid-cols-2 gap-5">
                    {
                        faqsList.map((faq, index) => (
                            <div className="faq-item" key={faq.id || index}>
                                <button
                                    className="w-full text-start"
                                    aria-expanded={faqOpened === faq.id}
                                    onClick={() => setFaqOpened(prev => prev === faq.id ? null : faq.id)}
                                >
                                    <div className="faq-item-wrapper flex items-center gap-3 mb-5">
                                        <div className="faq-num shrink-0 bg-black-12 border border-black-15 rounded-md p-3 font-semibold text-lg">
                                            {String((faq.id || (index + 1))).padStart(2, "0")}
                                        </div>
                                        <div className="text-wrapper w-full">

                                            <h3 className={`font-medium text-lg md:text-xl cursor-pointer transition duration-300 ease-in ${faqOpened === faq.id ? "text-red-45" : ""}`}>{faq.question}</h3>
                                            <div
                                                className={`grid transition-all duration-300 ease-in-out ${faqOpened === faq.id ? "grid-rows-[1fr] opacity-100 mt-2" : "grid-rows-[0fr] opacity-0"
                                                    }`}
                                            >
                                                <p className="overflow-hidden">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </div>
                                        <div className={`faq-icon-state relative w-10 h-10 flex items-center justify-center transition duration-300 ease-in-out text-2xl ${faqOpened === faq.id ? "rotate-90" : ""}`}>
                                            <FontAwesomeIcon icon={faMinus} className={`absolute left-1/2 top-1/2 -translate-1/2 transition duration-300 ease-in-out ${faqOpened === faq.id ? "opacity-0" : "opacity-100"}`} />
                                            <FontAwesomeIcon icon={faPlus} className={`absolute left-1/2 top-1/2 -translate-1/2 transition duration-300 ease-in-out text-red-45 ${faqOpened === faq.id ? "opacity-100" : "opacity-0"}`} />
                                        </div>
                                    </div>
                                </button>
                                <div className="bg-linear-to-r from-black-06 via-red-45/40 to-black-06 h-px w-full"></div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Faqs