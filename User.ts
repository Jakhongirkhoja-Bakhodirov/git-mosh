class User {
    private firstName:string;
    private lastName:string
    private age:string;
    protected password:string;
    public job:string
    protected salary:Float32Array;

    constructor(firstName:string,lastName:string,age:string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    public setFirstName(first_name:string) {
        this.firstName = first_name;
    }

    public setLastName(lastName:string) {
        this.lastName = lastName;
    }
}

const john = new User('John' , 'Doe' , '21');
