const express = require('express');
const router = express.Router();
const membersController = require('../../controllers/membersController')

router.post('/add-member', membersController.addMembers); 
router.get('/view-members', membersController.viewMembers); 
router.get('/member-details', membersController.memberDetails); 

module.exports = router;