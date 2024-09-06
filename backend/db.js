// import mongoose from "mongoose";

// module.exports = () => {
//     const connectionParams = {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     };
//     try {
//         mongoose.connect(process.env.DB, connectionParams)
//         console.log("Connected To database successfully")
//     } catch (err) {
//         console.log("err", err)
//     }
// }

import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect(process.env.DB)
        .then(() => {
            console.log("DB Connected")
        })
}