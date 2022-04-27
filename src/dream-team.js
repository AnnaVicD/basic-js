const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (members instanceof Array === false) { return false }
  let name = []

  members.forEach ( member => {
    if (typeof(member) != 'string') { return }
    member = member.trim()
    let firstLetter = member[0]
    if (typeof(firstLetter) == 'string') {
      name.push(firstLetter.toUpperCase())
    }
  })

  name = name.sort(function(a, b) {
    if(a < b) { return -1; }
    if(a > b) { return 1; }
    return 0;
  })

  return name.join('')
}

module.exports = {
  createDreamTeam
};
