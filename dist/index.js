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
// type CALWITHOUTRETURN = (val:string) => []; //no return value
// type Obj= () => object;
// type str = () => string;
//Type Aliases
// type USER = {
//     username:string;
//     age : number
// }
// INTERFACE
// interface USER {
//     username:string;
//     age:number
// }
// let user:USER = {
//     username:"shashu",
//     age:30,
// }
// console.log(user)
// interface does not create object
//it defines only rules or structure
// create one Emp object and share
// interface UserProfile {
//     username:string;
//     profileDetails():void;
// }
// let userDATA:UserProfile = {
//     username:"manu",
//     profileDetails(){
//         console.log(this.username)
//     }
// }
// console.log(userDATA.profileDetails())
//pattern
// interface ADD {
//     (firstNumber:number , secondNumber:number):number
// }
// let add:ADD =(firstNumber , secondNumber)=>{
//     return firstNumber + secondNumber
// }
// console.log(add(2 , 2))
// INTERFACE WITH FUNCTION
// interface ADD {
//     (firstNumber:number , secondNumber:number):number //function type in interface property
// }
// // interface ADD {
// //     add():number
// // }
// let addition:ADD = (firstNumber , secondNumber) =>{
//    return firstNumber + secondNumber
// }
// console.log(addition(10 , 10))
// interface with array
// interface USERS {
//     profiles:string[];
// }
// let Users:USERS = {
//     profiles:["shashi"]
// }
// interface USERS {
//     [name:number]:string[]
// }
// let users:USERS = [["shashi"] , ["manu"]]
// interface USERS {
//     [index:number]:string
// }
// let users:USERS = ["shashi" ]
// type USER = {};
// type ADDRESS = {};
// type PAYMENT = {};
// type profile = {
//     user:USER;
//     address:ADDRESS;
//     payment : PAYMENT
// }
// interface USER {
//     username:string
// }
// interface ADDRESS {
//    readonly street_name:string;
// }
// interface PAYMENT {
//     payment_mode?:string
// }
// interface PROFILE extends USER , ADDRESS , PAYMENT {}
// // type PROFILE2 = USER & ADDRESS & PAYMENT;
// let profile:PROFILE = {
//     username:"shashi",
//     street_name:"jaya nagar",
// }
// let profile2:PROFILE2 = {
//     username:"shashi",
//     street_name:"jaya nagar",
//     payment_mode:'online'
// }
// console.log(profile.street_name)
// type USER = {
//     username:string
// }
// type USER = {
//     age:number
// }
// interface USER {
//     username:string
// }
// interface USER {
//     age : number
// }
// interface USER {
//     address:object
// }
// let user:USER = {
//     username:'manu',
//     age:20,
//     address:{
//         name:'jayanagar'
//     }
// }
// interface ADDRESS {
//     city:string;
//     pincode :number
// }
// interface USER {
//     name:string,
//     address:ADDRESS
// }
// let user:USER = {
//     name:'dixith',
//     address:{
//         city:'mysore',
//         pincode:111
//     }
// }
// console.log(user)
//*-----------------------------TUPLE -------------------------------*/
// let TupleExample:[string , number] = ["shashi" , 1000]; //this tuple is only for compile time only
// console.log(typeof TupleExample);
// console.log(Array.isArray(TupleExample)); //true
// console.log(TupleExample);
// let TupleWith10Data:[string , number , boolean , null , undefined , object ] =
//  ["shahsi" , 100 , true , null  , undefined , {} ]
// access tuple Values
// Is Tuple is Mutable or not?
// let URL:readonly [string ,  number] = ["https://api.github.com/" , 200]; //tuple always should match the order
// console.log(URL);
// URL[0] = "https://www.google.com";
// console.log(URL);
// //if it is readonly flag that means no updates allowed
// nested tuple
// let Users:[string , [string , number , [boolean]]] = ["shashi"  , ["manu" , 100  , [true]]];
// console.log(Users[0]);
// console.log(Users[1][0]);
// console.log(Users[1][2]);
// console.log(Users[1][0][1]);
//optional tuple values
// let Users:[string , boolean?] = ["shashi"];
// NAMED TUPLE
//Named Tuples: Since TypeScript 4.0, you can add labels to elements to
// make your code more readable (e.g., [name: string, age: number]).
// let URL:[url:string , statusCode:number ,method:string] = ["https://www.google.com"  , 200  , "GET"];
// console.log(URL)
// Tuple with Array
// Array is containing tuples
// let LanguagesAndDuration:[string , number][] = [["java" , 10] , ["js" , 20] , ["python" , 40]];
// console.log(LanguagesAndDuration)
// tuple with type alias
// type ProfileData = [username:string , [address:string , pincode:number]];
// let User1:ProfileData = ["vinay" , ["address" , 20000]];
// console.log(User1)
// tuple with interface
// interface PROFILE {
//     [index:number]:[string , string]
// }
// let user2:PROFILE = ["vinay" , "manu"]
// interface with extends keyword with tuple
// tuple pattern
// interface User {
//     0:string;
//     1 : number
// }
// interface Profile extends Array<string| number> {
//     0 :string;
//     1:number
// }
// let profile:Profile = ["shashi" ,1];
// profile.push("manu")
//tuple with function parameter
// function Users(profile:[string , number]) {
//     return profile
// };
// let user1 = Users(["shashi" , 19000])
// let arr:(string| number)[] = [ 2000 , "anuWithArray"  , "shashi"]; //no fixed size , no order
// console.log(arr)
// //tuple is flexible in few cases like array methods
// let tuple:[string , number] = ["anuithTuple" , 1000 ]; //fixed size order is important
// console.log(tuple);
// tuple.push("shashi");
// console.log(tuple.length);
// // order with methods
// tuple.unshift(10000000);
// console.log(tuple)
// //tuple is extending array only
// let test:[string] = ["shashi"]
// test.push("manu");
// // inference
// let data = ["shashi" , 10 , 1000]; //union array
// let data2:(string | number)[] = ["shashi" , 1000 , 1000];
// let data1 = ["shashi" , 10000] as const; //force tuple
// let data3:[string , number] = ["shashi" , 100000];
// size is matter use tuple
// order is matter use tuple
// RGB
// cordinates => latitude and longitude
// let RGBA:[number , number , number , number] = [255 , 255 , 255 , 0.5];
// let coords:[lat:string , long:string] = ["12.2958° N" , "76.6394° E"];
// console.log(RGBA);
// console.log(coords)
// order is important use tuple
// fixed size value use tuple
// let x:[string] = ["shashi"]; //fixed sized
// let y:[number] = [10];
// // example two values in an array
// let twoValues:[number , string] = [10 , "hello"];
// UNION type
// let x:string; //undefined
// x = "shashi";
// x = 10;
// console.log(x)
// Union with Array
// let a:string|number = "shashi"
// let arr:string[] | number[];
// // arr = [1 ,2 , 4]
// arr = [10]; //string values with array
// arr = ["shashi"]
//need to store multiple array of values go with tuple
// either any one type in the value might what ever data type like , primitive or object
// union
// let x:string | number = "shashi";
// let x1:(string | number)[] = [1000 , "shashi" , 10000 , "11111"]; //js flow
// Object with union
// type USERPROFILE = string | number
// let user = {
//     username:"shashi",
//     userProfile:USERPROFILE
// }
// object literal :
// type annotation also use :
// let username:string | number; //union
// let age:number | string;
// // i need to use varaibale as object property key
// let userProfile = {
//     //inside you can create object properties separated by :
//     [username]:"manu",
//     [age]:10000
// }
// Unions , tuples , array , objects , type alias , interface
// let x : string | number = "shashi";
// let arr:string[] | number[] = ["shashi"];
// let obj:{name:string} | {age:number} = {name:"shashi" , age:1000};
// // union with function parameter
// let UserData = (name:string| number)=>{
//     return name;
// }
// console.log(UserData("shashi"));
// console.log(UserData(1000));
// console.log(UserData(true))
// try with union and tuple type
// let data:[string|number, boolean|string] = ["suman" ,   true];
// //try with union and type alias;
// type EMPID = string | number;
// const emp_id:EMPID = 123
// let value:string | number = 1000;
// if(typeof value === "string"){
//  console.log(value.toUpperCase());
// }else {
//     console.log(value.toFixed(4)); //number method
// }
// type narrowing
// |
// [string , number]
// type x ={}
// interface {}
// let x = "100";
// let y = 100;
// if(typeof(x) == typeof(y)){
//    console.log(typeof x);
//    console.log(typeof y)
// }
// when ever using object , interface ,  you should avoid unions
// let demo = (x:string | number) =>{
//     if(typeof x === "string"){
//         console.log(x.toUpperCase())
//     }else{
//         console.log(x.toFixed(1))
//     }
// }
// let demo1 = demo("shashi"); //SHASHI
// let demo2 = demo(1000); //1000.0
// Type-InterSections => combine multiple types into one type that has all properties
// syntax : &
// an engineer also a singer
// type PERSON = {
//     name:string;
//     age:number
// };
// type EMPLOYEE = {
//     companyId:string;
//     department:string
// };
// type PERSONEMP = PERSON & EMPLOYEE;
// let employee:PERSONEMP = {
//     name:"keerthi",
//     age:30,
//     companyId:'qsp',
//     department:'IT',
// }
// console.log(employee)
// intersection with interface
// interface A {
//   a: string;
// }
// interface B {
//   b: string;
// }
// interface C {
//   c: number;
// }
// type combined = A & B & C;
// let Data: combined = {
//   a: "hello",
//   b: "world",
//   c: 1000,
// };
// admin user
// type adminUser = {
//     role:string;
//     permission:string[];
// } & {
//     name:string;
//     email:string
// }
// let admin:adminUser = {
//     role:"admin",
//     permission:["read" , "write" , "delete"],
//     name:"adminUser",
//     email:"admin@admin.com"
// }
// console.log(admin)
// LITERAL TYPE
// string - ""
// number - 10
// boolean true
// object = {}
// array = []
// let str = new String("shashi");
// what are literal Type?
// Literal types you allow to specify EXACT value that a type can have(custom type)
// let x:"x" = "x";
// let y:"y" = "y";
// function GENID(id:"QSP-"){
//     return id + Math.round(Math.random()); //random id
// }
// let emp1 = GENID("QSP-");
// console.log(emp1)
// let status: "success" | "error" | "loading" = "loading";
// status = "success";
// status = "error";
// console.log(status)
// try with type alias
// type directions = "north" | "south" | "east" | "west";
// let move:directions = "south";
// console.log(`I am moving into ${move} side`)
//number literal type
// let fixedNumber :200 = 200;
// type STATUSCODE = 200 | 201 | 204 | 400 | 401 | 404 | 500 | "OK";
// let statusCode:STATUSCODE = 200;
//  //success
// console.log("SUCCESS" , statusCode)
// rating system 0 to 5 //
// type RATING = 0 | 1 | 2 | 3 | 4 |5;
// let rating:RATING = 5;
// console.log("My rating is " , rating)
// Literal Type with Object
// type MODE = "light" | "dark";
// let theme:MODE = {
//    mode:"dark"
// }
// let config:{
//     mode:"dark" | "light"
// } = {
//     mode:"dark"
// };
// config.mode = "light";
// console.log("My theme style is" , config)
// multiple Literal properties
// type USERROLE = "admin" | "student" | "teacher";
// let user:{
//     name:string;
//     role:USERROLE,
//     isActive:true|false
// } = {
//     name:"dixith",
//     role:"student",
//     isActive:true
// }
// console.log(user)
// Literal with array type
// RGB
// let rgb:["red" , "green" , "blue"] = ["red"  , "green" , "blue" ];
// console.log("RGA" , rgb);
// rgb.forEach(color => console.log(color));
// const colors = ():"red" | "green" | "blue" => "blue";
// console.log(colors())
// Type Assertions
// In type Assertion you create two ways
// syntax : <Type>Value
// syntax : value as type
// let anyValue:any = "100";
// // Example i need String type
// // Type Assertions
// //compile time only
// let strValue = <string>anyValue;
// let numVal = <number>anyValue
// //string
// console.log("data type" , typeof strValue);
// console.log(strValue.length);
// //number
// console.log(typeof numVal);
// console.log(numVal.toFixed(1))
//WHat is Type Assertions?
//in compile time can change the type
// let any:any;
// //i want convert any into string
// let str = <string>any;
// str = "manu"
// console.log(str)
// // i want to change any into number with help of type assertions
// let num = <number>any;
// num = 100;
// console.log(num);
// console.log(typeof num);
// // i want to change any into boolean with help of type assertions
// let bool = <boolean>any;
// bool = true;
// console.log(bool);
// console.log(typeof bool)
// let anyValue:any;
// //convert any into string
// let strValue = anyValue as string; //!SECTION
// strValue = "I am string you do whatever you within strings";
// console.log(strValue);
// console.log(strValue.toUpperCase());
// //lets try with number
// let numValue = anyValue as number;
// numValue = 1000;
// console.log(numValue);
// console.log(numValue.toFixed(2));
// lets try convert number into string;
// let num:number = 123;
// console.log(num);
// console.log(typeof num);
// //convert number into string;
// //Typescript does not allow direct conversion between unrelated type
// //use 'unknown' //middleman
// let str = num as unknown as string; //double assertion for unrelated type
// str = "123";
// console.log(str);
// console.log(typeof str)
// //convert into boolean
// let bool = num as unknown as boolean;
// bool = true;
// console.log(bool);
// console.log(typeof bool)
//Javascript //run time conversions
// let str = "123";
// console.log(str);
// console.log(typeof str);
// //i want to convert string into number
// let num = Number(str);
// console.log(num);
// console.log(typeof num);
// //i want to convert number into string
// let y = String(num);
// console.log(y);
// console.log(typeof y)
// let btn = document.getElementById("btn") as HTMLButtonElement; //type
// let h1 = document.getElementsByTagName("h1")[0] as HTMLHeadingElement;//type
// console.log(btn);
// console.log(h1)
// interface MockButtonELement {
//     disabled:boolean;
//     click:()=>void;
//     textContent:string
// }
// let btn:unknown = {
//     disabled:false,
//     click : () => console.log("clicked"),
//     textContent:'Submit'
// }
// let Button = btn as MockButtonELement;
// let x = document.getElementById("btn") as HTMLButtonElement
// Array of Object with Type Assertions
// interface Product {
//     id:number;
//     title:string;
//     price:number;
//     isStock:boolean;
// }
// let ProductsData:unknown = [
//     {
//        id:1,
//        title:"laptop",
//        price:10000,
//        isStock:true
//     },
//       {
//        id:2,
//        title:"Mobile",
//        price:20000,
//        isStock:false
//     }
// ]
// let products = ProductsData as Product[];
// console.log(products[0]?.title);
// let colors = ["red" , "green" , "blue"] as const;
// colors[0] = "shashi";
// ENUM
// /Numeric enums
//We’ll first start off with numeric enums, which are probably
// more familiar if you’re coming from other languages.
//  An enum can be defined using the enum keyword.
// enum Directions {
//     // 0,1 ,2,3
//     North, //enum members first item  0
//     South, //1 //! autoIncrement 1
//     East, //2
//     West, //3
// }
// let north = Directions.North;
// let south = Directions.South;
// let east = Directions.East;
// let west = Directions.West;
// console.log(north);//0
// console.log(south);//1
// console.log(east);//2
// console.log(west);//3
//schema values
// enum StatusCode {
//    informational = 100,
//    successfull = 200,
//    Redirection=300,
//    clientError = 400,
//    serverError = 500
// }
// console.log(StatusCode.informational);
// console.log(StatusCode.successfull);
// console.log(StatusCode.Redirection);
// console.log(StatusCode.clientError);
// console.log(StatusCode.serverError);
// String Enum
// enum ROLE {
//   Admin = "admin", //0
//   Editor = "editor",
//   User = "user",
//   Guest = "guest",
// }
// let admin: ROLE = ROLE.Admin;
// let editor: ROLE = ROLE.Editor;
// let user: ROLE = ROLE.User;
// let guest: ROLE = ROLE.Guest;
// if (admin) {
//   console.log("Role Admin exists");
// //   window.location.assign("/admin")
// } else if (editor) {
//   console.log("Editor Role exists");
// } else if (user) {
//   console.log("User role Exists");
// } else if (guest) {
//   console.log("Guest exists here");
// } else {
//   console.log("no more role");
// }
// enum Environments {
//   Development = "development",
//   Staging = "staging",
//   Testing = "testing",
//   Production = "production",
// }
// function ConfigApp(env: Environments): void {
//   if (env === Environments.Development) {
//     console.log("Server is running on local server for development");
//   } else if (env === Environments.Testing) {
//     console.log(
//       "Server is running on local server for Testing and giving to staging...",
//     );
//   }else if(env === Environments.Staging) {
//     console.log(
//       "Server is running on remote server for Testing and giving to production...",
//     );
//   }else if(env === Environments.Production) {
//     console.log(
//       "Server is running on remote server for production and ready for End user",
//     );
//   }
// }
// ConfigApp(Environments.Production);
// mixed enum
// enum mixed {
//     Yes = "yes",
//     No = 1,
//     MayBe = "may be"
// }
// console.log("Mixed YES" , mixed.Yes); //"yes"
// console.log("NO" , mixed.No); //1
// console.log("May be" , mixed.MayBe); //"may be"
// if(mixed.Yes === "yes") {
//     console.log("yes")
// }
// if(mixed.No === 1){
//     console.log("no")
// }
//Reverse Mapping with numeric ENUM ONLY WORKS
// enum Directions {
//     North,
//     South ,
//     East,
//     West
// }
// console.log("Value 0" , Directions[0]);
// console.log("Value 1" , Directions[1]);
// enum Colors {
//     Red = "red",
//     Green = "green",
//     Blue = "blue"
// }
// //if string enum reverse mapping is not work....
// console.log("String Value" , Colors['red']);
// Literal Type Vs enum
// Literal Type only works string "";
//Literals don't have reverse mapping; (in enum only numeric)
//simple set of values
// Functions in Typescript
// Functions are reusable block of code that perform specific task.
// In Typescript , we can specify
//     Parameter types ,
//     return type
//     optional parameters
//     default parameter
//     rest parameter
// function add(a:number , b:number):number{
//     return a+b; //number
// }
// let demo1 = add(10, 10);
// console.log(demo1)
// example 2: Function without return(void)
//void means this function does not return anything......
//it performs an action(printing) but gives nothing back
//this is useful just do something without needing to return data
// function Demo(name:string):void {
//     console.log(`Hello My name is ${name} welcome to typescript world`)
// }
// Demo("shashi")
// function with multiple parameters...
// function Profile(name:string , age:number , city:string):string {
//     return `My name is ${name} and my age is ${age} i am coming from ${city}` //string
// }
// let user1 = Profile("vinu" , 20 , "mysore");
// console.log(user1)
// Arrow function in Typescript
// Arrow functions are shorter and cleaner
//syntax:(parameter) => expression
// const square = (x: number): number => x * x; //number
// console.log(square(10))
// const divide = (a:number , b:number):number =>{
//     if(b===0){
//         throw new Error("cannot divide by zero!")
//     }
//     return a/b;
// }
// console.log(divide(10 ,2));
// without parameter return something
// let GetFullYear = ():number => new Date().getFullYear();
// console.log(GetFullYear())
//single parameter does not require parentheses
// let demo = (x:number):number => x + 1;
// console.log(demo(10));
// Optional parameter with functions
// let Profile = (name: string, age?: number, city?: string): string => {
//     if(city){
//         return `My name is ${name} age is ${age} and city is ${city}`;
//     }
//     return `My name is ${name} age is ${age}`
// };
// let user1 = Profile("keerthi"  , 20 , "mysore");
// console.log(user1)
// default parameter
//default values are used when parameter is not provided
// let Profile = (name:string , age:number = 20 , city:string ):string =>{
//     return `My name is ${name} age is ${age} and city i am coming from ${city}`
// }
// let user1 = Profile("vinu" , undefined , "bangalore"); //should not give empty update with undefined
// console.log(user1)
// rest Parameter
// Rest parameters allow multiple arguments to be passed as array
// syntax of rest parameter ...Rest(rest parameter or spread operator)
// in function rest parameter always should at the last parameter
//In JavaScript, the arguments object is a built-in, array-like object
//  available inside every non-arrow function. It contains the values of all 
// arguments passed to the function, even those not explicitly declared as parameters.
// let  Users  = ()=>{
//     return arguments; //argument object exists in normal function only it is not available in arrow function
// }
// let user1 = Users("shashi" , "vinu" , "keerthi" , 100);
// console.log(Array.from(user1).forEach(x => console.log(x)))
// REST parameter
//arrow function
// let Users = (...Rest:string[]):string[]=>{
//     return Rest; //always return array[]
// }
// let user1 = Users("shashi" , "vinu" , "anu" , "keerthi" , "kushal");
// console.log(user1)
// //normal function
// function NormalUsers(...rest:string[]):string[]{
// return rest
// }
// let user2 = NormalUsers("shashi" , "vinu" , "anu" , "keerthi" , "kushal");
// console.log(user2)
//A rest parameter must be last in a parameter list.
let UserProfile = (name, age, ...languages) => ({ name, age, languages });
let user1 = UserProfile("vinu", 30, "java", "nodejs", "python");
console.log(user1);
export {};
