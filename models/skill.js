const skills = [
    {id: 1234, skill: 'html', techstack: 'frontend'},
    {id: 1233, skill: 'js', techstack: 'frontend'},
    {id: 1232, skill: 'node.js', techstack: 'backend'},
];

module.exports = {
    getAll,
    getOne,
    Create,
};

function getAll() {
    return skills;
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}

function create(id) {
  skill.id = Date.now() % 1000000;
  skill.techstack = 'not known';
  skills.push(skill);
  return skill
}




