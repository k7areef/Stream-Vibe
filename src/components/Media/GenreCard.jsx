import actionImage from "@assets/genres/action.png";
import kidsImage from "@assets/genres/kids.png";
import adventureImage from "@assets/genres/adventure.png";
import animationImage from "@assets/genres/animation.png";
import realityImage from "@assets/genres/reality.png";
import comedyImage from "@assets/genres/comedy.png";
import crimeImage from "@assets/genres/crime.png";
import documentaryImage from "@assets/genres/documentary.png";
import dramaImage from "@assets/genres/drama.png";
import familyImage from "@assets/genres/family.png";
import fantasyImage from "@assets/genres/fantasy.png";
import historyImage from "@assets/genres/history.png";
import horrorImage from "@assets/genres/horror.png";
import musicImage from "@assets/genres/music.png";
import mysteryImage from "@assets/genres/mystery.png";
import romanceImage from "@assets/genres/romance.png";
import scienceFictionImage from "@assets/genres/science-fiction.png";
import thrillerImage from "@assets/genres/thriller.png";
import tvMovieImage from "@assets/genres/tv-movie.png";
import warImage from "@assets/genres/war.png";
import westernImage from "@assets/genres/western.png";
import newsImage from "@assets/genres/news.png";
import soapImage from "@assets/genres/soap.png";
import sciFiAndFantasy from "@assets/genres/sci-fi-and-fantasy.png";
import talkImage from "@assets/genres/talk.png";
import warAndPoliticsImage from "@assets/genres/war-and-politics.png";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

const images = {
    10759: actionImage,
    10762: kidsImage,
    10764: realityImage,
    10763: newsImage,
    10767: talkImage,
    10765: sciFiAndFantasy,
    10768: warAndPoliticsImage,
    10766: soapImage,
    28: actionImage,
    12: adventureImage,
    16: animationImage,
    35: comedyImage,
    80: crimeImage,
    99: documentaryImage,
    10751: familyImage,
    18: dramaImage,
    14: fantasyImage,
    36: historyImage,
    27: horrorImage,
    9648: mysteryImage,
    10402: musicImage,
    10749: romanceImage,
    878: scienceFictionImage,
    53: thrillerImage,
    10770: tvMovieImage,
    10752: warImage,
    37: westernImage
}

function GenreCard({ index = 0, isLoading = true, genre = {}, mediaType = "movie" }) {

    const path = `/search?type=${mediaType}&genre=${genre.id}`

    return (
        <div
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="genre-card p-3 rounded-md bg-black-10 border border-black-15 space-y-3"
        >
            {
                isLoading ? (
                    <div className="aspect-square bg-black-20 animate-pulse rounded-md"></div>
                ) : (
                    <Link
                        to={path}
                        className="block relative overflow-hidden rounded-md"
                    >
                        <LazyLoadImage
                            effect="blur"
                            delayTime={120}
                            threshold={-100}
                            alt={genre.name}
                            src={images[genre.id]}
                            className={`rounded-md w-full aspect-square object-cover block`}
                        />
                        <div className="overlay absolute z-1 left-0 bottom-0 w-full h-full bg-linear-to-t from-black-10 to-transparent"></div>
                    </Link>
                )
            }
            {
                isLoading ? (
                    <div className="w-20 h-6 bg-black-20 animate-pulse rounded-md"></div>
                ) : (
                    <Link
                        to={path}
                        className="block w-fit"
                    >
                        <h3 className="line-clamp-1 transition duration-300 ease-in-out sm:hover:text-red-45 font-medium">{genre.name}</h3>
                    </Link>
                )
            }
        </div>
    )
}

export default GenreCard;