import React from "react";
import Button from "@components/UI/Button";
import { faArrowLeft, faArrowRight, faPause, faPlay, faPlus, faSpinner, faThumbsUp, faVolumeHigh, faVolumeMute } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useQuery } from "@tanstack/react-query";
import { GET_MEDIA_TRENDING, GET_MEDIA_VIDEIOS } from "@utils/api";
import YouTube from "react-youtube";
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide, useSwiper, useSwiperSlide } from 'swiper/react';
import { LazyLoadImage } from "react-lazy-load-image-component";

const MediaSlide = ({ media = {}, isPaused = false, setIsPaused = () => { }, isMute = true, setIsMute = () => { } }) => {

    const [isFavorited, setIsFavorited] = React.useState(false);
    const [isPlaying, setIsPlaying] = React.useState(false);
    const [videoKey, setVideoKey] = React.useState("");
    const [player, setPlayer] = React.useState(null);
    const swiper = useSwiper();
    const swiperSlide = useSwiperSlide();

    // Get videos data:
    const { data, isLoading } = useQuery({
        queryKey: ["MOVIES_VIDEIOS", media.id],
        queryFn: () => GET_MEDIA_VIDEIOS(media.media_type, media.id),
        refetchOnWindowFocus: false,
        enabled: (swiperSlide.isActive && media.id !== undefined)
    });

    // Get video key:
    React.useEffect(() => {
        if (data && data.results.length > 0) {
            const officialTrailer = data.results.find(
                (vid) => vid.type === "Trailer" && vid.site === "YouTube"
            );
            const fallbackVideo = data.results.find((vid) => vid.type === "Teaser");
            const finalKey = officialTrailer?.key || fallbackVideo?.key || data.results[0].key;
            setVideoKey(finalKey);
        }
    }, [data]);

    // Controls:
    React.useEffect(() => {
        const timeout = setTimeout(() => {
            if (player && player.g) {
                if (swiperSlide.isActive && !isPaused) {
                    player.playVideo();
                } else {
                    player.pauseVideo();
                }
            }
        }, 100);

        return () => clearTimeout(timeout);
    }, [isPaused, player, swiperSlide.isActive]);

    React.useEffect(() => {
        if (player && player.g) {
            if (isMute) {
                player.mute();
            } else {
                player.unMute();
            }
        }
    }, [isMute, player]);

    return (
        <>
            {
                videoKey &&
                <div className="relative w-full aspect-square md:aspect-video overflow-hidden">
                    <YouTube
                        videoId={videoKey}
                        iframeClassName="aspect-square md:aspect-video"
                        onReady={(event) => setPlayer(event.target)}
                        onPlay={() => {
                            setIsPlaying(true);
                            setIsPaused(false);
                        }}
                        onPause={() => {
                            setIsPlaying(false);
                            setIsPaused(true);
                        }}
                        onEnd={() => swiper.slideNext()}
                        opts={{
                            width: '100%',
                            height: '100%',
                            playerVars: {
                                controls: 0,
                                disablekb: 1,
                                enablejsapi: 1,
                                start: 0,
                                autoplay: swiperSlide.isActive && !isPaused ? 1 : 0,
                                mute: 1,
                                modestbranding: 1,
                                rel: 0,
                                origin: window.location.origin,
                                iv_load_policy: 3
                            }
                        }}
                    />
                </div>
            }
            <div className={`image-container absolute aspect-square md:aspect-video left-0 top-0 w-full h-full z-5 transition duration-500 ease-in-out ${data ? "opacity-0 translate-y-5 delay-1000" : "opacity-100 translate-y-0"}`}>
                <LazyLoadImage
                    effect="blur"
                    className="w-full h-full object-cover"
                    placeholderSrc={`https://image.tmdb.org/t/p/original/${media.backdrop_path}`}
                    src={`https://image.tmdb.org/t/p/original/${media.backdrop_path}`}
                    alt={media.title || media.name}
                />
            </div>
            <div
                className="content-overlay absolute z-10 left-0 top-0 w-full h-full flex items-end px-10 pb-20"
            >
                <div
                    className={`content-overlay-wrapper w-full flex flex-col gap-2 sm:gap-5 items-center`}
                >
                    <div className={`text-wrapper text-center ${isPlaying ? "opacity-0" : ""} transition duration-300 ease-in-out group-hover:opacity-100`}>
                        <h2 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-2xl mb-2">{media.title || media.name}</h2>
                        <p className="line-clamp-1 sm:line-clamp-2 md:line-clamp-3 lg:line-clamp-4 xl:line-clamp-5 2xl:line-clamp-none">{media.overview}</p>
                    </div>
                    <div className={`actions-wrapper ${isPlaying ? "translate-y-5 opacity-0" : ""} transition duration-300 ease-in-out sm:group-hover:translate-y-0 sm:group-hover:opacity-100 flex items-center justify-center gap-x-1 gap-y-2 flex-wrap`}>
                        <Button
                            to={'/movies-and-shows/' + (media.media_type === "movie" ? "movie" : "show") + '/' + media.id}
                            variant="primary"
                            title="Play Now"
                            aria-label="Play Now"
                            className="flex items-center justify-center gap-2 max-sm:w-full max-sm:order-1"
                        >
                            <FontAwesomeIcon icon={faPlay} />
                            <span>Start Watch</span>
                        </Button>
                        <Button
                            variant="secondary"
                            title="Watch Later"
                            aria-label="Watch Later"
                        >
                            <FontAwesomeIcon icon={faPlus} />
                            <span className="sr-only">Watch Later</span>
                        </Button>
                        <Button
                            variant="secondary"
                            title="Add to Faviorets"
                            aria-label="Add to Faviorets"
                            onClick={() => setIsFavorited(prev => !prev)}
                            className={`${isFavorited ? "text-red-45!" : ""}`}
                        >
                            <FontAwesomeIcon icon={faThumbsUp} />
                            <span className="sr-only">Add to Faviorets</span>
                        </Button>
                        <Button
                            variant="secondary"
                            title={isMute ? "Unmute" : "Mute"}
                            aria-label={isMute ? "Unmute" : "Mute"}
                            onClick={() => setIsMute(prev => !prev)}
                        >
                            <FontAwesomeIcon icon={isMute ? faVolumeMute : faVolumeHigh} />
                            <span className="sr-only">{isMute ? "Unmute" : "Mute"}</span>
                        </Button>
                        <Button
                            variant="secondary"
                            disabled={isLoading}
                            title={isLoading ? "Loading..." : isPlaying ? "Pause" : "Play"}
                            aria-label={isLoading ? "Loading..." : isPlaying ? "Pause" : "Play"}
                            onClick={() => setIsPaused(prev => !prev)}
                        >
                            <FontAwesomeIcon icon={isLoading ? faSpinner : isPlaying ? faPause : faPlay} className={`${isLoading ? "animate-spin" : ""}`} />
                            <span className="sr-only">{isLoading ? "Loading..." : isPlaying ? "Pause" : "play"}</span>
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
};

function VideoTrailer() {

    const { data, isLoading } = useQuery({
        queryKey: ["MOVIES_TRENDING"],
        queryFn: () => GET_MEDIA_TRENDING("all", "day"),
        refetchOnWindowFocus: false
    });
    const [isMute, setIsMute] = React.useState(true);
    const [isPaused, setIsPaused] = React.useState(false);

    return (
        <section className="video-trailer py-5 md:py-10">
            <div className="container">
                <div className="video-trailer-wrapper rounded-md border border-black-15 aspect-square md:aspect-video overflow-hidden relative group">
                    {/* Swiper */}
                    <Swiper
                        // install Swiper modules
                        modules={[Navigation, Pagination]}
                        slidesPerView={1}
                        navigation={{
                            nextEl: '.video-trailer-next-button',
                            prevEl: '.video-trailer-previous-button'
                        }}
                        onSlideChangeTransitionEnd={() => {
                            setIsPaused(false);
                        }}
                        centeredSlides
                        initialSlide={Number(sessionStorage.getItem("videoTrailerIndex") || 0)}
                        onSlideChange={(swiper) => sessionStorage.setItem("videoTrailerIndex", swiper.realIndex)}
                        pagination={{
                            el: '.pagination',
                            clickable: true,
                            dynamicBullets: true,
                            dynamicMainBullets: 1,
                            renderBullet: (_, className) => {
                                return `<span class="${className} w-4! h-1 bg-red-45! rounded-sm! transition-all duration-300 [&.swiper-pagination-bullet-active]:w-6!"></span>`;
                            }
                        }}
                    >
                        {
                            isLoading ? (
                                Array.from({ length: 20 }).map((_, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="aspect-square md:aspect-video bg-black-20 animate-pulse rounded-md"></div>
                                    </SwiperSlide>
                                ))
                            ) : (
                                data.results.map((media, index) => (
                                    <SwiperSlide key={index} className="relative">
                                        <MediaSlide
                                            media={media}
                                            isMute={isMute}
                                            setIsMute={setIsMute}
                                            isPaused={isPaused}
                                            setIsPaused={setIsPaused}
                                        />
                                    </SwiperSlide>
                                ))
                            )
                        }
                    </Swiper>
                    {/* Swiper Controllers */}
                    <div className="swiper-controllers absolute bottom-5 left-0 w-full flex items-center justify-between gap-1 px-10 z-10">
                        {/* Previous Button */}
                        <Button
                            title="Previous"
                            aria-label="Previous"
                            variant="secondary"
                            className="video-trailer-previous-button"
                        >
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </Button>
                        {/* Pagination */}
                        <div className="pagination transform-none!"></div>
                        {/* Next Button */}
                        <Button
                            title="Next"
                            aria-label="Next"
                            variant="secondary"
                            className="video-trailer-next-button"
                        >
                            <FontAwesomeIcon icon={faArrowRight} />
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default VideoTrailer;