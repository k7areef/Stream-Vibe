import Button from "@components/UI/Button";
import { faArrowLeft, faArrowRight, faCalendar, faLanguage, faPlus, faStar, faTableCellsLarge } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

function MediaInormation({ media = {}, isLoading = true, mediaType = "movie", mediaReviews = [] }) {

    const {
        id,
        overview = '',
        release_date = '',
        first_air_date = '',
        spoken_languages = [],
        genres = []
    } = media;

    const previousClass = `reviews-${id}-button-previous`;
    const nextClass = `reviews-${id}-button-next`;
    const paginationClass = `reviews-${id}-pagination`;
    const navigationButtonStyle = 'bg-black-10 border border-black-12 rounded-md p-3 transition sm:hover:bg-black-12 shrink-0';

    return (
        <section className="media-information py-5 md:py-10" key={media.id}>
            <div className="container">
                <div className="content-grid grid grid-cols-1 lg:grid-cols-3 gap-5 items-start">

                    {/* Overview */}
                    <div className="overview bg-black-10 border border-black-15 rounded-md p-5 lg:col-span-2">
                        <p className="mb-5">Description</p>
                        {
                            isLoading ? (
                                <div className="space-y-3">
                                    <div className="bg-black-20 animate-pulse w-full h-6 rounded-md"></div>
                                    <div className="bg-black-20 animate-pulse w-3/4 h-6 rounded-md"></div>
                                    <div className="bg-black-20 animate-pulse w-1/5 h-6 rounded-md"></div>
                                </div>
                            ) : overview && (
                                <div className="font-medium">{overview}</div>
                            )
                        }
                    </div>

                    {/* Information */}
                    <div className="information bg-black-10 border border-black-15 rounded-md p-5 space-y-5 col-span-1 row-span-2">
                        {/* Released Year */}
                        <div className="released-year">
                            <p className="flex items-center gap-2 font-medium mb-3">
                                <FontAwesomeIcon icon={faCalendar} />
                                <span>Released Year</span>
                            </p>
                            {
                                isLoading ? (
                                    <div className="bg-black-20 animate-pulse w-20 h-6 rounded-md"></div>
                                ) : (
                                    <div className="font-semibold">{String(release_date || first_air_date).split('-')[0]}</div>
                                )
                            }
                        </div>
                        {/* Available Languages */}
                        <div className="available-languages">
                            <p className="flex items-center gap-2 font-medium mb-3">
                                <FontAwesomeIcon icon={faLanguage} />
                                <span>Available Languages</span>
                            </p>
                            <ul className="flex items-center gap-x-2 gap-y-5 sm:gap-y-7 flex-wrap">
                                {
                                    isLoading ? (
                                        Array.from({ length: 3 }).map((_, index) => (<li key={index}>
                                            <div className="bg-black-20 animate-pulse w-20 h-10 rounded-md"></div>
                                        </li>))
                                    ) : (
                                        spoken_languages.filter(lang => lang.name).map((lang, index) => (<li key={lang.iso_639_1 || index}>
                                            <Button
                                                to={`/search?type=${mediaType}&lang=` + lang.iso_639_1}
                                                variant="secondary"
                                                className="text-nowrap"
                                            >
                                                {lang.name}
                                            </Button>
                                        </li>))
                                    )
                                }
                            </ul>
                        </div>
                        {/* Genres */}
                        <div className="genres">
                            <p className="flex items-center gap-2 font-medium mb-3">
                                <FontAwesomeIcon icon={faTableCellsLarge} />
                                <span>Genres</span>
                            </p>
                            <ul className="flex items-center gap-x-2 gap-y-5 sm:gap-y-7 flex-wrap">
                                {
                                    isLoading ? (
                                        Array.from({ length: 3 }).map((_, index) => (<li key={index}>
                                            <div className="bg-black-20 animate-pulse w-20 h-10 rounded-md"></div>
                                        </li>
                                        ))
                                    ) : (
                                        genres.map((genre, index) => (<li key={genre.id || index}>
                                            <Button
                                                to={`/search?type=${mediaType}&genre=` + genre.id}
                                                variant="secondary"
                                                className="text-nowrap"
                                            >
                                                {genre.name}
                                            </Button>
                                        </li>))
                                    )
                                }
                            </ul>
                        </div>
                    </div>

                    {/* Reviews */}
                    {
                        mediaReviews.length > 0 && (
                            <div className="reviews bg-black-10 border border-black-15 rounded-md p-5 lg:col-span-2">
                                <div className="header flex items-center justify-between mb-5">
                                    <p>Reviews</p>
                                    <Button
                                        variant="secondary"
                                        className="flex items-center justify-center gap-2"
                                    >
                                        <FontAwesomeIcon icon={faPlus} />
                                        <span>Add Your Review</span>
                                    </Button>
                                </div>
                                <div className="reviews-slider mb-5">
                                    <Swiper
                                        modules={[Navigation, Pagination]}
                                        spaceBetween={15}
                                        slidesPerView={2}
                                        navigation={{
                                            prevEl: `.${previousClass}`,
                                            nextEl: `.${nextClass}`
                                        }}
                                        pagination={{
                                            el: `.${paginationClass}`,
                                            clickable: true,
                                            renderBullet: (_, className) => {
                                                return `<span class="${className} w-4! h-1 bg-red-45! rounded-sm! transition-all duration-300 [&.swiper-pagination-bullet-active]:w-6!"></span>`;
                                            }
                                        }}
                                        breakpoints={{
                                            0: {
                                                slidesPerView: 1
                                            },
                                            420: {
                                                slidesPerView: 1.5
                                            },
                                            840: {
                                                slidesPerView: 2
                                            },
                                            1024: {
                                                slidesPerView: 1.5
                                            },
                                            1300: {
                                                slidesPerView: 2
                                            }
                                        }}
                                    >
                                        {
                                            mediaReviews.filter(review => (review.author_details && review.content)).map((review, index) => (<SwiperSlide key={index}>
                                                <div className={`media-review-${review.id || index} bg-black-06 border border-black-15 rounded-md p-5`}>
                                                    <div className="header-review flex sm:items-center justify-between gap-3 mb-3 max-sm:flex-col">
                                                        <div className="auothr-info space-y-1">
                                                            <h3 className="review-author-name font-medium">{review.author_details?.name || "Anonymous"}</h3>
                                                            <p>{review.author_details?.username}</p>
                                                        </div>
                                                        <ul className="rating ms:ms-auto w-fit flex items-center gap-1 bg-black-08 border border-black-15 rounded-full py-1 px-2">
                                                            {Array.from({ length: 5 }).map((_, index) => {
                                                                const isFilled = index + 1 <= Math.round(review.author_details?.rating);

                                                                return (
                                                                    <li key={index}>
                                                                        <FontAwesomeIcon
                                                                            icon={faStar}
                                                                            className={isFilled ? "text-red-45" : "text-gray-600"}
                                                                        />
                                                                    </li>
                                                                );
                                                            })}
                                                            <li><p className="text-sm!">{review.author_details?.rating}</p></li>
                                                        </ul>
                                                    </div>
                                                    <p className="review-content line-clamp-6">
                                                        {review.content}
                                                    </p>
                                                </div>
                                            </SwiperSlide>))
                                        }
                                    </Swiper>
                                </div>
                                <div className="slider-navigation shrink-0 flex items-center justify-between gap-3 bg-black-08 border border-black-12 rounded-md py-2 px-4">
                                    {/* Previous Button */}
                                    <button
                                        title="Previous Slide"
                                        aria-label="Previous Slide"
                                        className={`${previousClass} ${navigationButtonStyle} max-sm:w-full max-sm:shrink`}
                                    >
                                        <FontAwesomeIcon icon={faArrowLeft} />
                                    </button>
                                    {/* Dots */}
                                    <div className={`${paginationClass} w-fit! max-sm:hidden`}></div>
                                    {/* Next Button */}
                                    <button
                                        title="Next Slide"
                                        aria-label="Next Slide"
                                        className={`${nextClass} ${navigationButtonStyle} max-sm:w-full max-sm:shrink`}
                                    >
                                        <FontAwesomeIcon icon={faArrowRight} />
                                    </button>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    )
}

export default MediaInormation;