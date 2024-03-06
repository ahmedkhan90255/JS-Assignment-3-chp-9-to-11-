document.write(
  "<h1>Write a program to take input color of road traffic signal from the user & show the message according to this table. </h1>"
);

var signalColor = prompt("Enter Traffic Signal Color 1.Red  2.Yellow  3.Green");

if (signalColor === "Red") {
  document.write("<h2> Must Stop! </h2>");
} else if (signalColor === "red") {
  document.write("<h2> Must Stop! </h2>");
} else if (signalColor === "Yellow") {
  document.write("<h2> Ready to move! </h2>");
} else if (signalColor === "yellow") {
  document.write("<h2> Ready to move! </h2>");
} else if (signalColor === "Green") {
  document.write("<h2> Move Now! </h2>");
} else if (signalColor === "green") {
  document.write("<h2> Move Now! </h2>");
} else if (signalColor === signalColor) {
  document.write("<h2>Invalid Signal Color</h2>");
}
