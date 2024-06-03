const http = require("http");
const port = 3000;
global.DEBUG = true;

const server = http.createServer(async (request, response) => {
  if (request.url === "/favicon.ico") {
    // Ignore favicon.ico requests
    response.writeHead(204, { "Content-Type": "image/x-icon" });
    response.end();
    return;
  }

  if (DEBUG) console.log("Request Url:", request.url);
  switch (request.url) {
    case "/":
      //   myEmitter.emit(
      //     "event",
      //     request.url,
      //     "INFO",
      //     "Root of Server successfully rendered."
      //   );
      response.writeHead(200, { "Content-Type": "text/plain" });
      response.end("Welcome to the DAL.");
      break;
    case "/actors/":
      //   let theActors = await getActors(); // fetch actors from postgresql
      //   response.writeHead(200, { "Content-Type": "application/json" });
      //   response.write(JSON.stringify(theActors));
      //   response.end();
      break;
    default:
      //   let message = `404 - Content Not Found.`;
      //   if (DEBUG) console.log(message);
      //   myEmitter.emit("event", request.url, "ERROR", message);
      //   response.writeHead(404, { "Content-Type": "text/plain" });
      //   response.end("404 - Content Not Found.");
      break;
  }
});

server.listen(port, () => {
  console.log(`Server running on port ${port}...`);
});
