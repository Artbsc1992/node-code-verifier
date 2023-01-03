import express, { Request, Response } from "express";
import { GoodbyeController } from "../controller/GoodbyeController";
import { LogInfo } from "../utils/logger";

//Router from express

let goodbyeRouter = express.Router();

//Get -> http://localhost:8000/api/goodbye
goodbyeRouter.route('/')
    .get(async (req: Request, res: Response) => {
      //Obtain query param
      let name: any = req?.query?.name;
      LogInfo(`Query Param: ${name}`)
      //controller instance
      const controller:GoodbyeController = new GoodbyeController();
      //Obtain response
      const response = await controller.getMessage(name);
      //send to the client the response
      return res.send(response);
    });

export default goodbyeRouter;