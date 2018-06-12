/* decodeString(s): Given an encoded string, return its corresponding decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is repeated exactly k times. Note: k is guaranteed to be a positive integer.

For s = "4[ab]", the output should be decodeString(s) = "abababab"
For s = "2[b3[a]]", the output should be decodeString(s) = "baaabaaa"
*/

function decodeString(s) {
  const arr = s.split('')
  const numStack = []
  const charStack = []
  const resStack = []

  arr.forEach((item, index, array) => {
    // if the item is a number add it to the num stack
    // need to check if it is more than 1 digit
    if (!isNaN(item)) {
      let num = ''
      while (!isNaN(array[index])) {
        num += array[index]
        array.splice(index, 1)
      }
      array.unshift('[') // putting back an extra pop
      numStack.push(parseInt(num, 10))
    } else if (item === ']') {
      // start popping until '['
      let count = numStack.pop()
      let chars = ''
      while (charStack[charStack.length - 1] !== '[') {
        chars = charStack.pop() + chars
      }
      charStack.pop() // remove the '['
      let temp = ''
      if (resStack.length > 0) {
        temp = resStack.pop()
        temp = (chars + temp).repeat(count)
      } else {
        temp = chars.repeat(count)
      }
      resStack.push(temp)
    } else {
      charStack.push(item)
    }
  })
  return resStack.join('')
}

module.exports = decodeString
