document.write(
  "<h1> Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting percentage on your page. Take percentage & compute grade as per following table </h1>"
);

var totalMarks = +prompt("Enter Total Marks of the subjects");
var obtainedMarks = +prompt("Enter Obtained Marks");
var totalPercentage = (obtainedMarks / totalMarks) * 100;

document.write("<h1> Mark Sheet </h1>");

if (totalPercentage >= 80) {
  document.write(
    "<h2>Total Marks : " +
      totalMarks +
      "<br>Marks Obtained : " +
      obtainedMarks +
      "<br>Percentage : " +
      totalPercentage +
      "<br>Grade : A-one <br>Remarks : Excellent </h2>"
  );
} else if (totalPercentage >= 70) {
  document.write(
    "<h2>Total Marks : " +
      totalMarks +
      "<br>Marks Obtained : " +
      obtainedMarks +
      "<br>Percentage : " +
      totalPercentage +
      "<br>Grade : A <br>Remarks : Good </h2>"
  );
} else if (totalPercentage >= 60) {
  document.write(
    "<h2>Total Marks : " +
      totalMarks +
      "<br>Marks Obtained : " +
      obtainedMarks +
      "<br>Percentage : " +
      totalPercentage +
      "<br>Grade : B <br>Remarks : You need to improve </h2>"
  );
} else if (totalPercentage < 60) {
  document.write(
    "<h2>Total Marks : " +
      totalMarks +
      "<br>Marks Obtained : " +
      obtainedMarks +
      "<br>Percentage : " +
      totalPercentage +
      "<br>Grade : Fail <br>Remarks : Sorry! </h2>"
  );
}
