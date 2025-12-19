const mongoose = require("mongoose");

const AlertEventSchema = new mongoose.Schema(
  {
    agentId: { type: String, index: true },
    hostname: { type: String },
    alertCode: { type: String, index: true },
    severity: {
      type: String,
      enum: ["low", "medium", "high", "critical"],
      index: true,
    },
    message: { type: String },
    metric: { type: String },
    value: { type: mongoose.Schema.Types.Mixed },
    acknowledged: { type: Boolean, default: false },
    resolvedAt: { type: Date },
    triggeredAt: { type: Date, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("AlertEvent", AlertEventSchema);
