const Skill = require('../models/skill')

module.exports = {
    index,
    show,
    create,
    delete: deleteSkill,
    new: newSkill
};

function index(req, res) {
    res.render('skills/index', {
      skills: Skill.getAll(),
      title: 'Home Page'

    });
  }

  function show(req, res) {
    res.render('skills/show',{
    skill: Skill.getOne(req.params.id),
    title: 'Skill Detail'
    })
    }

    function create(req, res) {
    //   let skill = Skill.getOne.create (req.body)
    Skill.create(req.body)
    res.redirect('/skills');
}

function deleteSkill(req, res) {
    skill.deleteOne(req.params.id);
    res.redirect('/skills');
  }

  function newSkill(req, res) {
    res.render('skills/new', {title: 'New Skill' }) 
  }
  