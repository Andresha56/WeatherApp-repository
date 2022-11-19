
// -----------calll---back-------
// const students = [
//     {
//         name: 'harry',
//         subject: 'Python',
//     },
//     {
//         name: 'Rohan',
//         subject: 'Javavscript',
//     }
// ];

// function callFunc(student,callbackStudent){
//     setTimeout(()=>{
//         students.push(student);
//         callbackStudent()
//     },3000);
// };
// let newStudent = { name: 'Jashika', subject: 'Machine learning' }
// // callFunc(newStudent,getStudents);

// function getStudents(){
//     students.forEach(stu=> {
//         console.log(stu);
//     });
// }


// // --------promisee------

// function func1(){
//     return new Promise(function(resolve,reject){
//         setTimeout(()=>{
//             const error=true;
//             if(!error){
//                 console.log("function:you promise has been resiolved");
//                 resolve('congrates')
//             }else{
//                 reject("sorry i'm fail to resolve your problem");
//             };
//             2000;
//         });
//     });
// };
// func1().then(function(){
//     console.log('done')
// })
// .catch(function(){
//     console.log("sorry")
// })

// api key
// f37b9c9a29e81e8b424018812868b197



// fetch

// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response )=> console.log(response.json()))
//     .then((jSon) => console.log(jSon))


// https://api.openweathermap.org/data/2.5/weather?q=Bengaluru&appid=c8e6dbac22a80fb604d5393ddc0ba513&units=metric