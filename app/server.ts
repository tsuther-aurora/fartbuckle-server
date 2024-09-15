import myParser                                              from 'body-parser';
import { env }                                               from "node:process";
import express, { Express, Request, Response, NextFunction } from "express";
import dotenv                                                from "dotenv";

dotenv.config();
const app: Express = express();
const port = env['port'];
const boolProd = env['WebEnv'] === "Prod";

// Cors Middleware
app.use((request: Request, res: Response, next: NextFunction) =>
{
  //Enabling CORS
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization");
  next();
});

// Limit for JSON
const jsonLimit = { limit: '50mb' };
//Limit for URL ENCODE (image data)
const imageEncode = { limit: '50mb', extended: true };

app.use(myParser.json(jsonLimit), myParser.urlencoded(imageEncode));

//Setting up server

const server = boolProd ? httpsServer(app) : app.listen(port, () =>
{

  const address = server.address();
  {
    if(typeof address === 'object' && address !== null)
    {
      console.log(`Server Started: ${address.port}`)
    }
  }
});
