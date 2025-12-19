const mongoose = require("mongoose");

const permissionSchema = new mongoose.Schema(
  {
    roleName: { type: String, required: true, unique: true, index: true },
    permissions: { type: [String], default: [] },
    description: { type: String },
    createdBy: { type: String },
    updatedBy: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Permission", permissionSchema);
