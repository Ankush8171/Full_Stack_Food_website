import expres from "express"
import { loginUser,registerUser } from "../controllers/User.Controller.js"


const userRouter = expres.Router()

userRouter.post("/register",registerUser);
userRouter.post('/login',loginUser);


export default userRouter;