document.write ("<h1>  Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car” </h1>")

var fuelOfCar = prompt ("Enter the remaining Fuel in car (in litres)")

if (fuelOfCar < "0.25") {
    document.write ("<h2> 'Please refill your fuel' </h2>")
} else if (fuelOfCar >= "0.25") {
    document.write ("<h2> 'Your fuel is good enough for you to reach to the home' </h2>")
}