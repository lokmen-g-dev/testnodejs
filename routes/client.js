import express from "express";
import { body } from "express-validator";

import multer from "../middlewares/multer-config.js";

import { signin, signup, putOnce } from "../controllers/client.js";

const router = express.Router();

router
  .route("/signup")
  .post(
    
    body("firstname").isLength({ min: 3 , max: 30 }),
    body("lastname").isLength({ min: 3 , max: 30 }),
    body("password").isLength({ min: 3 , max: 30 }),
    body("phone").isLength({min: 8}),
    multer("image", 512 * 1024),
   
  signup 
 );

router.route("/signup").post(signup);



export default router;
