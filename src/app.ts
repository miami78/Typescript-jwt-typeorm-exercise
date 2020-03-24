import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import { createConn } from "./utils/dbConnection";
import { homeRouter } from "./routes/index";
import { BASE_URL } from "./utils/constants";
class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
    createConn().then(async () => {
      this.app;
    });
  }

  private config(): void {
    this.app.use(bodyParser.json());
    this.app.use(cookieParser());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(BASE_URL, homeRouter);
    this.app.use(cors());
  }
}

export default new App().app;
