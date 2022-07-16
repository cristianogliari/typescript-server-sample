import * as express from "express";
import * as bodyParser from "body-parser";

const port: number = 8080;
const app = express();
const helloWorldRouter = express.Router();
const mainRouter = express.Router();

mainRouter.get("/", (request, response) => {
  response.send({
    hostname: request.hostname,
    path: request.path,
    method: request.method
  })
})

helloWorldRouter.get("/", (request, response) => {
  response.send('Hello world helloWorldRouter');
})

app.use("/hello-world", helloWorldRouter);
app.use("/", mainRouter);

app.listen(port, () => {
  console.log(`Server running at port: ${port}`)
})


// const app = express();
// app.use(bodyParser.json());

// app.post("/", (request, response) => {
//   response.send(request.body);
// })

// app.get("/", (request, response) => {
//   response.send('Hello World!');
// });

// app.listen(port, () => {
//   console.log(`Server running at port: ${port}`);
// });