const mongoose = require("mongoose");
require("dotenv").config();

const credentials = {
    dbName: process.env.DB_NAME,
 //   user: process.env.DB_USER,
   // pass: process.env.DB_PASS,
};

const conectar = async () => {
    try {
        await mongoose.connect(process.env.URL, credentials);
        console.log("db ok");
    } catch (error) {
        console.log("Error de conexion");
        console.log(error);
    }
};

conectar();
