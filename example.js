var person1 = {
    firstname: 'Bob',
    lastname: 'Smith',
    age: 40
};

var person2 = {
    firstname: 'Jane',
    lastname: 'Roberts',
    age: 67
};

var person3 = {
    firstname: 'Bill',
    lastname: 'Whatever',
    age: 35
};

var people = [person1, person2, person3];
console.log(people);

for (i = 0; i < people.length; i++){
    console.log(people[i].firstname);
}