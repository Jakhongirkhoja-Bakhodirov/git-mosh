let person = {
    first_name:'first_name',
    last_name:'last_name',
}

function Person(firstName, lastName , age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
 
    function getAge() {
        return this.age;
    }
}

const person1 = new Person('Jakhongir' , 'Ismoilov' , 21);

console.log(person1);