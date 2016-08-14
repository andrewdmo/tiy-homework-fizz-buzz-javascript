/**
 * Created by andrewdmo on 8/12/16.
 */

var FizzBuzz = new FizzBuzz()

console.log("FizzBuzz...brought to you by legal stimulants and sheer willpower!\n")

function FizzBuzz() {
    this.doIt = function (start, end) {
        for (; (start >= 0 && start <= end); start++){
                if ((start % 15) == 0) {
                console.log("FizzBuzz!")
                 } else if ((start % 5) == 0) {
                console.log("Buzz")
                } else if ((start % 3) == 0) {
                console.log("Fizz")
                } else console.log(start)}


        console.log("\n\nFin!")}
     }

FizzBuzz.doIt(1, 100)