// Require the Fastify framework and instantiate it
const fastify = require("fastify")();
// Handle GET verb for / route using Fastify
// Note use of "chain" dot notation syntax
fastify.get("/", (request, reply) => {
  
  reply
    .code(200)
    .header("Content-Type", "text/HTML; charset=utf-8")
    .send("<h1>Hello from Lab 4!</h1>");
});



// Require the Fastify framework and instantiate it
// const fastify = require("fastify")();
// Handle GET verb for / route using Fastify
// Note use of "chain" dot notation syntax
fastify.get("/name", (request, reply) => {
  const {firstName, lastName} = request.query
  const name = !firstName && !lastName ? 'guest' : `${firstName} ${lastName}`;
  reply
    .code(200)
    .header("Content-Type", "text/html; charset=utf-8")
    .send(`<h1>Hello, ${name}</h1>`);
});
// Start server and listen to requests using Fastify
const listenIP = "localhost";
const listenPort = 8080;
fastify.listen(listenPort, listenIP, (err, address) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log(`Server listening on ${address}`);
});


// fastify.get("/name", (request, reply) => {
  
//   const {first, last} = request.query;
//   if(last !== undefined && first !==undefined) {
//         const response = "<h1>Hello," + first + " " + last + " " + "</h1>";
//         const response2 = `<h1>Hello, ${first} ${last} </h1>`;
//   } else {
//     console.log(request.query);
//     reply
//       .code(200)
//       .header("Content-Type", "text/HTML; charset=utf-8")
//       .send("<h1>Hello from Lab 4!</h1>");
//   }
// });
// // Start server and listen to requests using Fastify
// const listenIP = "localhost";
// const listenPort = 8080;
// fastify.listen(listenPort, listenIP, (err, address) => {
//   if (err) {
//     console.log(err);  
//     process.exit(1);
//   }
//   console.log(`Server listening on ${address}`);
// });