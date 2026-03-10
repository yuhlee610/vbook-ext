load("config.js");
function execute(url) {
  let htm = "";
  let doc = fetch(url).html();
  htm = doc.select(".readcotent").html();
  htm = htm.replace(/\&emsp;/g, "");
  htm = htm.replace(/\n/g, "<br>");

  return Response.success(htm);
}
