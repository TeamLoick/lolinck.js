<div align="center">
  <br />
  <p>
    <a href="https://lolinck.vercel.app/"><img src="https://lolinck.vercel.app/js/banner.png" width="546" alt="lolinck.js" /></a>
  </p>
  <br />
  <p>
    <a href="https://dsc.gg/loick"><img src="https://img.shields.io/discord/822911379924582410?color=5865F2&logo=discord&logoColor=white&style=for-the-badge" alt="Discord server" /></a>
    <a href="https://www.npmjs.com/package/lolinck.js"><img src="https://img.shields.io/npm/v/lolinck.js.svg?style=for-the-badge" alt="npm version" /></a>
    <a href="https://www.npmjs.com/package/lolinck.js"><img src="https://img.shields.io/npm/dw/lolinck.js?style=for-the-badge" alt="npm downloads" /></a>
  </p>
</div>

A node.js library to interact with lolinck API. If you want to use the API with other languages you can check the [API documentation](https://lolinck.vercel.app/). If you need help [join the discord](https://dsc.gg/loick)

## Installation

We recommend using npm to install lolinck.js:

```
npm install lolinck.js
```

```
yarn add lolinck.js
```

```
pnpm add lolinck.js
```

## Usage

```js
const lolinck = require("lolinck.js");

(async () => {
  var res = await lolinck("https://lolinck.com", {
    type: "json, xml or text", // response type
    cache: false, // select if you want to use cache or not (premium feature)
  });
  console.log(res); /* {
    url: "https://lolinck.com",
    safe: true,
    NSFW: false,
    MALWARE: false,
    PHISHING: false,
    IP_LOGGING: false,
  }*/
})();
```
