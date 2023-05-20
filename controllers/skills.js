const Skill = require('../models/skill')

module.exports = {
    index,
    show,
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
  