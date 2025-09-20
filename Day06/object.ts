/**
 * Object: data yang mampu menampung sekumpulan tipe data lain. Jika array beralamat index, maka object beralamat property.
 * 
 * Aturan penulisan:
 * 1. Literal
 * const objectVariable = {
 *      namaProperty: value,
 *      userName: "Edi",
 *      age: 17,
 *      grade: ["A", "B"]
 *      isActive: true
 *      introFunc: function(){
 *              // taskcode
 *      }
 * }
 * 
 * 2. new Object()
 * const objectValue = new Object();
 * objectValue.username = "Edo";
 * objectValue.age = 15;
 * 
 * 3. class
 * class Student{
 *  public username:string;
 *  public age:string;
 *      constructor(_username:string,_age:number){
 *          this.username = _username;
 *          this.age = _age;
 *      }
 * }
 * 
 * const murid1 = new Student("Aldo", 18);
 * const murid2 = new Student("Edo", 18)
 */

interface IStudent {
    name: string,
    age: number,
    noTelp?: string,
}

const studentA: IStudent = {
    name: "Edi",
    age: 18,
}

console.log(studentA.name);
console.log(studentA["name"]);

// MUTABLE dan IMMUTABLE
// IMMUTABLE: string, number
let immuString: string = "Hello";
let duplicateImmuString: string = immuString;
console.log(immuString);
console.log(duplicateImmuString);
duplicateImmuString = duplicateImmuString + " Edo";
console.log(duplicateImmuString);
console.log(immuString);

// MUTABLE: array, object
let studentB: IStudent = { name: "Aldi", age: 20 };
let duplicateStudent: IStudent = studentB;
console.log(studentB);
console.log(duplicateStudent);
duplicateStudent.name = "Zafran";
console.log(duplicateStudent);
console.log(studentB);

// IMMUTABLE for array and object
let newDuplicate: IStudent = { ...studentB }; // menyalin data secara IMMUTABLE
console.log(newDuplicate);
console.log(studentB);
newDuplicate.name = "Bimo";
console.log(studentB);
console.log(newDuplicate);

// Looping object
for (const property in newDuplicate) {
    console.log(property);
    console.log(newDuplicate[property as keyof IStudent]);
}

// Object.keys(object): mendapatkan daftar nama property yang disimpan pada array
console.log(Object.keys(newDuplicate));

// Object.values(object): mendapatkan value yang disimpan pada array
console.log(Object.values(newDuplicate));