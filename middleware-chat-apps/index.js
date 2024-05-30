require("dotenv").config();

const express = require('express');
const db_mysql = require("./models");
const cors =require("cors")
 
const app = express();
const port = process.env.API_PORT || 3003; // Default port 3000 jika tidak didefinisikan di environment variable
const userRoute = require("./src/routes/UserRoute");
const  MessengerRoute= require("./src/routes/MessengerRoute")

app.listen(port, () => {
    console.log(`Server app listening on http://localhost:${port}`);
});

app.use(express.json());
app.use(express.urlencoded({ extended:true}));
app.use(cors());

app.use("/api/user", userRoute);
app.use("/api/msg", MessengerRoute);


// Routing untuk metode GET
app.get('/', (req, res) => {
    res.send('Halo, dunia!');
});


db_mysql.sequelize.sync();
