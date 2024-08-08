const JsonUrl = "https://raw.githubusercontent.com/MrDaPoyo/PoyoWebLink/main/ads.json";
const url = "https://raw.githubusercontent.com/MrDaPoyo/PoyoWebLink/main/";
const media = "https://github.com/MrDaPoyo/PoyoWebLink/tree/12b0966b0b3bb33a3a5904af38276c47a123c27b/media"

async function fetchData() {
    const response = await fetch(JsonUrl);
    return await response.json();
}

data = fetchData();


async function returnAd() {
    let ads = await fetchData();
    let ad = ads[Math.floor(Math.random() * ads.length)];
    return ad;
}

ad = returnAd();
console.log(ad);

async function renderAd() {
    let ad = await returnAd();
    let adContainer = document.getElementById("adContainer");
    let adImage = document.createElement("img");
    adImage.src = media + ad.image;
    adImage.alt = ad.title;
    adImage.style.width = "100%";
    adContainer.appendChild(adImage);
}

function main()
{
    renderAd();
}
main();