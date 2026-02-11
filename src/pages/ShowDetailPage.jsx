import MediaInormation from "@components/Sections/MediaInormation";
import VideoScreen from "@components/Sections/VideoScreen";
import useChangeTitle from "@hooks/useChangeTitle";
import { useQuery } from "@tanstack/react-query";
import { GET_MEDIA_DETAIL, GET_MEDIA_REVIEWS } from "@utils/api";
import { useParams } from "react-router-dom";

function ShowDetailPage() {

    const { id } = useParams();

    // Get movie data:
    const { data: showData, isLoading: showDataIsLoading } = useQuery({
        queryKey: ["SHOW_DETAIL", id],
        queryFn: () => GET_MEDIA_DETAIL("tv", id),
        refetchOnWindowFocus: false
    });
    // Change title of page:
    useChangeTitle(showDataIsLoading ? "Loading...." : showData?.name);
    // Get show reviews:
    const { data: showReviewsData, isLoading: showReviewsDataIsLoading } = useQuery({
        queryKey: ["SHOW_REVIEWS", id],
        queryFn: () => GET_MEDIA_REVIEWS("tv", id),
        refetchOnWindowFocus: false
    });

    const isDataReady = !(showDataIsLoading && showReviewsDataIsLoading) ? false : true;


    return (
        <div className="show-detail-page">
            <main>
                <VideoScreen
                    media={showData}
                    isloading={isDataReady}
                    mediaReviews={showReviewsData?.results || []}
                />
                <MediaInormation media={showData} isLoading={isDataReady} mediaType="show" />
            </main>
        </div>
    )
}

export default ShowDetailPage;