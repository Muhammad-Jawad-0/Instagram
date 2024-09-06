import express from "express";
import { User, validate } from "../models/user.js";
import bcrypt from "bcrypt";

const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const { error } = validate(req.body)
        if (error) {

            return res.status(400).send({ messaga: error.details[0].message })
        }

        const user = await User.findOne({ email: req.body.email });

        if (user) {

            return res.status(409).send({ message: "User With giver email already exit!" })
        }

        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        const hashPass = await bcrypt.hash(req.body.password, salt)

        await new User({ ...req.body, password: hashPass }).save();

        res.status(201).send({ messaga: "User created successfully" })
    } catch (err) {
        res.status(500).send({ message: "Internal Server Error" })
    }
})


export default router;

// userRouter.post("/register", registerRou)
