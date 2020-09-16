const countLetters = function(inputString) {
  let finalCount = {};
  const noSpaces = inputString.split(' ').join('')
  for (const letter of noSpaces) {
    if (finalCount[letter]) {
      finalCount[letter] += 1;
      } else {
      finalCount[letter] = 1;
    }
  }
  return console.log(finalCount);
};