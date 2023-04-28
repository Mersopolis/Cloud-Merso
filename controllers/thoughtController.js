const { User, Thought } = require('../models');

module.exports = {
  // Get all thoughts
  async getAllThoughts(req, res) {
    try {
      const thoughts = await Thought.find();

      return res.json(thoughts);
    }
    catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  // Get a single thought
  async getSingleThought(req, res) {
    try {
      const thought = await Thought.findOne({ _id: req.params.thoughtId })
        .select('-__v');

      if (!thought) {
        return res.status(404).json({ message: 'No thought with that ID' });
      }

      return res.json(thought);
    }
    catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  // Create a thought
  async createThought(req, res) {
    try {
      const thought = await Thought.create(req.body);
      const thoughtUser =  await User.findOneAndUpdate(
        { _id: req.body.userId },
        { $addToSet: { thoughts: thought } },
        { runValidators: true, new: true }
      );

      return res.json({ thought, thoughtUser, message: 'Thought successfully created' });
    }
    catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  // Update a thought
  async updateThought(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $set: req.body },
        { runValidators: true, new: true }
      );
      const thoughtUser =  await User.findOneAndUpdate(
        { _id: req.body.userId },
        { $set: { thoughts: { _id: req.body.thoughtId } } },
        { runValidators: true, new: true }
      );

      if (!thought) {
        return res.status(404).json({ message: 'No thought with this id!' });
      }

      return res.json({ thought, thoughtUser, message: 'Thought successfully updated' });
    }
    catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  // Add a reaction to a thought
  async addReaction(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $addToSet: { reactions: req.body } },
        { runValidators: true, new: true }
      );

      if (!thought) {
        return res.status(404).json({ message: 'No thought with this id!' });
      }

      return res.json({ thought, message: 'Reaction successfully added' });
    }
    catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  // Delete a reaction from a thought
  async deleteReaction(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $pull: { reactions: { reactionId: req.params.reactionId } } },
        { runValidators: true, new: true }
      );

      if (!thought) {
        return res
          .status(404)
          .json({ message: 'No thought found with that ID' });
      }

      return res.json({ thought, message: 'Reaction successfully deleted' });
    }
    catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  // Delete a thought
  async deleteThought(req, res) {
    try {
      const thought = await Thought.findOneAndDelete({ _id: req.params.thoughtId });
      const thoughtUser =  await User.findOneAndUpdate(
        { _id: req.body.userId },
        { $pull: { thoughts: {_id: req.body.thoughtId } } }
      );

      if (!thought) {
        return res.status(404).json({ message: 'No thought with that ID' });
      }

      return res.json({ thought, thoughtUser, message: 'Thought successfully deleted' });
    }
    catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
};
