// handle the user input 
const setUpInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  }
};


module.exports = {setUpInput};



// const {setUpInput} = require("./play")
// const {handleUserInput} = require("./play")

// setUpInput();
// handleUserInput();