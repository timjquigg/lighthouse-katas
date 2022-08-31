/*
In this exercise, we will be given a list of instructors and we will create a single object to organize them based on their course.
*/

const organizeInstructors = function (instructors) {
  const courses = {};
  for (let instructor of instructors) {
    if (courses.hasOwnProperty(instructor.course)) {
      courses[instructor.course].push(instructor.name);
    } else {
      courses[instructor.course] = [instructor.name];
    }
  }
  return courses;
}

console.log(organizeInstructors([
  { name: "Samuel", course: "iOS" },
  { name: "Victoria", course: "Web" },
  { name: "Karim", course: "Web" },
  { name: "Donald", course: "Web" }
]));
console.log(organizeInstructors([
  { name: "Brendan", course: "Blockchain" },
  { name: "David", course: "Web" },
  { name: "Martha", course: "iOS" },
  { name: "Carlos", course: "Web" }
]));

/*
Expected Output:
{
  iOS: ["Samuel"],
  Web: ["Victoria", "Karim", "Donald"]
}
{
  Blockchain: ["Brendan"],
  Web: ["David", "Carlos"],
  iOS: ["Martha"]
}
*/