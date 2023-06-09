const { Schema, Types, model } = require('mongoose');
const thoughtSchema = require('./Thought');

const validateEmail = (email) => {
  const re = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
  return re.test(email);
};

// Schema to create User model
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trimmed: true
    },
    email: {
      type: String,
      unique: true,
      required: true,
      validate: [validateEmail, "Please fill a valid email address"],
      match: [
        /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
        "Please fill a valid email address",
      ],
    },
    thoughts: {
      type: [Schema.Types.thoughtSchema]
    },
    friends: {
      type: [this]
    }
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

userSchema.virtual('friendCount')
// Getter
.get(function () {
  return `${this.friends.length}`;
})

const User = model('user', userSchema);

module.exports = User;
