const router = require('express').Router();
const { Project } = require('../../models');

router.get("/",async (req,res)=>{
  try {
    const projects = await Project.findAll();
    res.json(projects)
  }catch (err) {
    res.status(400).json(err);
  }
})

router.post('/', async (req, res) => {
  if(!req.session.logged_in){
    res.status(403).json({msg:"login first!"})
  }
  try {
    const newProject = await Project.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newProject);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  if(!req.session.logged_in){
    res.status(403).json({msg:"login first!"})
  }
  try {
    const projectData = await Project.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!projectData) {
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }

    res.status(200).json(projectData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
