// let stu1 = {
//     name: "Eli",
//     surname: "Eliyev",
//     age: 23,
//     phoneNumbers: [56767, 345435],
//     groups: [
//         {
//             name: "P130",
//             room: "Sirius",
//             teachers: [
//                 {
//                     name: "Cavid",
//                     age: "40"
//                 },
//                 {
//                     name: "Eli",
//                     age: "22"
//                 }
//             ]
//         },
//         {
//             name: "A123",
//             room: "Any",
//             teachers: ["Cavid", "Cavidan"]
//         }
//     ],
// }

// for (const item of stu1.phoneNumbers) {
//     if (item==56767) {
//         console.log(stu1.name);
//     }
// }

// let isExist = stu1.phoneNumbers.includes(567)
// if (isExist) {
//     console.log("exist");
// }
// else {
//     console.log("no");
// }

// for (const item of stu1.groups) {
//     if (item.room=="Sirius") {
//         console.log(item.name);
//     }    
// }

// for (const item of stu1.groups) {
//     if (item.name=="P130") {
//         console.log(item.teachers);
//     }    
// }

// for (const item of stu1.groups) {
//     if (item.name=="P130") {
//         for (const teacher of item.teachers) {
//             console.log(teacher.name);
//         }
//     }    
// }

// let teacherFullData = () => {
//     for (const item of stu1.groups) {
//         if (item.name == "P130") {
//             for (const teacher of item.teachers) {
//                 if (teacher.name == "Cavid") {
//                     return(`${teacher.name} ${teacher.age}`);
//                 }
//             }
//         }
//     }
// }
// console.log(teacherFullData());





// let stu2 ={
//     name:"Veli",
//     surname:"Veliyev",
//     age: 54,
//     phoneNumbers: [212121,121234],
//     groups:[
//         {
//             name:"P130",
//             room:"Sirius",
//             teacher:["Cavid","Cavidan"]
//         }

//     ],
// }

// let stu3 ={
//     name:"Veli",
//     surname:"Eliyev",
//     age: 22,
//     phoneNumbers: [15555,73333],
//     groups:[
//         {
//             name:"P130",
//             room:"Sirius",
//             teacher:["Cavid","Cavidan"]
//         }
//     ],
// }

// let groups = {
//     name: "P130",
//     capacity: 5,
//     students: [],
//     addStudent: function (stu) {
//         if (this.students.length != this.capacity) {
//             this.students.push(stu)
//             return;
//         }
//         console.log("Group is full");
//     }
// }
// groups.addStudent("Eli");
// groups.addStudent("Veli");
// groups.addStudent("Ali");
// groups.addStudent("Cavidan");
// groups.addStudent("Ayxan");
// groups.addStudent("Eli");
// groups.addStudent("Ayxan");
// groups.addStudent("Cavid");

// console.log(groups.students);


