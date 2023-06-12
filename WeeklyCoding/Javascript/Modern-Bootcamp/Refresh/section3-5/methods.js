// Methods
// A Method is a Object Property who's value is a fucntion 

// Create New Methods

// 1.  seatParty
// 2. removeParty



let restaurant = {
  name: `Jimmy's`,
  guestCap: 75,
  guestCount: 0,
  checkAvailability: function (partySize) {
    let seatsLeft = this.guestCap - this.guestCount
    return partySize <= seatsLeft
  },
  seatParty: function (partySize) {
    return this.guestCount = this.guestCount + partySize
  },
  removeParty: function(partySize) {
    return this.guestCount = this.guestCount - partySize

  }
}


let firstParty = restaurant.seatParty(72)
// -> guestCount 72
console.log(restaurant)
restaurant.removeParty(2)
console.log(restaurant)
let status = restaurant.checkAvailability(6)
console.log(status)
let status2 = restaurant.checkAvailability(5)
console.log(status2)

// Results

/* {
  name: "Jimmy's",
  guestCap: 75,
  guestCount: 72,
  checkAvailability: [Function: checkAvailability],
  seatParty: [Function: seatParty],
  removeParty: [Function: removeParty]
}
{
  name: "Jimmy's",
  guestCap: 75,
  guestCount: 70,
  checkAvailability: [Function: checkAvailability],
  seatParty: [Function: seatParty],
  removeParty: [Function: removeParty]
}
false
true
 */

