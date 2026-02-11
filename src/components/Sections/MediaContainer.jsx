function MediaContainer({ mediaTitle = "", children }) {
    return (
        <section className="media-container py-5 md:py-10">
            <div className="container">
                <div className="content-wrapper space-y-5 md:space-y-10 rounded-md md:border md:border-black-15 relative md:px-5 py-10">
                    <div className="media-title bg-red-45 px-4 py-2 absolute -top-4 left-4 rounded-md font-semibold">{mediaTitle}</div>
                    {children}
                </div>
            </div>
        </section >
    )
}

export default MediaContainer;