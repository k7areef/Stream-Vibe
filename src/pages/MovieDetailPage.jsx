import MediaInormation from "@components/Sections/MediaInormation";
import VideoScreen from "@components/Sections/VideoScreen";
import useChangeTitle from "@hooks/useChangeTitle";
import { useQuery } from "@tanstack/react-query";
import { GET_MEDIA_DETAIL, GET_MEDIA_REVIEWS } from "@utils/api";
import { useParams } from "react-router-dom";

function MovieDetailPage() {

    const { id } = useParams();

    // Get movie data:
    const { data: movieData, isLoading: movieDataIsLoading } = useQuery({
        queryKey: ["MOVIE_DETAIL", id],
        queryFn: () => GET_MEDIA_DETAIL("movie", id),
        refetchOnWindowFocus: false
    });
    // Change title of page:
    useChangeTitle(movieDataIsLoading ? "Loading...." : movieData?.title);
    // Get movie reviews:
    const { data: movieReviewsData, isLoading: movieReviewsDataIsLoading } = useQuery({
        queryKey: ["MOVIE_REVIEWS", id],
        queryFn: () => GET_MEDIA_REVIEWS("movie", id),
        refetchOnWindowFocus: false
    });
    const { data: watchProviders, isLoading: providersLoading } = useQuery({
        queryKey: ["WATCH_PROVIDERS", id],
        queryFn: () => GET_MEDIA_DETAIL("movie", `${id}/watch/providers`), // تأكد ان الـ function عندك بتدعم الـ path ده
        refetchOnWindowFocus: false
    });

    const isDataLoading = !(movieDataIsLoading && movieReviewsDataIsLoading && providersLoading) ? false : true;

    return (
        <div className="movie-detail-page">
            <VideoScreen
                media={movieData}
                isloading={isDataLoading}
                watchProviders={watchProviders?.results?.EG || []}
            />
            <MediaInormation
                media={movieData}
                isLoading={isDataLoading}
                mediaType="movie"
                mediaReviews={movieReviewsData?.results || []}
            />
        </div>
    )
}

export default MovieDetailPage;