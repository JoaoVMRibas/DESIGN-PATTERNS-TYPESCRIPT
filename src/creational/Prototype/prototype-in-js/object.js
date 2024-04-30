const personPrototype = {
  firstName: "Luiz",
  lastName: "Silva",
  age: 23,

  fullName() {
    return this.firstName + " " + this.lastName;
  },
};

const anotherPerson = Object.create(personPrototype);
console.log(anotherPerson);
console.log(anotherPerson.firstName);
console.log(anotherPerson.fullName());

anotherPerson.firstName = "Joana";
console.log(anotherPerson);
console.log(anotherPerson.firstName);
console.log(anotherPerson.fullName());
