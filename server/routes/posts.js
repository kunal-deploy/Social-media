import express from "express";
import { verifyToken } from "../middleware/auth.js";
import { getFeedPosts , getUserPosts , likePost } from "../controllers/posts.js";

const router = express.Router();

//READ 
router.get( "/" , verifyToken , getFeedPosts); // Loads all the Posts that were ever posted , this getFeedPosts is not optimized and thus load all posts
router.get("/:userId/posts" , verifyToken , getUserPosts ); //Loads all the Posts that user ever uploaded 


//UPDATE
router.patch( "/:id/like" , verifyToken , likePost);


export default router;