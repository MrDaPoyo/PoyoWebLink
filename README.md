# PoyoWebLink
## Description

PoyoWebLink is a web application that displays random ads from a JSON file. The ads are shown in an HTML container with an image and a link.

## Usage
First, download `poyoweblink.js`, move it into the same folder than your index.html.
Copy this into your index.html file:
```
<div id="adContainer">
        <a id="adLink">
            <img id="adImage">
            <p id="adText">PoyoWebLink</p>
        </a>
        <script defer src="poyoweblink.js"></script>
    </div>
```
If you didn't place `poyoweblink.js` in the same directory as your index.html, replace `src="poyoweblink.js"` for `src="<location>/poyoweblink.js"`

And that's all!

