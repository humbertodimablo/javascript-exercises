const findTheOldest = function(people) {
    if(!Array.isArray(people) || people.length === 0) {
        return null;
    }
const currentYear = new Date().getFullYear();
return people.reduce((oldest, person) => {
    const yearOfDeath = person.yearOfDeath || currentYear;
    const age = yearOfDeath - person.yearOfBirth;
if (age > (oldest.yearOfDeath || currentYear) - (oldest.yearOfBirth || 0)){
    return person;
}
return oldest;
})
};
const people = [
    {
      name: 'Carly',
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: 'Ray',
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: 'Jane',
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ];

  const oldestPerson = findTheOldest((people).name);
  console.log(oldestPerson);
// Do not edit below this line
module.exports = findTheOldest;
