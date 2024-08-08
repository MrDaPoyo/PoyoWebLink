const JsonUrl = "https://github.com/mrdapoyo/PoyoWebLink/ads.json";

async function fetchData() {
    const response = await fetch(JsonUrl);
    console.log(await response.json());
}

fetchData();