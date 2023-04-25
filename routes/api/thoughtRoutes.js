const router = require('express').Router();
const {
  getAllThoughts,
  getSingleThought,
  updateThought,
  createThought,
  deleteThought,
  addReaction,
  deleteReaction
} = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/thoughts').get(getAllThoughts).get(getSingleThought).post(createThought).put(updateThought).delete(deleteThought);

// /api/thoughts/:thoughtId/reactions
router.route('/api/thoughts/:thoughtId/reactions').post(addReaction).delete(deleteReaction);

module.exports = router;
