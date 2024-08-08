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
        let adImage = document.createElement("img");
        let adLink = document.createElement("a");
        let adNav = document.createElement("a");
        adLink.href = ad.url;
        adLink.textContent = "";
        document.body.appendChild(adLink);
        adImage.src = media + ad.media;
        adImage.style.width = "128px";
        adImage.style.height = "128px";
        adImage.style.position = "relative";
        adNav.style.position = "absolute";
        adNav.style.bottom = "0";
        adNav.style.left = "0";
        adNav.style.zIndex = "3090";
        adNav.textContent = "PoyoWebLink";
        
        adLink.appendChild(adImage);
        adLink.appendChild(adLink);
        adLink.appendChild(adNav);
        
    } catch (error) {
        console.error(error);
    }
}

renderAd();