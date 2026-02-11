import Button from "@components/UI/Button";
import useChangeTitle from "@hooks/useChangeTitle";

function SearchPage() {
    // Change title of page:
    useChangeTitle("Search")
    return (
        <div className="search-page">
            <main>
                <div className="container py-5 md:py-10 flex flex-col gap-1 items-start">
                    <h2 className="font-bold text-lg sm:text-xl md:text-2xl xl:text-2xl">Welcome to Search Page</h2>
                    <p className="mb-2">This's page under development ...</p>
                    <Button className="text-center" to={'/'}>Back to Home</Button>
                </div>
            </main>
        </div>
    )
}

export default SearchPage;