load("config.js");
function execute(url) {
  let htm = "";
  let doc = fetch(url).html();
  htm = doc.select(".readcotent").html();
  htm = htm.replace(/\&emsp;/g, "");
  htm = htm.replace(/\<br>/g, "");

  return Response.success(htm);
}
