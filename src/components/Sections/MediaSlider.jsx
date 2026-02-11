import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navigation, Scrollbar, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import GenreCard from "@components/Media/GenreCard";
import MediaCard from "@components/Media/MediaCard";
import { useQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";

function MediaSlider({ type = "genre", mediaType = "movie", mediaTitle = "", mediaDescription = "", queryKey = [""], queryFn = () => { }, renderFooter = () => { }, customBreakpoints = {} }) {

    const { ref, inView } = useInView({
        triggerOnce: true,
        rootMargin: '200px'
    });

    const previousClass = `${mediaType}-${String(mediaTitle).toLowerCase().replaceAll(" ", "-")}-preious`;
    const nextClass = `${mediaType}-${String(mediaTitle).toLowerCase().replaceAll(" ", "-")}-next`;
    const scrollClass = `${mediaType}-${String(mediaTitle).toLowerCase().replaceAll(" ", "-")}-scroll`;
    const paginationClass = `${mediaType}-${String(mediaTitle).toLowerCase().replaceAll(" ", "-")}-pagination`;
    const navigationButtonStyle = 'bg-black-10 border border-black-12 rounded-md p-3 transition sm:hover:bg-black-12';

    const { data, isLoading } = useQuery({
        queryKey,
        queryFn,
        enabled: Boolean(inView),
        refetchOnWindowFocus: false
    });

    return (
        <section className="media-slider" ref={ref} style={{ minHeight: '300px' }}>
            {/* Header */}
            <div className="header flex items-center justify-between mb-5 gap-5">
                <div className="text-container">
                    <h2 className="font-bold text-lg sm:text-xl md:text-2xl">{mediaTitle}</h2>
                    {mediaDescription && <p className="mt-2">{mediaDescription}</p>}
                </div>
                {/* Slider Navigations */}
                <div className="slider-navigation shrink-0 hidden md:flex items-center gap-3 bg-black-08 border border-black-12 rounded-md py-2 px-4">
                    {/* Previous Button */}
                    <button
                        title="Previous Slide"
                        aria-label="Previous Slide"
                        className={`${previousClass} ${navigationButtonStyle}`}
                    >
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </button>
                    {/* Dots */}
                    <div className={paginationClass}></div>
                    {/* Next Button */}
                    <button
                        title="Next Slide"
                        aria-label="Next Slide"
                        className={`${nextClass} ${navigationButtonStyle}`}
                    >
                        <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </div>
            </div>
            {/* Slider */}
            <div className="slider">
                {/* Swiper */}
                <Swiper
                    modules={[Navigation, Scrollbar, Pagination]}
                    spaceBetween={12}
                    speed={700}
                    navigation={{
                        prevEl: `.${previousClass}`,
                        nextEl: `.${nextClass}`
                    }}
                    breakpoints={customBreakpoints}
                    pagination={{
                        el: `.${paginationClass}`,
                        clickable: true,
                        renderBullet: (_, className) => {
                            return `<span class="${className} w-4! h-1 bg-red-45! rounded-sm! transition-all duration-300 [&.swiper-pagination-bullet-active]:w-6!"></span>`;
                        }
                    }}
                    scrollbar={{
                        el: `.${scrollClass}`,
                        draggable: true,
                        hide: false,
                    }}
                >
                    {
                        isLoading ? (
                            Array.from({ length: 20 }).map((_, index) => (
                                <SwiperSlide key={index}>
                                    {
                                        type === "genre" ? (
                                            <GenreCard isLoading={isLoading} mediaType={mediaType} index={index} />
                                        ) : (
                                            <MediaCard isLoading={isLoading} index={index}>
                                                {renderFooter({}, isLoading)}
                                            </MediaCard>
                                        )
                                    }
                                </SwiperSlide>
                            ))
                        ) : (

                            (data?.results || data?.genres)?.map((media, index) => (
                                <SwiperSlide key={index}>
                                    {
                                        type === "genre" ? (
                                            <GenreCard isLoading={isLoading} genre={media} index={index} />
                                        ) : (
                                            <MediaCard isLoading={isLoading} media={media} type={type} index={index}>
                                                {renderFooter(media, isLoading)}
                                            </MediaCard>
                                        )
                                    }
                                </SwiperSlide>
                            ))
                        )
                    }
                </Swiper>
                {/* Dots */}
                <div className={`${scrollClass} bg-black-15 mt-4 h-2 rounded-full *:bg-red-45! cursor-pointer md:hidden`}></div>
            </div>
        </section>
    )
}

export default MediaSlider;