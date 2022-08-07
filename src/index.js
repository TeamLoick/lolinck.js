const request = require("request");
const url = "https://api.lolinck.xyz/v1/check/";

module.exports = async (link, options) => {
  var res = await got
    .post(url, {
      json: {
        link: link,
        cache: options.cache || false,
        type: options.type || "json",
      },
    })
    .json()
    .catch((err) => {
      throw err;
    });

  return res;
};
