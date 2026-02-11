import ContactForm from "@components/Sections/ContactForm";
import Faqs from "@components/Sections/Faqs";
import useChangeTitle from "@hooks/useChangeTitle";

function SupportPage() {
    // Change title of page:
    useChangeTitle("Support")
    return (
        <div className="support-page">
            <ContactForm />
            <Faqs />
        </div>
    )
}

export default SupportPage;