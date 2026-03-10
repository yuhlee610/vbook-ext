load("config.js");

function execute(url, page) {
    const doc = fetch(BASE_URL + url).html();
    const data = [];
    doc.select(".bookbox").forEach((e) => {
      data.push({
        name: e.select(".bookname a").first().text(),
        link: e.select("a").first().attr("href"),
        description: e.select(".update").text(),
      });
    });

    return Response.success(data)
}