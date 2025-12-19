const mongoose = require("mongoose");

const TopologySchema = new mongoose.Schema(
  {
    agentId: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },

    hostname: {
      type: String,
      required: true,
    },

    deviceType: {
      type: String,
      enum: ["laptop", "desktop", "server", "vm"],
      default: "laptop",
    },

    osType: {
      type: String,
      required: true,
    },

    osVersion: {
      type: String,
      required: true,
    },
    interfaces: [
      {
        name: { type: String, required: true },
        type: {
          type: String,
          enum: ["loopback", "network", "wifi", "vpn", "awdl", "unknown"],
          default: "unknown",
        },
        ips: [{ type: String }],
        mac: { type: String },
        netmask: { type: String },
        internal: { type: Boolean },
        isVPN: { type: Boolean, default: false },
      },
    ],

    defaultGateway: { type: String },

    routes: [
      {
        destination: String,
        gateway: String,
        interface: String,
      },
    ],

    dns: [{ type: String }],

    wifi: {
      interface: { type: String },
      connected: { type: Boolean, default: false },
      ssid: { type: String, default: null },
      bssid: { type: String, default: null },
      signalLevel: { type: Number, default: null },
      restricted: { type: Boolean, default: false },
    },
    collectedAt: {
      type: Date,
      default: Date.now,
    },

    lastSeen: {
      type: Date,
      default: Date.now,
      index: true,
    },
    createdBy: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

TopologySchema.index({ agentId: 1 });
TopologySchema.index({ lastSeen: 1 });

module.exports = mongoose.model("Topology", TopologySchema);
