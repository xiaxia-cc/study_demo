// student = new Object();
//
// student.name = "xiawei";
// student.age = "23";
//
// student.study = function () {
//     alert("studying")
// };
// student.eat = function () {
//     alert("eating")
// };

function student(name, age) {
    this.name = name;
    this.age = age;

    this.study = function () {
        alert('studying');
    };

    this.eat = function () {
        alert("eating")       ;
    };
}

