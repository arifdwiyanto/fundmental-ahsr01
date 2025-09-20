/**
 * Class: blue print untuk membuat object
 * Aturan penulisan:
 * class ClassName{
 *      property: DataType;
 * 
 *      constructor(param1, param2,...){
 *          this.property = param1;
 *      }
 * 
 *      methodName = function(){
 *          // taskcode
 *      }
 * }
 */

class Human {
    // Define property
    public name: string;
    public gender: "Male" | "Female";
    public age: number;
    // private religion: string = "Islam";
    #religion: string = "Islam";

    // Define constructor to receive data from outer class

    constructor(_name: string, _gender: "Male" | "Female", _age: number) {
        this.name = _name;
        this.gender = _gender;
        this.age = _age;
    }

    getIntroduce = function (this: any) {
        return `My name is ${this.name}`;
    }
}

const humanA: Human = new Human("Arif", "Male", 20);
console.log(humanA);
console.log(humanA.name);
console.log(humanA["gender"]);
console.log(humanA.age);
// console.log(humanA.religion);
// console.log(humanA.#religion);

// Array of object
const people: Human[] = [
    new Human("Arif", "Male", 20),
    new Human("John", "Male", 20),
    new Human("Putri", "Female", 20),
    new Human("Lisa", "Female", 20)
];

console.log(people);
console.log(people[2].getIntroduce());

// Inheritance: teknik pewarisan data dari class utama agar bisa digunakan class turunannya
class Student extends Human {
    public NIS: string;
    public program: "WD" | "DM" | "UIUX";

    constructor(
        _name: string,
        _gender: "Male" | "Female",
        _age: number,
        _NIS: string,
        _program: "WD" | "DM" | "UIUX"
    ) {
        super(_name, _gender, _age);
        this.NIS = _NIS;
        this.program = _program;
    }
}

const studentD = new Student("Arif", "Male", 20, "123456789", "WD");
console.log(studentD);
console.log(studentD.name);
console.log(studentD.getIntroduce());
console.log(studentD.NIS);