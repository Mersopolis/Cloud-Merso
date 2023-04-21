const router = require('express').Router();
const {
  getAllThoughts,
  getSingleThought,
  updateThought,
  createThought,
  deleteThought,
} = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/thoughts').get(getAllThoughts).post(createThought);

// /api/thoughts/:thoughtId
router.route('thoughts/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

// /api/thoughts/:thoughtId/reactions
router.route('/api/thoughts/:thoughtId/reactions').post(addReaction).delete(deleteReaction);

module.exports = router;
