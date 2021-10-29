export const deleteSearchResults = () => {
    const parentElemet = document.getElementById('searchResults');
    let child = parentElemet.lastElementChild;
    while (child){
        parentElemet.removeChild(child);
        child = parentElemet.lastElementChild;
    }
}

export const buildSearchResults = (resultArray) => {
    resultArray.forEach(result => {
        const resultItem = createResultItem(result);
        const resultContents = document.createElement("div");
        resultContents.classList.add("resultContents");
        if (result.img) {
            const resultImg = createResultImg(result);
            resultContents.append(resultImg);
        }
        const resultText = createResultText(result);
        resultContents.append(resultText);
        resultItem.append(resultContents);
        const searchResults = document.getElementById("searchResults");
        searchResults.append(resultItem);
    });
}

const createResultItem = (result) => {
    const resultItem = document.createElement("div");
    resultItem.classList.add("resultItem");
    const resultTitle = document.createElement("div").classList.add("resultTitle");
    const link = document.createElement("a");
    link.href = `https://en.wikipedia.org/?curid=${result.id}`;
    link.textContent = result.title;
    link.target = "_blank";
    resultTitle.append(link);
    resultItem.append(resultTitle);
    return resultItem;
}

const createResultImg = (result) => {
    const resultImage = document.createElement("div").classList.add("resultImg");
    const image = document.createElement("img");
    image.src=result.img;
    img.alt=result.title;
    resultImage.append(img);
    return resultImage;
}

const createResultText = (result) => {
    const resultText = document.createElement("div").classList.add("resultText");
    const resultDescription = document.createElement("p");
    resultDescription.classList.add('resultDescription');
    resultDescription.textContent=result.text;
    resultText.append(resultDescription);
    return resultText;

}

export const clearStatsLine = () => {
    document.getElementById('stats').textContent = "";
}

export const setStatsLine = (numberOfResults) =>{
    const statsLine = document.getElementById('stats');
    if(numberOfResults) {
        statsLine.textContent = `Displaying ${numberOfResults} results.`;
    } else {
        statsLine.textContent = "Sorry, no results.";
    }
}