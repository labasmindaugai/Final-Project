const SectionModel = require('../models/section-model');
const SectionViewModel = require('../view-models/section-view-model');

const getSections = async (req, res) => {
  res.status(200).json({
    message: 'All user images fetched',
  });
};

const createSection = async (req, res) => {
  const {title, section, description, image } = req.body;
  await SectionModel.create({
    title, section, description, image
  });
  res.status(200).json({
    message: 'Tada',
  });
};

const updateSection = async (req, res) => {
  res.status(200).json({
    message: 'All user images fetched',
  });
};

const deleteSection = async (req, res) => {
  res.status(200).json({
    message: 'All user images fetched',
  });
};

module.exports = {
  getSections,
  createSection,
  updateSection,
  deleteSection
};
