const got = require("got");
const url = "https://api.lolinck.xyz/v1/detection";
import { tldExists } from "tldjs";

module.exports = async (
  link: string,
  options?: { real_time?: boolean; type?: string }
) => {
  if (!tldExists(link)) throw new Error("Invalid link");
  var validTypes: Array<String> = ["json"];
  if (options.type && !validTypes.includes(options.type.toLowerCase())) {
    throw new Error("Invalid type");
  }
  var res: {
    url: string;
    MALICIOUS: boolean;
    SUSPICIUS: boolean;
    NSFW: boolean;
    MALWARE: boolean;
    PHISHING: boolean;
    IP_LOGGING: boolean;
  } = await got
    .get(url, {
      params: {
        url: link,
        real_time: options.real_time || false,
      },
    })
    .json();

  var formatRes: object = {
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
