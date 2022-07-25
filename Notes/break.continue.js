//Break and Continue - use break to break out of the loop to use continue to skip

let fingers = Math.floor(Math.random() * 10)
let guess = 0
while(guess !== fingers) {
    guess = prompt("How many fingers am i holding?");
    if (isNaN(guess)) {
        break;
    }
    if ((guess < 0) || (guess > 10)) {
        continue;
    }
    if (guess === fingers) {
        alert('You got it!');
    }else {
        alert('Try against!');
    }
}