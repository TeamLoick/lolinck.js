const got = require("got");
const url = "https://api.lolinck.xyz/v1/detection";
module.exports = async (link, options) => {
    var validTypes = ["json"];
    if (!validTypes.includes(options.type.toLowerCase())) {
        throw new Error("Invalid type");
    }
    var res = await got
        .post(url, {
        params: {
            url: link,
            real_time: options.real_time || false,
        },
    })
        .json();
    var safe = false;
    if (res.NSFW == false &&
        res.MALWARE == false &&
        res.PHISHING == false &&
        res.IP_LOGGING == false) {
        safe = true;
    }
    var formatRes = {
        url: res.url,
        safe: safe,
        nsfw: res.NSFW,
        malware: res.MALWARE,
        phising: res.PHISHING,
        ip_logging: res.IP_LOGGING,
    };
    return formatRes;
};
