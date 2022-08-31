const title = function (input, start) {
  for (i = start; i < input.length; i++) {
    input[i] = input[i][0].toUpperCase() + input[i].slice(1,);
  }
  return input;
}

const makeCase = function (input, caseType) {
  const cases = typeof (caseType) === 'string' ? [caseType] : caseType;
  while (cases.length > 0) {
    if (cases.includes('camel')) {
      input = title(input.split(' '), 1).join('');
      cases.splice(cases.indexOf('camel'), 1);
    } else if (cases.includes('pascal')) {
      input = title(input.split(' '), 0).join('');
      cases.splice(cases.indexOf('pascal'), 1);
    } else if (cases.includes('snake')) {
      input = input.split(' ').join('_');
      cases.splice(cases.indexOf('snake'), 1);
    } else if (cases.includes('kebab')) {
      input = input.split(' ').join('-');
      cases.splice(cases.indexOf('kebab'), 1);
    } else if (cases.includes('title')) {
      input = title(input.split(' '), 0).join(' ');
      cases.splice(cases.indexOf('title'), 1);
    } else if (cases.includes('vowel')) {
      input = input.replace(/[aeiou]/g, function (letter) {
        return letter.toUpperCase();
      });
      cases.splice(cases.indexOf('vowel'), 1);
    } else if (cases.includes('consonant')) {
      input = input.toUpperCase().replace(/[AEIOU]/g, function (letter) {
        return letter.toLowerCase();
      });
      cases.splice(cases.indexOf('consonant'), 1);
    } else if (cases.includes("upper")) {
      input = input.toUpperCase();
      cases.splice(cases.indexOf('upper'), 1);
    } else if (cases.includes('lower')) {
      input = input.toLowerCase();
      cases.splice(cases.indexOf('lower'), 1);
    }
  }
  return input;
}

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));
console.log(makeCase("this is a string", ["kebab", "vowel"]));

/*
thisIsAString
ThisIsAString
this_is_a_string
this-is-a-string
This Is A String
thIs Is A strIng
THiS iS a STRiNG
THIS_IS_A_STRING
*/