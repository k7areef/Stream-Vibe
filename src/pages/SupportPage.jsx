import ContactForm from "@components/Sections/ContactForm";
import Faqs from "@components/Sections/Faqs";
import useChangeTitle from "@hooks/useChangeTitle";

function SupportPage() {
    // Change title of page:
    useChangeTitle("Support")
    return (
        <div className="support-page">
            <main>
                <ContactForm />
                <Faqs />
            </main>
        </div>
    )
}

export default SupportPage;