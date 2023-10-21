// controllers/projectController.js
const Project = require('../models/project'); // Import the Project model

// Controller function to create a new project
exports.createProject = async (req, res) => {
  try {
    const projectData = req.body;
    const project = new Project(projectData);
    const savedProject = await project.save();
    res.status(201).json(savedProject);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};

// Controller function to retrieve all projects
exports.getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find({});
    res.json(projects);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};

exports.getProjectById = async (req, res) => {
  try {
    const projectId = req.params.id; // Get the project ID from the URL
    const project = await Project.findById(projectId);

    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

    res.json(project);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};

exports.ProjectsBySkillset = async (req, res) => {
  try {
    const { frontend, backend } = req.query;

    // Create a query object to filter and sort projects
    const query = {};

    if (frontend) {
      query['Technical_Skillset.Frontend'] = { $in: frontend.split(',') };
    }

    if (backend) {
      query['Technical_Skillset.Backend'] = { $in: backend.split(',') };
    }

    const projects = await Project.find({
      $and: [query], // Use $and to filter based on both criteria
    });

    if (!projects || projects.length === 0) {
      return res.status(404).json({ message: 'No projects found matching the criteria.' });
    }

    // Sort the projects based on criteria if needed

    res.json(projects);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};