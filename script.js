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
        let adContainer = document.getElementById("adContainer");
        let adImage = document.getElementById("adImage");
        let adLink = document.getElementById("adLink");
        let adText = document.getElementById("adText");
        adText.style.position = "absolute";
        adText.style.bottom = "0";
        adText.style.left = "0";
        adText.style.zIndex = "3100";
        adText.style.width = "128px";
        adText.style.padding = "0";
        adText.style.margin = "0";  
        adText.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        adText.style.color = "white";
        let adNav = document.createElement("a");
        adLink.href = ad.url;
        adLink.style.zIndex = "3090";
        adLink.style.position = "relative";
        adContainer.appendChild(adLink);
        adImage.src = media + ad.media;
        adImage.style.width = "128px";
        adImage.style.height = "128px";
        adImage.style.position = "relative";
        
        
        

        adLink.appendChild(adImage);
        adImage.appendChild(adNav);
        
    } catch (error) {
        console.error(error);
    }
}

renderAd();