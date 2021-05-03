// Code your solution in this file!
const returnFirstTwoDrivers= function(drivers){
  return drivers.slice(0, 2);

}
const returnLastTwoDrivers= function(drivers){
  return drivers.slice(-2);
}

const selectingDrivers=  [ returnFirstTwoDrivers, returnLastTwoDrivers]


const createFareMultiplier= function(players){
    return function(value){
      return players*value
    }
}
//createFareMultiplier(4)(4)  this return 16
