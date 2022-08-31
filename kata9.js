const camelCase = function (input) {
  const inputArr = input.split(' ');
  for (i = 1; i < inputArr.length; i++) {
    inputArr[i] = inputArr[i][0].toUpperCase() + inputArr[i].slice(1,);
  }
  return inputArr.join('');
}

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));

/*
Expected Output:
thisIsAString
loopyLighthouse
supercalifragalisticexpialidocious
*/