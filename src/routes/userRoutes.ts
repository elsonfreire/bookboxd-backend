import { Router } from "express";
import userController from "../controllers/userController";

const userRouter = Router();

/**
 * @route   GET /users
 * @desc    Return all users
 * @access  Public
 */
userRouter.get("/", userController.getAllUsers);

/**
 * @route   GET /users/:id
 * @desc    Return user by ID
 * @access  Public
 */
userRouter.get("/:id", userController.getUserById);

/**
 * @route   POST /users
 * @desc    Create new user
 * @access  Public
 */
userRouter.post("/", userController.createUser);

export default userRouter;

