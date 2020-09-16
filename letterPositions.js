const letterPositions = function(sentence) {
  const noSpace = sentence.split(' ').join('')
  const results = {};
  let incrementor = 0;
  for (const letter of noSpace) {
    if (results[letter]) {
      results[letter].push(incrementor)
      incrementor++
      } else {
      results[letter] = [incrementor];
      incrementor++
    }
  }
  return results;
}

console.log(letterPositions("hello"));