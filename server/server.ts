import { App } from "./App";

// TODO: add controllers here
const app = new App(Number(process.env.API_PORT));
app.start();