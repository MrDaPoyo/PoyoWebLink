const JsonUrl = "https://raw.githubusercontent.com/MrDaPoyo/PoyoWebLink/main/ads.json";
const url = "https://raw.githubusercontent.com/MrDaPoyo/PoyoWebLink/main/";
const media = "https://raw.githubusercontent.com/MrDaPoyo/PoyoWebLink/main/media/";

async function fetchData() {
    const response = await fetch(JsonUrl);
    return await response.json();
}

async function returnAd() {
    let ads = await fetchData();
    ads = ads.ads;
    let ad = ads[Math.floor(Math.random() * ads.length)];
    if (ad) {
        return ad;
    } else {
        throw new Error("No ads available");
    }
}

async function renderAd() {
    try {
        let ad = await returnAd();
        console.log(ad);
        let adContainer = document.getElementById("adContainer");
        let adImage = document.createElement("img");
        adImage.src = `https://raw.githubusercontent.com/MrDaPoyo/PoyoWebLink/main/media/${ad.media}?raw=true`;
        adImage.style.width = "128px";
        adImage.style.height = "128px";
        adContainer.appendChild(adImage);
    } catch (error) {
        console.error(error);
    }
}

renderAd();