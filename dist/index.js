// Array => list
// can store multiple values in single variable
let profile = ["shashi", 1];
profile.push("manu");
//tuple with function parameter
// function Users(profile:[string , number]) {
//     return profile
// };
// let user1 = Users(["shashi" , 19000])
let arr = [2000, "anuWithArray", "shashi"]; //no fixed size , no order
console.log(arr);
//tuple is flexible in few cases like array methods
let tuple = ["anuithTuple", 1000]; //fixed size order is important
console.log(tuple);
tuple.push("shashi");
console.log(tuple.length);
// order with methods
tuple.unshift(10000000);
console.log(tuple);
//tuple is extending array only 
let test = ["shashi"];
test.push("manu");
// // inference
// let data = ["shashi" , 10 , 1000]; //union array
// let data2:(string | number)[] = ["shashi" , 1000 , 1000];
// let data1 = ["shashi" , 10000] as const; //force tuple
// let data3:[string , number] = ["shashi" , 100000];
// size is matter use tuple 
// order is matter use tuple 
// RGB 
// cordinates => latitude and longitude
let RGBA = [255, 255, 255, 0.5];
let coords = ["12.2958° N", "76.6394° E"];
console.log(RGBA);
console.log(coords);
export {};
