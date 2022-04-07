const request = require("request");
const cheerio = require("cheerio");

exports.covidEvents = async (req, res) => {
  request(
    "https://www.google.com/search?q=covid+events&oq=covid&aqs=chrome.1.69i59l2j0i131i433j0i433l2j0i131i433j0j0i433j0j0i433i457.3061j0j7&sourceid=chrome&ie=UTF-8&ibp=htl;events&rciv=evn&sa=X&ved=2ahUKEwjf1rbWj-rxAhWUzDgGHZlfAiEQ5bwDMAB6BAgSEAE#fpstate=tldetail&htidocid=L2F1dGhvcml0eS9ob3Jpem9uL2NsdXN0ZXJlZF9ldmVudC8yMDIxLTA3LTIzfDE1NzY2NjE1NzgwOTQ5OTgzMTcy&htivrt=events&mid=/g/11q8fy_sf0",
    (error, response, html) => {
      if (!error && response.statusCode == 200) {
        const $ = cheerio.load(html);

        const YOGjf = $(".YOGjf");

        console.log(YOGjf);
      }
    }
  );
};
