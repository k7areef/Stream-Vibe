import React from "react";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function VideoScreen({ media = {}, isloading = true, watchProviders = {} }) {

    const {
        title = '',
        name = '',
        overview = ''
    } = media;

    const freeProvider = watchProviders?.free?.[0] || watchProviders?.ads?.[0];

    return (
        <section className="video-screen py-5 md:py-10" key={media.id}>
            <div className="container">
                <div className="video-screen-content-wrapper aspect-square md:aspect-video border border-black-15 rounded-md relative after:w-full after:bg-linear-to-t after:from-black-08 after:to-transparent after:h-full after:absolute after:left-0 after:-bottom-2 after:scale-x-101">
                    {(freeProvider && !isloading) && (
                        <a
                            href={watchProviders.link}
                            target="_blank"
                            data-aos="zoom-in"
                            data-aos-delay="300"
                            data-aos-duration="600"
                            className="flex items-center justify-center gap-2 bg-black-06 p-2 rounded-md border border-black-15 absolute left-3 top-3 z-30 text-sm"
                        >
                            <span className="text-gray-400">Free on:</span>
                            <img
                                src={`https://image.tmdb.org/t/p/original${freeProvider.logo_path}`}
                                alt={freeProvider.provider_name}
                                className="w-6 h-6 rounded-sm"
                                title={freeProvider.provider_name}
                            />
                        </a>
                    )}
                    {
                        isloading ? (
                            <div className="w-full h-full bg-linear-to-t from-black-15 to-black-20 animate-pulse flex items-center justify-center">
                                <FontAwesomeIcon icon={faSpinner} className="animate-spin text-red-45" size="2x" />
                            </div>
                        ) : (
                            <>
                                <div className="backdrop-wrapper rounded-md overflow-hidden">
                                    <img
                                        src={`https://image.tmdb.org/t/p/original/${media.backdrop_path}`}
                                        alt={title || name}
                                        data-aos="zoom-out"
                                        className="aspect-square md:aspect-video object-cover transition duration-300 ease-in-out"
                                    />
                                </div>
                                {/* Content Overlay */}
                                <div className="content-overlay p-5 flex flex-col items-center justify-end pb-3 absolute z-10 left-0 top-0 w-full h-full">
                                    <div className="text-wrapper text-center">
                                        <h2
                                            data-aos="fade-up"
                                            className="font-bold text-lg sm:text-xl md:text-2xl lg:text-2xl mb-2"
                                        >{title || name}</h2>
                                        <p
                                            data-aos="fade-up"
                                            className="max-sm:hidden line-clamp-1 sm:line-clamp-2 md:line-clamp-4 lg:line-clamp-none md:max-w-3/4 md:mx-auto"
                                        >{overview}</p>
                                    </div>
                                </div>
                            </>
                        )
                    }
                </div>
            </div>
        </section>
    )
}

export default VideoScreen;
