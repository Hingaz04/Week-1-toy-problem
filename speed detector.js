function demeritPoints(speed){
 
  const speedLimit = 70;
  const demeritPointsForEvery5kmAboveSpeedLimit = 1;
  const maxDemeritPoints = 12;

  if (speed <= speedLimit) {
    console.log("Ok");
  } else {
    const demeritPoints = Math.floor((speed - speedLimit) / demeritPointsForEvery5kmAboveSpeedLimit);
    
    if (demeritPointsForEvery5kmAboveSpeedLimit > maxDemeritPoints) {
      console.log("License suspended");
    } else {
      console.log("Points: " + demeritPoints);
    }
  }
}
