var student = /** @class */ (function () {
    function student(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + lastName;
    }
    return student;
}());
function greeter(person) {
    return "Hello " + person.firstName + " " + person.lastName;
}
var user = new student("karthik", "s");
document.body.innerHTML = greeter(user);
