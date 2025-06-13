import user from "../models/User.js";

class UserController {
    static async getAll(req, res) {
        try {
            const users = await user.find({});
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({message: `${error.message} - Request failed.`});
        } 
    }

    static async createUser(req, res) {
        try {
            const newUser = await user.create(req.body);
            res.status(201).json({message: "User created successfully.", user: newUser});
        } catch (error) {
            res.status(500).json({message: `${error.message} - Registration failed.`});
        }
    }
}