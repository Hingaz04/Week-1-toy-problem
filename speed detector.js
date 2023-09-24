function demeritPoints(speed){
 //Declaration of variables.
  const speedLimit = 70;
  const demeritPointsForEvery5kmAboveSpeedLimit = 5;
  const maxDemeritPoints = 12;

// Conditions the speed lit is subjected to.


  if (speed <= speedLimit) {
    console.log("Ok");

  } else {
    const demeritPoints = Math.floor((speed - speedLimit) / demeritPointsForEvery5kmAboveSpeedLimit);


    
    if (demeritPointsForEvery5kmAboveSpeedLimit > maxDemeritPoints) {
      console.log("License suspended");
    } 
    else {
      console.log("Points: " + demeritPoints);
    }
  }
}
