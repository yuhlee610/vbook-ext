load("config.js");

function execute(url) {
  // ensure URL has trailing slash for consistent behavior
  if (!url.endsWith("/")) {
    url += "/";
  }
  let res = fetch(url);

  if (res.ok) {
    let doc = res.html();
    let info = doc.select(".content");
    // Lấy chuỗi trạng thái truyện
    let statusText = info.select(".red").last().text();
    // Chuyển thành Boolean: Nếu không chứa chữ "完结" (Hoàn thành) thì nghĩa là đang ra (true)
    let isOngoing = statusText.indexOf("完结") === -1;
    return Response.success({
      name: info.select("h1.booktitle").text(),
      author: info.select("a.red").first().text(),
      description: info.select(".bookintro").first().text(),
      detail: "",
      ongoing: isOngoing,
      host: url,
      cover: "",
    });
  }

  return null;
}
