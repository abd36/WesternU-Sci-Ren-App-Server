// External modules
require("dotenv").config();
const createServer = require("./server");
require("./db/mongoose");

// App variables
const PORT = process.env.PORT
const app = createServer();

app.get('/', (req, res) => {
    res.send("hello there!");
});

// Activate app
app.listen(PORT, (req, res) => {
    console.log(`Listening at port ${PORT}`);
});