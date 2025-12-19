const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const globalErrorHandler = require("./middleware/globalErrorHandler");
const http = require("http");
const socket = require("./utility/socket");
const { registerAgentEvents } = require("./controller/agentEvents");
const { startCronJobs } = require("./utility/cornjobs");
require("dotenv").config();

const app = express();
const server = http.createServer(app);

// Initialize socket globally
const io = socket.init(server);

io.on("connection", (socket) => {
  registerAgentEvents(socket);
});

startCronJobs();

// global middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));
app.use(helmet());

// route middleware

// Error handling middleware
app.use(globalErrorHandler);

const PORT = process.env.PORT || 8000;
server.listen(PORT, () => {
  console.log("Server running on port 8000");
});
