const JsonUrl = "https://raw.githubusercontent.com/MrDaPoyo/PoyoWebLink/main/ads.json";
const url = "https://raw.githubusercontent.com/MrDaPoyo/PoyoWebLink/main/";
const media = "media/";

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
        let adContainer = document.getElementById("adContainer");
        let adImage = document.createElement("img");
        adImage.src = media + ad.media;
        adImage.alt = ad.url;
        adImage.addEventListener("click", () => {
            window.open(ad.url);
        });
        adContainer.appendChild(adImage);
    } catch (error) {
        console.error(error);
    }
}

renderAd();