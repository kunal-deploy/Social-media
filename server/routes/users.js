import express from "express";
import { verifyToken } from "../middleware/auth.js";
import{
    getUser,
    getUserFriends,
    addRemoveFriend,
} from "../controllers/users.js";


const router = express.Router();


export default userRoutes ;