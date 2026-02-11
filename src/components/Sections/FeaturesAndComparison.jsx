import data from "@data/featuresAndComparison.json";
import SectionHeader from "./common/SectionHeader";
import React from "react";
function FeaturesAndComparison() {

    const { title, description } = data;

    return (
        <section className="features-and-comparison py-5 md:py-10">
            <div className="container">
                <SectionHeader
                    title={title}
                    description={description}
                />
            </div>
        </section>
    )
}

export default FeaturesAndComparison;