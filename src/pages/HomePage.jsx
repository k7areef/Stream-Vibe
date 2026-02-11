import Categories from "@components/Sections/Categories";
import Devices from "@components/Sections/Devices";
import Faqs from "@components/Sections/Faqs";
import HeroSection from "@components/Sections/HeroSection";
import Pricing from "@components/Sections/Pricing";
import useChangeTitle from "@hooks/useChangeTitle";

function HomePage() {
    // Change title of page:
    useChangeTitle("Home")
    return (
        <div className="home-page">
            <main>
                {/* <HeroSection /> */}
                <Categories />
                <Devices />
                <Faqs />
                <Pricing />
            </main>
        </div>
    )
}

export default HomePage;