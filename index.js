let rideLength;
let checkCity;

function scuberGreetingForFeet(rideLength){
  // Write your code here!
  if (rideLength <= 400) {
    return 'This one is on me!';
  } else if (rideLength > 2000 && rideLength <= 2500) {
    return 'I will gladly take your thirty bucks.';
  } else if (rideLength > 2500) {
    return 'No can do.';
    }
}

function ternaryCheckCity(checkCity){
  // Write your code here!
  //Not sure why this ternary doesn't work...
  // (checkCity === "NYC") ? 'Ok, sounds good.' : 'No go.';
  
  if (checkCity === 'NYC') {
    return 'Ok, sounds good.';
  }
  else {
    return 'No go.'
  }
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
        return 'Bye.';
  }
}