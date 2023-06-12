// Methods
// A Method is a Object Property who's value is a fucntion 

let restaurant = {
  name: `Jimmy's`,
  guestCap: 75,
  guestCount: 25,
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

let status = restaurant.checkAvailability(51)

let firstParty = restaurant.seatParty(2)
// -> guestCount 27
console.log(restaurant)
restaurant.removeParty(3)

console.log(restaurant)

// Create New Methods

// 1.  seatParty
// 2. removeParty

//Examples


