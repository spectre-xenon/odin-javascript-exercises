const findTheOldest = function (arr) {
  arr = arr.sort((personA, personB) => {
    // if(!(yearOfBirth in personA || yearOfBirth in personB)
    let ageA = personA.yearOfDeath - personA.yearOfBirth;
    let ageB = personB.yearOfDeath - personB.yearOfBirth;
    return ageA > ageB ? -1 : 1;
  });

  return arr[0];
};

// Do not edit below this line
module.exports = findTheOldest;
