document.write(
  "<h1> Write a program that takes temperature as input and <br> shows a message based on following criteria <br>a. T > 40 then “It is too hot outside.” <br> b. T > 30 then “The Weather today is Normal.” <br> c. T > 20 then “Today’s Weather is cool.” <br> d. T > 10 then “OMG! Today’s weather is so Cool.”</h1>"
);

var temperatureInput = prompt("Enter a Temperature");

if (temperatureInput >= 40) {
  document.write("<h2> It's too hot outside. </h2>");
} else if (temperatureInput >= 30) {
  document.write("<h2> The weather today is normal. </h2>");
} else if (temperatureInput >= 20) {
  document.write("<h2> Today’s Weather is cool. </h2>");
} else if (temperatureInput >= 10) {
  document.write("<h2> OMG! Today’s Weather is cool. </h2>");
} else if (temperatureInput < 10) {
  document.write("<h2> Today’s Weather is too cold. </h2>");
}
