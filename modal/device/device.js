const mongoose = require("mongoose");

const DiskSchema = new mongoose.Schema(
  {
    mount: { type: String },
    filesystem: { type: String },
    sizeGB: { type: Number },
  },
  { _id: false }
);

const DeviceSchema = new mongoose.Schema(
  {
    agentId: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    employeeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
    hostname: { type: String, required: true },
    deviceType: {
      type: String,
      enum: ["laptop", "desktop", "server"],
      required: true,
    },
    platform: { type: String, required: true },
    osType: { type: String },
    osVersion: { type: String },
    kernelVersion: { type: String },
    arch: { type: String },
    timezone: { type: String },
    cpuModel: { type: String },
    cpuCores: { type: Number },
    totalMemoryGB: { type: Number },
    disks: { type: [DiskSchema], default: [] },
    primaryIp: { type: String },
    macAddress: { type: String },
    isVirtualMachine: { type: Boolean, default: false },
    agentVersion: { type: String },
    agentRunUser: { type: String },
    agentInstallPath: { type: String },
    status: {
      type: String,
      enum: ["online", "offline"],
      default: "online",
      index: true,
    },
    lastSeenAt: { type: Date },
    installedAt: { type: Date, required: true },
    createdBy: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Device", DeviceSchema);
