const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const tasksRoutes = require("./routes/tasks.js");

dotenv.config();
const app = express();

const corsOption = {
    origin: "http://localhost:3000",
    optionSuccessStatus: 200,
}

const PORT = process.env.PORT || 8001;

app.use(cors(corsOption));
app.use(express.json());
app.use(express.urlencoded({
    extended: true,
}));

app.use('/api', tasksRoutes);

app.listen(PORT, () => {
    console.log(`API is listening on port ${PORT}`);
});