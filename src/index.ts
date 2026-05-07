// Array => list
// can store multiple values in single variable

//let langauges = ["java" , 19 , true , null , undefined] // Array literal by default that any type


// same type of values like only string 
// how to store same type of data inside array 

// let languages:string[] = ["java" , "js" , "nodejs" , "python"];
// let courseDuration:number[] = [10 , 20  , 39.1 , 199 , "shashi"];

// Array synatx with types

// type[]

// let lang:string[] = ["java" , "selenium"];


// // Array<type>

// let Courses:Array<string> = ["java" , "playwright"]

//type safety
// let usersInfo:string[] = ["shashi" , "dixith"];

// usersInfo[0] = "maya";
// usersInfo[2] = "test";

// console.log(usersInfo)

// usersInfo.push("pooja");//appends new elements to the end of an array, and returns the new length of the array.

// usersInfo.unshift("diwakar"); //Inserts new elements at the start of an array, and returns the new length of the array

// //remove element from the array
// // remove last element in th array

// usersInfo.pop(); //Removes the last element from an array and returns it. 
// // If the array is empty, undefined is returned and the array is not modified.
// usersInfo.shift(); //Removes the first element from an array and returns it.
//  If the array is empty, undefined is returned and the array is not modified.

// Iterating with loop




//for loop 
// for(let i=0; i<languages.length;i++){
//     console.log(languages[i])
// }

//for of loop way
// for(let i of languages){
//     console.log(i)
// }

// forEach method  only works Array
// languages.forEach((lang)=>{
//     console.log(lang)
// })

// let languages:Array<string> = ["java" , "js" , "python" , "ruby" , "php"];
// let str:string = "shashi";

// console.log(typeof languages); //object(Array)
// // how to iterate array of values

// // forEach() ->WAY
// languages.forEach(function(val){
//     console.log(val);
// }); //forEach is expecting  function


// Multidimensional arrays


//syntax
// let arrays:type[][]
// let users:string[] = ["shashi"];
// let users1:string[][] = [["shashi"], ["dixith"]];

// console.log(users1[0][0])
// // let users2:number[][][] = [[[10]]]


// let users:Array<Array<string>> = [["shashi"]];

// let users1:string[][] = [["users"]]

// //readonly
// let users:readonly string[] = [ "shashi" , "dixith" , "diwakar"];

// users[0] = "shashikunal";
// users[1] = "dixith kumar";
// users[2] = "diwakar kumar";
// console.log(users)

// let x:(string| number | boolean)[] = ["s" , "x" , 10 , true , null]


// // objects and tuple , functions




// create an object
//example of type inference with object 

// let user = {
//     //key:value pair
//     username : "shashi", //property
//     company:"qspiders",
//     salary:10000,
//     age:10

// } //object literal

// // console.log(user);

// user.username = "dixith";
// user.company = "jspiders";
// user.age = 20;
// console.log(user)

// Type Annotation with object
//username
//email 
//company 
//salary
//city
//IsPaid
//IsHire
//gender
//skills

//inline with type annotation
// let userProfile:{
//     username:string;
//     email:string;
//     isPaid:boolean;
//     salary:number;
//     skills:string[];
//     subjects:string[];
// } = {
//     username:"dixith",
//     email:"dixith@gmail.com",
//     isPaid:true,
//     salary:100000,
//     skills:["java" , "js"],
//     subjects:["node" , "playwright"]

// }

// console.log(userProfile)

// Object with Type Inference 
// let userwithInference={
//     username:"shashi"
// }
// console.log(userwithInference);



// // Object with Type Annotation

// let userWithAnnotation:{
//     username:string;
// };
// userWithAnnotation = {
//     username:"shashi"
// }

// console.log(userWithAnnotation)

// create nested objects

//blue print
// let user:{
//     name:string;
//     address:{
//         city:string;
//         country:string;
//         state:string;
//         pincode:number;
//     };
//     pancard:number;

// };

// user = {
//     name:"vinay",
//     address:{
//         city:"mysore",
//         country:'india',
//         pincode:570011,
//         state:"karanataka"
//     },
//     pancard:222222

// }

// console.log(user)

//optional property
// let student : {
//    readonly std_name:string; //read only property means can not mutate the value
//     std_grade?:number;
//     std_city?:string;
//     std_available?:boolean;
// }


// student = {
//     std_name:"kushal"
// }

//  student.std_name = "shashi"; //Cannot assign to 'std_name' because it is a read-only property.

// console.log(student)


// create an Object inside Array

// let Users: { username:string;  salary:number}[] = [
    
//     {
//         username:"shashi",
//         salary:10000
//     },
//     {
//          username:"dixith",
//         salary:100000
//     },
//     {
//          username:"vinay",
//         salary:20000
//     },
   
// ];

// console.log(Users)

// Array of Nested Objects

// let userProfile:{
//     name:string;
//     address:{
//         city:string;
//         state:string;
//         pincode:number
//     }[]
// }[];

// userProfile = [
//     {
//         name:'shashi',
//         address:[
//             {
//             city:'banaglore',
//             state:'karanataka',
//             pincode:111111
//         },
    
//         {
//            city:'mysore',
//             state:'karanataka',
//             pincode:22222 
//         }
//     ]
        
//     }
// ];

// console.log(userProfile[0]?.address[0]?.city);


// // type alias , function 

// type str = string;

//primitive way apply type aliases

// let MyName:str = "shashi";
// let company:str = "qspiders";

// console.log(MyName);
// console.log(company);


//Object type Aliases(Object reference way)

// type USERPROFILE = {
//     username:string;
//     pancard:number;
//     address:string;
// }


// let userProfile:USERPROFILE = {
//     username:"vinay",
//     pancard:1000000,
//     address:"sksksssss"
// }

// console.log(userProfile)


// create one Employee Object with type Aliases
//emp_id
//emp_address
//emp_exp
//skills
//city
//education
//salary


// type SKILLS = [

// ];
// type EDUCATIONS = {}
// type EXP = {}


// type USER = {
//     username:string;
//     photo:string;
//     gender:string;
//     IsActive?:boolean;
//    };


// type ADDRESS = {
//         streetName:string,
//         city:string;
//         pincode:number;

//     }
// type SKILLS = {
//     frontend:string[],
//     backend:string[]
// }

// // type EMP_OBJ = USER & ADDRESS //intersection

// type EMPOBJ = {
//     user:USER,
//     temp_address:ADDRESS
//     skills:SKILLS,
//     perm_address:ADDRESS
// }


// let emp_obj :EMPOBJ = {
//     user:{username:'shashi',photo:"https://unsplash.com/s/photos/fake-man",gender:'male'  },
//   temp_address:{streetName:"4th cross" , city:'mysore',pincode:11111},
//   skills:{frontend:["reactjs" , "js"],backend:["java" , "spring"] },
//   perm_address:{streetName:"5th cross" , city:'mandya',pincode:33333},

// }

// console.log(emp_obj)


// type username = string;
// type age = number;
// type company = string;

// type profile = {
//     username:username;
//     age:age;
//     company:company
// }

// type empProfile = {
//     emp_name:username,
//     emp_age: age;
//     emp_company:company
// }

// let userProfile:profile = {
//     username:"vinu",
//     age:30,
//     company:"ty"
// }

// let emp_profile:empProfile = {
//     emp_name:"manu",
//     emp_age: 20,
//     emp_company:"qspiders"
// }

// console.log(userProfile);
// console.log(emp_profile)

// ARRAY Alias

// type TASKLIST  = {title:string; IsCompleted:boolean}[];

// let TaskList:TASKLIST = [
//     {
//         title:"selenium trainer",
//         IsCompleted:true,
       
//     }
// ];

// console.log(TaskList)

// functional ALIAS

// i need only console or  not return data (void)


type CALWITHOUTRETURN = (val:string) => []; //no return value
type Obj= () => object;
type str = () => string;





