import { Express } from "express";
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";

// Configurations
const __filename = fileURLToPath( import.meta.url ); // we use (type : modules) in package.json so every file is treated as module thus to get path for that as normal we use this 
const __dirname = path.dirname( __filename ); // we use this to get directory path out of filepath 
dotenv.config();
const app = express();
app.use( express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy( { policy : "cross-origin" } )); // allows you to interact with data from different origins that are domains , sub-domains , ports and set policies/rules for that interactions
app.use(morgan("common")); // setting the HTTP information format to be common 
app.use( bodyParser.json( {limit : "30mb" , extended : true})); // extended = true allows you to parse complex json data structures which includes the commons ones(strings ,integers , etc.) but not limited to them
app.use( bodyParser.urlencoded( { limit :"30mb" , extended: true}));
app.use( cors()) ; //invokes the cross origin sharing policies in line 20
app.use()