// const animal = "cat" // Global Scope

// let


// if( animal === "dog"){
// console.log("woof")
// animal = 'snake' //blocked scope
// console.log('woof', animal)
// } else {

// console.log("your animal is", animal)
// }


// let person = 'mammal'
// if (person === 'mammal'){
// } else if(person && false) {

// console.log('not sure ')
//     }
// console.log('yes thought so!')
// }

/*** Date */

 const date = new Date()
 console.log(date)

 const time = date.getTime()
 console.log(time)

 const hours = date.getHours
 console.log(hours)

 if (hours > 12){
    console.log('is past lunch time')
  } else if( hours <= 11.50) {
    console.log('is almost lunch time')
 }

 const today = date.getDate()
 console.log(today)


