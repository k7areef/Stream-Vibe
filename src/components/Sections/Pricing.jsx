import data from "@data/pricing.json";
import SectionHeader from "./common/SectionHeader";
import Button from "@components/UI/Button";
import React from "react";

function Pricing() {

    const { title, description, pricingList } = data;
    const [currentPricing, setCurrentPricing] = React.useState("monthly")

    return (
        <section className="pricing py-5 md:py-10">
            <div className="container">
                <SectionHeader
                    title={title}
                    description={description}
                >
                    <div className="pricing-togglers flex items-center gap-2 bg-black-06 border border-black-15 rounded-md p-3">
                        <button
                            title="Monthly"
                            aria-label="Monthly"
                            onClick={() => setCurrentPricing("monthly")}
                            className={`py-2 px-4 rounded-md w-full transition duration-300 ease-in-out ${currentPricing === "monthly" ? "bg-black-12" : ""}`}
                        >
                            Monthly
                        </button>
                        <button
                            title="Yearly"
                            aria-label="Yearly"
                            onClick={() => setCurrentPricing("yearly")}
                            className={`py-2 px-4 rounded-md w-full transition duration-300 ease-in-out ${currentPricing === "yearly" ? "bg-black-12" : ""}`}
                        >
                            Yearly
                        </button>
                    </div>
                </SectionHeader>
                <div className="devices-grid grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                    {
                        pricingList.map((pricing, index) => (
                            <div className="pricing-item flex flex-col gap-5 bg-black-10 border border-black-15 rounded-md p-5" key={pricing.id || index}>
                                <div className="text-wrapper">
                                    <h3 className="text-lg sm:text-xl font-bold mb-3">{pricing.name}</h3>
                                    <p className="line-clamp-5">{pricing.description}</p>
                                </div>
                                <div className="pricing-price flex items-end gap-1 mt-auto">
                                    <h3 className="font-bold text-xl sm:text-2xl lg:text-3xl">${pricing.price[currentPricing]}</h3>
                                    <p className="font-medium">/{String(currentPricing).replaceAll("ly", "")}</p>
                                </div>
                                <div className="pricing-actions flex items-center gap-3 max-[800px]:flex-col">
                                    <Button
                                        className="w-full"
                                        variant="secondary"
                                    >
                                        Start Free Trial
                                    </Button>
                                    <Button
                                        className="w-full"
                                    >
                                        Choose Plan
                                    </Button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Pricing;