// Methods
// A Method is a Object Property who's value is a fucntion 

let restaurant = {
  name: `Jimmy's`,
  guestCount: 75,
  guestCount: 0,
  checkAvailability: function (partySize) {
    return true
  }
}

let status = restaurant.checkAvailability(true)

console.log(status)