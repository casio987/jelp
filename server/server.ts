import { App } from "./src/App";

const app = new App(Number(process.env.API_PORT));
app.start();