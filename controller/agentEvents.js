function registerAgentEvents(socket) {
  console.log(`Agent connected: ${socket.id}`);

  socket.on("registerAgent", (data) => {
    console.log("Folder event from agent:", data);
    // store in DB if needed
  });

  socket.on("pong", (data) => {
    console.log("Pong from agent:", data);
    // store in DB if needed
  });

  // Handle disconnect
  socket.on("disconnect", () => {
    console.log(`Agent disconnected: ${socket.id}`);
  });
}

module.exports = { registerAgentEvents };
