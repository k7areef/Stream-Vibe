import { RatingFooter, ReleaseFooter } from "@components/Sections/common/MediaFooters";
import MediaContainer from "@components/Sections/MediaContainer";
import MediaSlider from "@components/Sections/MediaSlider";
import VideoTrailer from "@components/Sections/VideoTrailer";
import useChangeTitle from "@hooks/useChangeTitle";
import {
    GET_MEDIA_GENRES,
    GET_MEDIA_ON_THE_AIR,
    GET_MEDIA_POPULAR,
    GET_MEDIA_TOP_RATED,
    GET_MEDIA_TRENDING,
    GET_MEDIA_UPCOMING
} from "@utils/api";

function MoviesAndShowsPage() {
    useChangeTitle("Movies & Shows");

    const movieType = "movie";
    const showType = "show";

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
        <div className="movies-and-shows-page">
            <main>
                {/* Video Trailer */}
                <VideoTrailer />
                {/* Movies Media Container */}
                <MediaContainer
                    mediaTitle="Movies"
                >
                    <MediaSlider
                        type={"genre"}
                        mediaType={movieType}
                        mediaTitle="Our Genres"
                        queryKey={["MOVIES_GENRES"]}
                        queryFn={() => GET_MEDIA_GENRES(movieType)}
                        customBreakpoints={SLIDER_CONFIGS.DEFAULT_5}
                    />
                    <MediaSlider
                        type={"media"}
                        mediaType={movieType}
                        mediaTitle="Popular Top 10"
                        queryKey={["MOVIES_POPULAR"]}
                        queryFn={() => GET_MEDIA_POPULAR(movieType)}
                        customBreakpoints={SLIDER_CONFIGS.DEFAULT_5}
                        renderFooter={(media, isLoading) => <RatingFooter media={media} isLoading={isLoading} />}
                    />
                    <MediaSlider
                        type={"media"}
                        mediaType={movieType}
                        mediaTitle="Trending Now"
                        queryKey={["MOVIES_TRENDING"]}
                        queryFn={GET_MEDIA_TRENDING(movieType)}
                        customBreakpoints={SLIDER_CONFIGS.DEFAULT_5}
                        renderFooter={(media, isLoading) => <RatingFooter media={media} isLoading={isLoading} />}
                    />
                    <MediaSlider
                        type={"media"}
                        mediaType={movieType}
                        mediaTitle="New Releases"
                        queryKey={["MOVIES_UPCOMING"]}
                        queryFn={() => GET_MEDIA_UPCOMING(movieType)}
                        customBreakpoints={SLIDER_CONFIGS.DEFAULT_5}
                        renderFooter={(media, isLoading) => <ReleaseFooter media={media} isLoading={isLoading} />}
                    />
                    <MediaSlider
                        type={"media"}
                        mediaType={movieType}
                        mediaTitle="Must - Watch Movies"
                        queryKey={["MOVIES_TOP_RATED"]}
                        queryFn={() => GET_MEDIA_TOP_RATED(movieType)}
                        customBreakpoints={SLIDER_CONFIGS.COMPACT_4}
                        renderFooter={(media, isLoading) => <RatingFooter media={media} isLoading={isLoading} />}
                    />
                </MediaContainer>
                {/* Shows Media Container */}
                <MediaContainer
                    mediaTitle="Shows"
                >
                    <MediaSlider
                        type={"genre"}
                        mediaType={showType}
                        mediaTitle="Our Genres"
                        queryKey={["SHOWS_GENRES"]}
                        queryFn={() => GET_MEDIA_GENRES("tv")}
                        customBreakpoints={SLIDER_CONFIGS.DEFAULT_5}
                    />
                    <MediaSlider
                        type={"media"}
                        mediaType={showType}
                        queryKey={["SHOWS_POPULAR"]}
                        queryFn={() => GET_MEDIA_POPULAR("tv")}
                        mediaTitle="Popular Top 10"
                        customBreakpoints={SLIDER_CONFIGS.DEFAULT_5}
                        renderFooter={(media, isLoading) => <RatingFooter media={media} isLoading={isLoading} />}
                    />
                    <MediaSlider
                        type={"media"}
                        mediaType={showType}
                        mediaTitle="Trending Shows Now"
                        queryKey={["SHOWS_TRENDING"]}
                        queryFn={() => GET_MEDIA_TRENDING("tv")}
                        customBreakpoints={SLIDER_CONFIGS.DEFAULT_5}
                        renderFooter={(media, isLoading) => <RatingFooter media={media} isLoading={isLoading} />}
                    />
                    <MediaSlider
                        type={"media"}
                        mediaType={showType}
                        mediaTitle="New Released Shows"
                        queryKey={["SHOWS_ON_THE_AIR"]}
                        queryFn={() => GET_MEDIA_ON_THE_AIR("tv")}
                        customBreakpoints={SLIDER_CONFIGS.DEFAULT_5}
                        renderFooter={(media, isLoading) => <ReleaseFooter media={media} isLoading={isLoading} />}
                    />
                    <MediaSlider
                        type={"media"}
                        mediaType={showType}
                        mediaTitle="Must - Watch Shows"
                        queryKey={["SHOWS_TOP_RATED"]}
                        queryFn={() => GET_MEDIA_TOP_RATED("tv")}
                        customBreakpoints={SLIDER_CONFIGS.COMPACT_4}
                        renderFooter={(media, isLoading) => <RatingFooter media={media} isLoading={isLoading} />}
                    />
                </MediaContainer>
            </main>
        </div>
    )
}

export default MoviesAndShowsPage;