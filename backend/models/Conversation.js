const mongoose = require("mongoose");

const conversationSchema = new mongoose.Schema(
  {
    participants: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    lastMessage: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Message",
    },
  },
  {
    timestamps: true,
  }
);

conversationSchema.pre("save", function (next) {
  this.participants.sort();
  next();
});

const Conversation = mongoose.model("Conversation", conversationSchema);
module.exports = Conversation;
