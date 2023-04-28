const { User } = require('../models');

module.exports = {
  // Get all users
  async getAllUsers(req, res) {
    try {
      const users = await User.find();

      return res.json(users);
    }
    catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  // Get a single user
  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId })
        .select('-__v')
        .lean();

      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' });
      }

      return res.json(user);
    }
    catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  // Create a new user
  async createUser(req, res) {
    try {
      const user = await User.create(req.body);

      return res.json({ user, message: 'User successfully created' });
    }
    catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  // Update a user
  async updateUser(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: req.body },
        { runValidators: true, new: true });

      return res.json({ user, message: 'User successfully updated' });
    }
    catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  // Add a friend to a user
  async addFriend(req,res) {
    try {
      const friend = await User.findOne({_id: req.params.friendId});
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $addToSet: { friends: friend } },
        { runValidators: true, new: true }
      );

      if (!user) {
        return res.status(404).json({ message: 'No such user exists' })
      }

      return res.json({ user, message: 'Friend successfully added' });
    }
    catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  // Remove friend from a user
  async removeFriend(req, res) {
    try {
      const friend = await User.findOne({_id: req.params.friendId});
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $pull: { friends: friend } },
        { runValidators: true, new: true }
      );

      if (!user) {
        return res.status(404).json({ message: 'No friend found with that ID' });
      }

      return res.json({ user, message: 'Friend successfully removed' });
    }
    catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  // Delete a user
  async deleteUser(req, res) {
    try {
      const user = await User.findOneAndRemove({ _id: req.params.userId });

      if (!user) {
        return res.status(404).json({ message: 'No such user exists' })
      }

      return res.json({ user, message: 'User successfully deleted' });
    }
    catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
};
