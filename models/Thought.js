const { Schema, Types } = require('mongoose');

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      maxlength: 280,
      minlength: 1,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    reactions: {
      type: Number,
      required: true,
      default: () => Math.floor(Math.random() * (100 - 70 + 1) + 70),
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

const reactionSchema = new Schema(
  {
    reactionId: {
      type: ObjectId,
      default: new ObjectId,
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: string,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
  },
);

module.exports = thoughtSchema;
