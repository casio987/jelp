import { App } from "./src/App";

// TODO: add controllers here
const app = new App(Number(process.env.API_PORT));
app.start();