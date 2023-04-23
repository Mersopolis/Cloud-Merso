const router = require('express').Router();
const {
  getAllUsers,
  getSingleUser,
  createUser,
  addFriend,
  removeFriend,
  updateUser,
  deleteUser,
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getAllUsers).get(getSingleUser).post(createUser).put(updateUser).delete(deleteUser);

// /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

module.exports = router;
