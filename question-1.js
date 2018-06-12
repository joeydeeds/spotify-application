/* sortByStrings(s,t): Sort the letters in the string s by the order they occur in the string t.
You can assume it will not have repetitive characters.
Example:
s = "weather" and t = "therapyw", the output should be sortByString(s, t) = "theeraw".
s = "good" and t = "odg", the output should be sortByString(s, t) = "oodg".
*/
function sortByStrings(s, t) {
  let result = s.split('')
  result.sort((a, b) => {
    return t.indexOf(a) - t.indexOf(b);
  })
  return result.join('')
}

module.exports = sortByStrings
