import { App } from "./src/App";

const app = new App(Number(process.env.PORT));
app.start();