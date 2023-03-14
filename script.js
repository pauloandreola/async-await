// function firstFunction() {

//   return new Promise((resolve) => {

//     setTimeout(() => {
//       console.log("**Middle**");
//       resolve()
//     }, 2000);
//   })
// }

// async function secondFunction() {
//   console.log("started")

//   await firstFunction();

//   console.log("Finished");

// }

// secondFunction();

//

function getUer(id) {

  return fetch(`https://reqres.in/api/users?id=${id}`)
    .then(data => data.json())
    .catch(err => console.log(err));
}

async function showUserName(id) {

  try {
    const user = await getUer(id);
    
    console.log(`User name is: ${user.data.first_name}` );

  } catch (error) {
    console.log(`Erro => ${error}`)
  }


}

showUserName(1);
showUserName(2);
showUserName(3);
showUserName(4);