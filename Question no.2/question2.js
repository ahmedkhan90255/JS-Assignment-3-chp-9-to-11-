document.write(
  "<h1>Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am </h1>"
);

var gender = prompt("Enter Your Gender");

if (gender === "Male") {
  document.write("<h2>'Good Morning Sir!'</h2>");
} else if (gender === "male") {
  document.write("<h2>'Good Morning Sir!'</h2>");
} else if (gender === "Female") {
  document.write("<h2>'Good Morning Ma'am!'</h2>");
} else if (gender === "female") {
  document.write("<h2>'Good Morning Ma'am!'</h2>");
} else if (gender === gender) {
  document.write("<h2>'Good Morning!'</h2>");
}
