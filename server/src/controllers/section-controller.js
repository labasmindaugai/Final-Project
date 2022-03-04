const SectionModel = require('../models/section-model');
const SectionViewModel = require('../view-models/section-view-model');

const getSections = async (_, res) => {
  try {
  const sectionDocs = await SectionModel.find();
  const sections = sectionDocs.map((sectionDoc) => new SectionViewModel(sectionDoc));
  res.status(200).json({ sections, message: 'bananas' });
} catch(error) {
  res.status(400).json({ error });
};
};

const createSection = async (req, res) => {
  try {
  const { filename } = req.file;
  await SectionModel.create({
    title: req.body.title, section: req.body.section, description: req.body.description, image: filename,
  });
  res.status(200).json({
    message: 'Tada',
  });
} catch(error) {
  res.status(400).json({ error, mesage: error.message});
};
};

const updateSection = async (req, res) => {
  try {
    const { filename } = req.file;
    await SectionModel.updateOne({
      title: req.body.title, section: req.body.section, description: req.body.description, image: filename,
    });
  res.status(200).json({
    message: 'All user images fetched',
  });
} catch(error) {
  res.status(400).json({ error, mesage: error.message});
};
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
