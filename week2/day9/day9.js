// function sayHello(name, callback) {
//   setTimeout(function() {
//     callback(`Hello, ${name}!`)
//   },2000)
// }

// sayHello("Priyanshu", function(message) {
//   console.log(message)
// })

// const promise = new Promise(function(resolve, reject) {
//   const success = true
//   if (success === true) {
//     resolve("Hello Priyanshu!")
//   } else {
//     reject("Something went wrong!")
//   }
// })

// promise
//  .then(function(message) {
//     console.log(message)
//  })
//  .catch(function(error) {
//     console.log(error)
//  })

// const promise = new Promise(function(resolve,reject) {
//   setTimeout(function() {
//     resolve("Priyanshu")
//   },1000)
// })

// promise
//   .then(function(name) {
//     return new Promise(function(resolve,reject) {
//       setTimeout(function() {
//         resolve("Hello, "+name+"!")
//       },1000)
//     })
//   })
//   .then(function(message) {
//     console.log(message)
//   })

// async function greet() {
//   const name = await new Promise(function(resolve,reject) {
//     setTimeout(function() {
//       resolve("Priyanshu")
//     },1000)
//   })
//   const message = await new Promise(function(resolve, reject) {
//     setTimeout(function() {
//       resolve("Hello, "+name+"!")
//     },1000)
//   })
//   console.log(message)
// }
// greet()

// async function greet() {
//   try {
//     const name = await new Promise(function(resolve, reject) {
//       const success = true
//       if (success === true) {
//         resolve("Priyanshu")
//       } else {
//         reject("Something went wrong!")
//       }
//     })
//     const message = await new Promise(function(resolve, reject) {
//       setTimeout(function() {
//         resolve("Hello, "+name+"!")
//       })
//     })
//     console.log(message)
//   } catch(error) {
//     console.log("Error: "+error)
//   }
// }
// greet()

// async function getUser() {
//   const finalResult = await new Promise(function(resolve, reject) {
//     fetch("https://jsonplaceholder.typicode.com/users/1")
//       .then(function(response) { 
//         return response.json().then(function(data) {
//           return { ok: response.ok, data: data}
//         }) 
//       })
//       .then(function(result) {
//         if(result.ok) {
//           resolve(result.data)
//         } else {
//           reject("Failed!")
//         }
//       })
//   })
//   console.log(finalResult.name)
// }
// getUser()

async function getUser() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
    const data = await response.json()
    console.log(data.name, data.email, data.phone)
  } catch(error) {
    console.log("Failed to fetch user: "+error)
  }
}
getUser()

