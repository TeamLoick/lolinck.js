# lolinck.js

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
