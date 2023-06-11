// Methods
// A Method is a Object Property who's value is a fucntion 

let restaurant = {
  name: `Jimmy's`,
  guestCap: 75,
  guestCount: 25,
  checkAvailability: function (partySize) {
    let seatsLeft = this.guestCap - this.guestCount
    return partySize <= seatsLeft
  }
}

let status = restaurant.checkAvailability(51)

console.log(status)

// Create New Methods

// 1.  seatParty
// 2. removeParty

//Examples

