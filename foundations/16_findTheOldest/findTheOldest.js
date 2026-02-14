const findTheOldest = function(people) {
    let oldest = people[0];

    people.forEach(person => {
        if (typeof person.yearOfDeath === "undefined") {
            person.age = 2026 - person.yearOfBirth;
        } else {
            person.age = person.yearOfDeath - person.yearOfBirth;
        }

        if (oldest.age < person.age) {
            oldest = person;
        }
    });
    
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
