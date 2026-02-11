const API_TOKEN = import.meta.env.VITE_API_TOKEN;
const BASE_URL = "https://api.themoviedb.org/3";

const fetchData = async (endpoint = "", options = {}) => {
    if (!endpoint) return null;
    const res = await fetch(`${BASE_URL}${endpoint}`, {
        headers: {
            "content-type": "application/json",
            authorization: `Bearer ${API_TOKEN}`
        },
        ...options
    });
    return await res.json();
};

export const GET_MEDIA_GENRES = async (mediaType = "movie") => {
    return await fetchData(`/genre/${mediaType}/list?language=en`);
};
export const GET_MEDIA_POPULAR = async (mediaType = "movie") => {
    return await fetchData(`/${mediaType}/popular?language=en`);
};
export const GET_MEDIA_TRENDING = async (mediaType = "movie", timeWindow = "week") => {
    return await fetchData(`/trending/${mediaType}/${timeWindow}?language=en`);
};
export const GET_MEDIA_UPCOMING = async (mediaType = "movie") => {
    return await fetchData(`/${mediaType}/upcoming?language=en`);
};
export const GET_MEDIA_TOP_RATED = async (mediaType = "movie") => {
    return await fetchData(`/${mediaType}/top_rated?language=en`);
};
export const GET_MEDIA_ON_THE_AIR = async (mediaType = "tv") => {
    return await fetchData(`/${mediaType}/on_the_air?language=en`);
};
export const GET_MEDIA_VIDEIOS = async (mediaType, mediaId) => {
    return await fetchData(`/${mediaType}/${mediaId}/videos?language=en`);
};
export const GET_MEDIA_DETAIL = async (mediaType, mediaId) => {
    return await fetchData(`/${mediaType}/${mediaId}`);
};
export const GET_MEDIA_REVIEWS = async (mediaType, mediaId) => {
    return await fetchData(`/${mediaType}/${mediaId}/reviews`);
};
export const GET_MEDIA_WATCH_PROVIDERS = async (mediaType, mediaId) => {
    return await fetchData(`/${mediaType}/${mediaId}/watch/providers`);
};