/*
In this exercise, we will write an algorithm to help taxicabs determine how far away a destination is based on the directions given.

The taxi driver is given a list of directions that tell her whether to turn left or right, and how many blocks to drive for. Every time the taxi driver has to turn left, she will make a 90° turn anticlockwise, and every time the taxi driver has to turn right, she will make a 90° turn clockwise.

Let's take a look at some example directions: ["right", 2, "left", 3, "left", 1].

First the taxi driver must turn "right", then drive for 2 blocks.
Then the taxi driver must turn "left", and drive for 3 blocks.
Finally, the taxi driver must turn "left" again, and drive for 1 block.
Now that the taxi driver is at her final destination, we can determine that she is 1 block east and 3 blocks north of where she started.
*/

const blocksAway = function (directions) {
  const compassDirection = ['north', 'east', 'south', 'west'];
  let direction = directions[0] === 'right' ? 'east' : 'north';
  const location = [0, 0];
  for (let i = 1; i < directions.length; i++) {
    if (i % 2 === 0) {
      if (directions[i] === 'right') {
        direction = compassDirection.indexOf(direction) === 3 ? 'north' : compassDirection[compassDirection.indexOf(direction) + 1];
      } else {
        direction = compassDirection.indexOf(direction) === 0 ? 'west' : compassDirection[compassDirection.indexOf(direction) - 1];
      }
    } else {
      switch (direction) {
        case 'north':
          location[1] += directions[i];
          break;
        case 'east':
          location[0] += directions[i];
          break;
        case 'south':
          location[1] -= directions[i];
          break;
        case 'west':
          location[0] -= directions[i];
          break;
      }
    }
  }
  return { 'east': location[0], 'north': location[1] };
}

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));

/*
Expected Output:
{east: 1, north: 3}
{east: 3, north: 3}
{east: 0, north: 0}
*/