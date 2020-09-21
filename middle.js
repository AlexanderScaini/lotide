const middle = function(array) {

  let theMiddle = array.length / 2;
  let evenOrOdd = 0;

  // console.log(array.length)
   if (array.length <= 2) {
      return console.log([]);
    };

  const howMany = function(number) {
    if (number % 1 === 0) {
      // console.log("even");
      theMiddle -= 1
      return number + 1
    } else {
      // console.log("odd");
      return number + 1
    }
  };
  evenOrOdd = howMany(theMiddle);
  return array.slice(Math.floor(theMiddle), evenOrOdd);
};

module.exports = middle; 
