// Methods
// A Method is a Object Property who's value is a fucntion 

let restaurant = {
  name: `Jimmy's`,
  guestCount: 75,
  guestCount: 0,
  checkAvailability: function (partySize) {
    console.log(partySize)
  }
}

restaurant.checkAvailability(65)
// 65