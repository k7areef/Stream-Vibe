import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { formatVoteCount } from "@utils/handlers";
import { Link } from "react-router-dom";

export const RatingFooter = ({ isLoading = true, media = {} }) => {
    const ratingOutOfFive = media.vote_average / 2;
    return (
        <>
            {
                isLoading ? (
                    <div className="w-20 h-6 bg-black-20 animate-pulse rounded-md"></div>
                ) : (
                    <Link
                        to={`/movies-and-shows/${media.title ? "movie" : "show"}/${media.id}`}
                        className="block w-fit"
                    >
                        <h3 className="line-clamp-1 transition duration-300 ease-in-out sm:hover:text-red-45 font-medium">{media.title || media.name}</h3>
                    </Link>
                )
            }

            <div className="media-footer flex items-center justify-between">
                {/* Rating */}
                {
                    isLoading ? (
                        <div className="w-20 h-7.5 bg-black-20 animate-pulse rounded-md"></div>
                    ) : (
                        <ul className="rating ms-auto flex items-center gap-1 bg-black-08 border border-black-15 rounded-full py-1 px-2 text-sm">
                            {Array.from({ length: 5 }).map((_, index) => {
                                const isFilled = index + 1 <= Math.round(ratingOutOfFive);
                                return (
                                    <li key={index}>
                                        <FontAwesomeIcon
                                            icon={faStar}
                                            className={isFilled ? "text-red-45" : "text-gray-600"}
                                        />
                                    </li>
                                );
                            })}
                            <li><p className="text-sm!">{formatVoteCount(media.vote_count)}</p></li>
                        </ul>
                    )
                }
            </div>
        </>
    )
}
export const ReleaseFooter = ({ isLoading = true, media = {} }) => {
    const date = new Date(media.release_date || media.first_air_date);
    return (
        <div className="media-footer flex items-center justify-center">
            {
                isLoading ? (
                    <div className="w-30 h-7.5 bg-black-20 animate-pulse rounded-md"></div>
                ) : (
                    <div className="flex items-center justify-center gap-1 bg-black-08 border border-black-15 rounded-full py-1 px-3 text-sm font-medium">
                        <p className="text-sm!">Released at</p>
                        <div className="text=grey-75">{date.toLocaleDateString("en", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                        })}</div>
                    </div>
                )
            }
        </div>
    )
}