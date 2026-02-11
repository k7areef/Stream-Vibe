import React from 'react';
function useChangeTitle(title = "Stream Vibe - Home") {
    React.useEffect(() => {
        window.document.title = "Stream Vibe - " + title;
    }, [title]);
    return null;
};
export default useChangeTitle;