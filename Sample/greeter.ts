class student {

    fullName: string;
    constructor(public firstName: string, public lastName: string) {
        this.fullName = firstName + lastName;
    }
}

interface Person {

    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello " + person.firstName + " " + person.lastName;
}

let user = new student("karthik", "s");

document.body.innerHTML = greeter(user);




