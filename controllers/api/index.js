const router = require('express').Router();
const userRoutes = require('./user-route.js');
const commentRoutes = require('./comment-route.js');
const postRoutes = require('./post-route.js')

router.use('/users', userRoutes);
router.use('/comments', commentRoutes);
router.use('/posts', postRoutes);


module.exports = router;