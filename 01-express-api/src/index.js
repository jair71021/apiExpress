    const express = require("express");
    const bp = require("body-parser");
    const cors = require("cors");
    require("dotenv").config();
    require("./db");

    const server = express();
    server.use(bp.json());
    server.use(cors());

    server.use(require("./routes/waifus.routes"));

    server.listen(process.env.PORT, () => {
        console.log("server ok");
    });