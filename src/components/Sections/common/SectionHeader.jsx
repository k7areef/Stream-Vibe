function SectionHeader({ title = "", description = "", children }) {
    return (
        <div className="header flex md:items-center gap-5 justify-between mb-5 md:mb-10 max-md:flex-col">
            <div className="text-wrapper w-full">
                <h2 className="mb-3 font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl">{title}</h2>
                <p className="line-clamp-2 sm:line-clamp-none">{description}</p>
            </div>
            {children}
        </div>
    )
}

export default SectionHeader;