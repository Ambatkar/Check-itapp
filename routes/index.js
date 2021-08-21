const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todo_controller.js')
console.log("Router Loaded");

router.use(express.urlencoded())
router.get('/',todoController.getList);
router.post('/',todoController.addList);
module.exports = router;