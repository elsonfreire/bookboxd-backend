import { Request, Response } from "express";
import * as userRepository from "../repositories/userRepository";

class UserController {
  public getAllUsers(req: Request, res: Response): void {
    const users = userRepository.getAll ();
    res.status(200).json({data: users});
  }

  public getUserById(req: Request, res: Response): void {
    const userId = parseInt(req.params.id, 10);
    const user = userRepository.getById(userId);

    if (user) {
      res.status(200).json({data: user});
    } else {
      res.status(404).json({ error: "User not found." });
    }
  }

  public createUser(req: Request, res: Response): void {
    if (!req.body || !req.body.name) {
      res.status(400).json({ error: "The username is required." });
      return;
    }
    const newUser = userRepository.create(req.body);
    res.status(201).json({data: newUser});
  }
}

export default new UserController();

