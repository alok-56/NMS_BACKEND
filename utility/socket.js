let io = null;
const agentSockets = new Map();

module.exports = {
  init: (server) => {
    const socketIO = require("socket.io");
    io = socketIO(server, {
      cors: { origin: "*", methods: ["GET", "POST", "PUT", "PATCH", "DELETE"] },
    });

    io.on("connection", (socket) => {
      const { agentId } = socket.handshake.query;
      if (agentId) {
        agentSockets.set(agentId, socket);
        console.log(`Agent connected: ${agentId} (${socket.id})`);
      }

      socket.on("disconnect", () => {
        if (agentId) agentSockets.delete(agentId);
        console.log(`Agent disconnected: ${agentId}`);
      });
    });

    return io;
  },

  getIO: () => {
    if (!io) throw new Error("Socket.io not initialized!");
    return io;
  },

  emitToAgent: (agentId, event, data) => {
    const socket = agentSockets.get(agentId);
    if (socket) socket.emit(event, data);
  },
};
