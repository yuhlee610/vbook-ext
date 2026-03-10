load("config.js");

function execute(url) {
  if (!url.endsWith("/")) {
    url += "/";
  }
  let doc = fetch(url).html();

  if (doc) {
    var data = [];
    doc.select("#list-chapterAll a").forEach((e) => {
      data.push({
        name: e.select("a").text(),
        url: `${BASE_URL}${e.attr("href")}`,
      });
    });

    return Response.success(data);
  }

  return null;
}
