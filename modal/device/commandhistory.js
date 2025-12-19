const mongoose = require("mongoose");

const customScriptSchema = new mongoose.Schema(
  {
    agentId: {
      type: String,
      required: true,
    },
    script: {
      type: String,
      required: true,
    },
    response: {
      type: String,
    },
    error: {
      type: String,
    },
    status: {
      type: String,
      enum: ["pending", "completed", "failed"],
      default: "pending",
    },
    createdBy: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

// Update updatedAt automatically on save
customScriptSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model("CustomScript", customScriptSchema);
