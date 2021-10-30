import { clearPushListener,clearSearchText, setSearchFocus, showClearTextButton } from "./searchBar.js";
import { getSearchTerm, retriveSearchResults } from "./dataFunction.js"
import { deleteSearchResults, buildSearchResults, clearStatsLine, setStatsLine } from "./searchResults.js"




document.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === "complete") {
        initApp();
    }
})

const initApp = () => {
    // set the focus
    setSearchFocus();

    // 3 listeners clear text
    const search = document.getElementById("search");
    search.addEventListener("input", showClearTextButton);
    const clear = document.getElementById("clear");
    clear.addEventListener("click", clearSearchText);
    clear.addEventListener("keydown", clearPushListener);

    // 1 listener on the form
    const form = document.getElementById('searchBar');
    form.addEventListener("submit", submitTheSearch);
}

// Procedural "workflow" function
const submitTheSearch = (e) => {
    e.preventDefault();
    // delete search results
    deleteSearchResults();
    // proces the search
    processTheSearch();
    // set the focus
    setSearchFocus();
};

// Procerudaral
const processTheSearch = async () => {
    // clear the stats line
    clearStatsLine();
    const searchTerm = getSearchTerm();
    // quick check
    if (searchTerm === "") return;
    const resultArray = await retriveSearchResults(searchTerm);
    if (resultArray.length) buildSearchResults(resultArray);// build search results
    // set stats line
    setStatsLine(resultArray.length);
}