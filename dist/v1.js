"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const got = require("got");
const url = "https://api.lolinck.xyz/v1/detection";
const tldjs_1 = require("tldjs");
module.exports = async (link, options) => {
    if (!(0, tldjs_1.tldExists)(link))
        throw new Error("Invalid link");
    var validTypes = ["json"];
    if (options.type && !validTypes.includes(options.type.toLowerCase())) {
        throw new Error("Invalid type");
    }
    var res = await got
        .get(url, {
        params: {
            url: link,
            real_time: options.real_time || false,
        },
    })
        .json();
    var formatRes = {
        url: res.url,
        MALICIOUS: res.MALICIOUS,
        SUSPICIUS: res.SUSPICIUS,
        NSFW: res.NSFW,
        MALWARE: res.MALWARE,
        PHISHING: res.PHISHING,
        IP_LOGGING: res.IP_LOGGING,
    };
    return formatRes;
};
