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
    console.log(ads.length);
    if (ad) {
        console.log();
        return ad;
    } else {
        throw new Error("No ads available");
    }
}

async function renderAd() {
    try {
        let ad = await returnAd();
        let poyoContainer = document.getElementById("poyoContainer");
        let poyoImage = document.getElementById("poyoImage");
        let poyoLink = document.getElementById("poyoLink");
        let poyoText = document.getElementById("poyoText");
        poyoText.style.position = "absolute";
        poyoText.style.bottom = "0";
        poyoText.style.left = "0";
        poyoText.style.zIndex = "3100";
        poyoText.style.width = "8px";
        poyoText.style.padding = "0";
        poyoText.style.margin = "0";  
        poyoText.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        poyoText.style.color = "white";
        let poyoNav = document.createElement("a");
        poyoLink.href = ad.url;
        poyoLink.style.zIndex = "3090";
        poyoLink.style.position = "relative";
        poyoLink.style.fontFamily = "Arial";
        poyoLink.style.borderBottom = "2px solid pink";
        poyoContainer.appendChild(poyoLink);
        poyoImage.src = media + ad.media;
        poyoImage.style.width = "88px";
        poyoImage.style.height = "31px";
        poyoImage.style.position = "relative";
        poyoImage.style.padding = "0";
        poyoImage.style.margin = "0";

        poyoLink.appendChild(poyoImage);
        poyoImage.appendChild(poyoNav);
        
    } catch (error) {
        console.error(error);
    }
}

renderAd();