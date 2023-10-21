const mongoose = require('mongoose');

const SHL_projectsSchema = mongoose.Schema({
  Project: {
    _id: mongoose.Schema.Types.ObjectId,
    Title: String,
    Technologies: String,
  },
  Technical_Skillset: {
    Frontend: String,
    Backend: String,
    Databases: String,
    Infrastructre: String,
  },
  Other_Information: {
    Availability: String,
  },
});

const Project = mongoose.model('SHL_project', SHL_projectsSchema);

module.exports = Project;
