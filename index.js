// ['Sally', 'Bob', 'Freddy', 'Claudia']

const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0, 2);
  };

  const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(2, 4);
  };

  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]; 

  const createFareMultiplier = function(multiplierValue){ 
    return function (someValue){
        return someValue*multiplierValue;
   
 
   };
  };
  const fareDoubler = createFareMultiplier(2);
  const fareTripler = createFareMultiplier(3)

  const selectDifferentDrivers = function (drivers, returnFirstTwoDrivers){
   return returnFirstTwoDrivers(drivers)
  }


