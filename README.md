# PoyoWebLink
## Description

PoyoWebLink is a web application that displays random ads from the indie web.

## Usage
Copy this into your index.html file:
```
<div id="poyoContainer">
        <meta http-equiv="Content-Security-Policy" content="script-src 'self' https://weblink.poyo.study;">
        <a id="poyoLink">
            <img id="poyoImage">
            <p id="poyoText">PoyoWebLink</p>
        </a>
        <script defer src="https://weblink.poyo.study/poyoweblink.js"></script>
    </div>
```
If you didn't place `poyoweblink.js` in the same directory as your index.html, replace `src="poyoweblink.js"` with `src="<location>/poyoweblink.js"`

And that's all!

