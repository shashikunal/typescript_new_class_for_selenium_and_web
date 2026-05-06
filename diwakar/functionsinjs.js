console.log("start");
function greet() {
  //   for (let i = 0; i < 1000000000; i++) {} //! time consuming loop

  while (true) {} //! execution will never be completed
  //! unreachable code
  let a = 2 + 2;
  console.log(a);
}

greet();

console.log("end");
