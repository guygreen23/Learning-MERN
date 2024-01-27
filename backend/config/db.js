const mongoose = require('mongoose')
// here we login to mongo
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)

        console.log(`Mongo Connected: ${conn.connection.host}`.cyan.underline)
    }
    catch (error){
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDB