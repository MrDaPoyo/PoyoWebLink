const JsonUrl = "https://raw.githubusercontent.com/MrDaPoyo/PoyoWebLink/main/ads.json";

async function fetchData() {
    const response = await fetch(JsonUrl);
    console.log(await response.json());
}

fetchData();