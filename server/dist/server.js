"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const App_1 = require("./src/App");
const app = new App_1.App(Number(process.env.PORT));
app.start();
