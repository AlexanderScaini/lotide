const letterPositions = function(sentence) {
  const noSpace = sentence.split(' ').join('')
  const results = {};
  let incrementor = 0;
  for (const letter of noSpace) {
    if (results[letter]) {
      results[letter].push(incrementor)
      incrementor++
      console.log(letter)
      } else {
      results[letter] = [incrementor];
      incrementor++
      console.log(results[letter])
    }
  }
  return results;
}

console.log();
letterPositions("hello")

module.exports = letterPositions;