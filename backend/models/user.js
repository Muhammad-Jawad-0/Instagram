import mongoose from "mongoose";
import jwt from "jsonwebtoken"
import joi from "joi";
import passwordComplexity from "joi-password-complexity"

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    fullName: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
}, {
    minimize: false, timestamps: true
})

userSchema.methods.generateAuthToken = () => {
    const token = jwt.sign({ id: this._id }, process.env.JWTPRIVATEKEY,{expiresIn:"7d"})
    return token
}

const User = mongoose.model("user", userSchema);

const validate = (data) => {
    const schema = joi.object({
        email: joi.string().required().label("Email"),
        fullName: joi.string().required().label("Full Name"),
        username: joi.string().required().label("Username"),
        password: joi.string().required().label("Password")
    });
    return schema.validate(data);
}

export {
    User,
    validate
}