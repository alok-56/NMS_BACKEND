const mongoose = require("mongoose");

const DeviceConfigurationSchema = new mongoose.Schema(
  {
    agentId: {
      type: String,
      required: true,
      index: true,
    },
    hostname: String,
    configType: {
      type: String,
      enum: [
        "BLOCK_WEBSITE",
        "UNBLOCK_WEBSITE",
        "BLOCK_USB",
        "UNBLOCK_USB",
        "INSTALL_SOFTWARE",
        "UNINSTALL_SOFTWARE",
        "UPDATE_SOFTWARE",
        "BLOCK_FOLDER",
        "UNBLOCK_FOLDER",
        "CHANGE_PASSWORD",
      ],
      required: true,
      index: true,
    },
    payload: {
      type: mongoose.Schema.Types.Mixed,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "sent", "applied", "failed"],
      default: "pending",
      index: true,
    },
    osType: {
      type: String,
      enum: ["windows", "linux", "darwin"],
    },
    isactive: { type: Boolean, default: true },
    requiresReboot: { type: Boolean, default: false },
    createdBy: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "DeviceConfiguration",
  DeviceConfigurationSchema
);
