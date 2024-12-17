import { createServer } from "node:http";

export const server = createServer((request, response) => {
  // request object
  // console.log("request object", request);

  console.log("request.url: ", request.url);
  console.log("request.method: ", request.method);

  if (request.url === "/dolphins") {
    response.statusCode = 200;
    response.end("Hello Dolphins");
    return;
  } else if (request.url === "/") {
    // response object
    response.statusCode = 200;
    response.end("Hello World");
  } else {
    response.statusCode = 404;
    response.end("Not found");
  }
});
