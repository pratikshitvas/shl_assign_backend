// routes/project.js
const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');

// Route to retrieve all projects
router.get('/getAll', projectController.getAllProjects);

router.get('/:id', projectController.getProjectById);

router.get('/sort', projectController.ProjectsBySkillset);

module.exports = router;
