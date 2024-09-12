function myFunction() {
  console.log("Hello, World!");
}

if (typeof myFunction === 'function') {
  console.log("myFunction is defined.");
  myFunction();
} else {
  console.log("myFunction is not defined.");
}

if (myFunction instanceof Function) {
  console.log("myFunction is a function.");
  myFunction();
} else {
  console.log("myFunction is not a function.");
}

try {
  myFunction();
} catch (e) {
  console.log("myFunction is not defined.");
}
