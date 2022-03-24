const returnFirstTwoDrivers = function(drivers) {return drivers.slice(0,2)}

const returnLastTwoDrivers = function(drivers) {return drivers.slice(-2)}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int) {
    return function(fare) {return int * fare};
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(drivers, whichOne) {
    if (whichOne === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(drivers)
    }
    else if (whichOne === returnLastTwoDrivers) {
        return returnLastTwoDrivers(drivers)
    }
}