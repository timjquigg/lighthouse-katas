/*
In this exercise, we will be given a normal string of words and turn it into a percent-encoded string by replacing all whitespace with %20.
*/

const urlEncode = function (text) {
  const trimmedText = text.trim();
  let newText = '';
  for (let i = 0; i < trimmedText.length; i++) {
    trimmedText[i] !== ' ' ? newText += trimmedText[i] : newText += '%20';
  }
  return newText;
}

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));