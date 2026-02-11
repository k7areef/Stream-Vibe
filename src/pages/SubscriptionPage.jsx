import FeaturesAndComparison from "@components/Sections/FeaturesAndComparison";
import Pricing from "@components/Sections/Pricing";
import useChangeTitle from "@hooks/useChangeTitle";

function SubscriptionPage() {
    // Change title of page:
    useChangeTitle("Subscription")
    return (
        <div className="subscription-page">
            <main>
                <Pricing />
                {/* <FeaturesAndComparison /> */}
            </main>
        </div>
    )
}

export default SubscriptionPage;