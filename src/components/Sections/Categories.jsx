import { GET_MEDIA_GENRES } from "@utils/api";
import MediaSlider from "./MediaSlider";

function Categories() {

    const SLIDER_CONFIGS = {
        DEFAULT_5: {
            0: { slidesPerView: 1, slidesPerGroup: 1 },
            610: { slidesPerView: 1.7, slidesPerGroup: 2 },
            900: { slidesPerView: 2.7, slidesPerGroup: 3 },
            1024: { slidesPerView: 3, slidesPerGroup: 3 },
            1280: { slidesPerView: 4, slidesPerGroup: 4 },
            1536: { slidesPerView: 5, slidesPerGroup: 5 }
        },
        COMPACT_4: {
            0: { slidesPerView: 1, slidesPerGroup: 1 },
            610: { slidesPerView: 1.7, slidesPerGroup: 2 },
            900: { slidesPerView: 2.7, slidesPerGroup: 3 },
            1024: { slidesPerView: 3, slidesPerGroup: 3 },
            1280: { slidesPerView: 4, slidesPerGroup: 4 }
        }
    };

    return (
        <section className="categories py-5 md:py-10">
            <div className="container">
                <MediaSlider
                    type={"genre"}
                    mediaDescription="Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new"
                    mediaType={'movie'}
                    mediaTitle="Explore our wide variety of categories"
                    queryFn={() => GET_MEDIA_GENRES('movie')}
                    queryKey={["MOVIES_GENRES"]}
                    customBreakpoints={SLIDER_CONFIGS.DEFAULT_5}
                />
            </div>
        </section>
    )
}

export default Categories;