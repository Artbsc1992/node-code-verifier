import express, { Request, Response } from "express";
import { HelloController } from "@/controller/HelloController";
import { LogInfo } from "@/utils/logger";

//Router from express

let helloRouter = express.Router();

// Get -> http://localhost:8000/api/hello/
helloRouter.route('/')
    .get(async (req: Request, res: Response) => {
      //Obtain query param
      let name: any = req?.query?.name;
      LogInfo(`Query Param: ${name}`)
      //controller instance
      const controller:HelloController = new HelloController();
      //obtain response
      const response = await controller.getMessage(name);
      //send to the client the response
      return res.send(response);
    });

export default helloRouter;