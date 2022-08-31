const repeatNumbers = function (data) {
  const repeats = [];
  for (let i = 0; i < data.length; i++) {
    repeats.push(String(data[i][0]).repeat(data[i][1]));
  }
  return repeats.join(', ');
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));

/*
Expected Output:
1111111111
11, 222
10101010, 343434343434, 9292
*/