import { useInView } from "react-intersection-observer";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

function MediaCard({ index = 0, isLoading = true, media = {}, children }) {

    const { ref, inView } = useInView({
        triggerOnce: true,
        rootMargin: '200px'
    });

    return (
        <div
            ref={ref}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="media-card p-3 rounded-md bg-black-10 border border-black-15 space-y-3 h-full"
        >
            <div className="relative aspect-[1/1.5] w-full overflow-hidden rounded-md bg-black-20">
                {(isLoading || !inView) && (
                    <div className="absolute inset-0 animate-pulse bg-black-20"></div>
                )}
                {!isLoading && (
                    <Link
                        to={`/movies-and-shows/${media.title ? "movie" : "show"}/${media.id}`}
                        className="block w-full h-full"
                    >
                        <LazyLoadImage
                            effect="blur"
                            delayTime={120}
                            threshold={-100}
                            alt={media.title || media.name}
                            className="w-full h-full object-cover"
                            src={`https://image.tmdb.org/t/p/w500/${media.poster_path}`}
                            placeholderSrc={`https://image.tmdb.org/t/p/w500/${media.poster_path}`}
                        />
                    </Link>
                )}
            </div>
            {children}
        </div>
    )
}

export default MediaCard;