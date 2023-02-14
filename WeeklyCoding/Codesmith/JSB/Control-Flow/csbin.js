// -----CHALLENGE 1-----


  // STEP 1
  let favNumber = 25

  let comp1 = favNumber < 22
    let comp2 = favNumber > 4
      let comp3 = favNumber >= 21
        let comp4 = favNumber <= 8
        
        console.log(comp1)
          console.log(comp2)
            console.log(comp3)
              console.log(comp4)
  
  
    // STEP 2
    let name = 'Flint'
    
    let comp5
      let comp6
        let comp7
          let comp8
    
  
    
    // STEP 3
    comp5 = 5 == 5 // true
      comp6 = name === 'Maria' // false
        comp7 = 'cat' == 6 // false
          comp8 = '8' === 8 // false
    
    // STEP 4
  console.log(comp5)
    console.log(comp6)
      console.log(comp7)
        console.log(comp8)

// -----CHALLENGE 2-----

// VARIABLE GLOSSARY
const superManIsTheBestSuperHero = true; // 🦸
const batManIsTheBestSuperHero = false; // literally, no super powers 🙄
const gameOfThronesSeason8WasTerrible = true; // like really true
const androidIsSuperiorToApple = false; // come at me 🤷
const greatTVShow = 'The Office';
const notSoGreatTVShow = 'How I Met Your Mother'; 
const bestPetToOwn = 'dog';
const notBestPetToOwn = 'cat'; // I love all pets. Just cats a bit less than dogs ... sorry 😬😅
const bestTypeOfFood = 'Hispanic'; // 🌮🌮🌮
const bestMusic = undefined; // always different for me 💁

 // STEP 1
 let value1 = superManIsTheBestSuperHero && gameOfThronesSeason8WasTerrible
 let value2 = greatTVShow && notSoGreatTVShow
 
   // STEP 2
 let value3 = androidIsSuperiorToApple || batManIsTheBestSuperHero
 let value4 = notBestPetToOwn || bestPetToOwn
 
 
   // STEP 3
 let value5 = !batManIsTheBestSuperHero
 let value6 = !gameOfThronesSeason8WasTerrible
 
 console.log(value1)
 console.log(value2)
 console.log(value3)
 console.log(value4)
 console.log(value5)
 console.log(value6)
// STEP 4 (Bonus Step)


let guest = {

}
guest.name = 'Flint'
	guest.age = 25
		guest['has identification'] = true
			guest['face matches identification'] = true
				guest['identification is real'] = true
					guest['face matches identification'] = true

console.log(guest)

const nameToBeAddedToTheGuestList = guest.age >= 25 && guest['has identification'] && guest['face matches identification'] && guest['identification is real'] && guest['face matches identification'] && guest.name || "You were not added"

console.log(nameToBeAddedToTheGuestList)

// -----CHALLENGE 3-----

let num = 0;

if (num < 0) {
  console.log('negative')
} else if (num > 0) {
  console.log('postive')
} else {
  console.log('zero')
}

// -----CHALLENGE 4-----

 // STEP 1
 let temperature = 54
 let kindOfDay
  
 
 
   // STEP 2
  if (temperature > 98) {
    kindOfDay = 'super hot'
    console.log(`I'm staying inside next to the AC`)
  } else if (temperature < 99 && temperature > 84) {
    kindOfDay = `a little warm`
    console.log(`I'll head out for a bit, but I'm wearing shorts`)
  } else if (temperature > 69 && temperature < 85) {
    kindOfDay = `perfect`
    console.log(`It's perfect outside. I think I'll go to the park`)
  } else if (temperature > 54 && temperature < 70) {
    kindOfDay = `chilly`
    console.log(`I'd better bring a jacket`)
  } else if (temperature < 55) {
    kindOfDay = `freezing`
    console.log(`Heck no! I'm staying inside where it's warm`)
  } 
    if  (kindOfDay != undefined) {
    console.log(`Looks like it's going to be ${kindOfDay}`)
  }


