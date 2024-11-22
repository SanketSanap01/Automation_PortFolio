// Placeholder for any future interactivity (currently empty)
console.log("Page loaded and ready.");
var tag = document.getElementsByTagName("p")[0];
text = tag.innerHTML;
// Here I would like to call the Python interpreter with Python function
arrOfStrings = openSomehowPythonInterpreter("~/BackEnd.py", "trial()");
console.log('Data executed')