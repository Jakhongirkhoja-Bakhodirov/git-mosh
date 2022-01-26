let person = {
    first_name:'first_name',
    last_name:'last_name',
}

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

    this.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
}

let person1 = new Person('Jane','Doe')

console.log(person1.getFullName());