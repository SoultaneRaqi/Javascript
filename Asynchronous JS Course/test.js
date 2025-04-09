
// Callback setTimeout() 


function task1(callback) {
  setTimeout(() => {
    console.log('task1');
    callback();
  }, 1000);
}

function task2(callback) {
  setTimeout(() => {
    console.log('task2');
    callback();
  }, 1000);
}

function task3(callback) {
  setTimeout(() => {
    console.log('task3');
    callback();
  }, 1000);
}

function task4(callback) {
  setTimeout(() => {
    console.log('task4');
    callback();
  }, 1000);
}


task1(() => {
  task2(() => {
    task3(() => {
      task4(() => {
        console.log("done");
      });
    });
  });
});

// callback hell

const showMessage = (message) => {
  console.log(message);
}

const firstMessage = (callback) => {
  setTimeout(() => {
    showMessage('Hello');
    callback();
  } , 1000);
}

const secondMessage = (callback) => {
  setTimeout(() => {
    showMessage('World');
    callback();
  } , 1000);
}

firstMessage(() => {
  secondMessage(() => {
    console.log('Done!');
  });
});


// Promises

const promise = new Promise((resolve  , reject ) => {
  const allDone = true;
  if(allDone){
    resolve("All done");
  } else {
    reject("Error");}
})

console.log(promise);


const promiseM = new Promise((resolve , reject) =>{

  const randomNum = Math.floor(Math.random() * 10);

  setTimeout(() => {
    if(randomNum < 4){
      resolve("Well done",randomNum);
    } else {
      reject("Opps Wrong !",randomNum);
    }
  }, 1000);
})
promiseM.then((res) => {
  console.log(res);
}).catch((er) => {
  console.log(er);
})




const promise1 = new Promise((resolve , reject) =>  {
  resolve("Promise 1 resolved");
})

const promise2 = new Promise((resolve , reject) =>  {
  resolve("Promise 2 resolved");
})

const promise3 = new Promise((resolve , reject) =>  {
  reject("Promise 3 rejected");
})



// Best way to chain promises

promise1
.then((res) => {
  console.log(res);
  return promise2;
})
.then((res) => {
  console.log(res);
  return promise3;
})
.catch((er) => {
  console.log(er);
})
.finally(() => {
  console.log("Finally");
})




// promises all

const promiseOne = new Promise((resolve , reject) =>  {
    setTimeout(() => {
        resolve("Promise 1 resolved");
    }, 1000);
})


const promiseTwo = new Promise((resolve , reject) =>  {
    setTimeout(() => {
        resolve("Promise 2 resolved");
    }, 1500);
})

Promise.all([promiseOne , promiseTwo]).then((res) => {
    console.log(res[0] , res[1]);
}).catch((er) => {
    console.log(er);
})




// promise / async await

const preHeatOven = () => {
  return new Promise((resolve , reject) => {
    setTimeout(() => {
      const preHeatOven = true;
      if(preHeatOven){
        resolve("Preheat oven to 180 degrees");
      } else {
        reject("Preheat oven failed");
      }
    }, 1000);
  });
}

const addSugarAndchocolate = () => {
  return new Promise((resolve , reject) => {
    setTimeout(() => {
      const addSugarAndchocolate = true;
      if(addSugarAndchocolate){
        resolve("Place sugar and chocolate and melted butter and mix");
      } else {
        reject("failed");
      }
    }, 1000);
  });
}

const addFlourandSalt = () => {
  return new Promise((resolve , reject) => {
    setTimeout(() => {
      const addSaltFlour = true;
      if(addSaltFlour){
        resolve("Add salt and flour and baking powder and mix");
      } else {
        reject(" failed");
      }
    }, 1000);
  });
}

const bake = () => {
  return new Promise((resolve , reject) => {
    setTimeout(() => {
      const bake = true;
      if(bake){
        resolve("Bake at 180 degrees for 30 minutes");
      } else {
        reject("Bake failed");
      }
    }, 1000);
  });
}


const bakeCake = async () => {
  try {
    const task1 = await preHeatOven();
  console.log(task1);
  const task2 = await addSugarAndchocolate();
  console.log(task2);
  const task3 = await addFlourandSalt();
  console.log(task3);
  const task4 = await bake();
  console.log(task4);
  console.log("Enjoy your cake");
  }
  catch (error) {
    console.log(error);
  }
  
}

bakeCake();





// fetch api

// methodes
// GET : get data
// POST : add data
// PUT : update data
// DELETE : delete data


// fetch('https://dummyjson.com/products/add' , {
//   method: "POST",  
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
//     title: "testSR",
//     description: "Changed testSR",
//     price: 123,
//     rating: 5,
//   }),
// })
// .then((response) => response.json())
// .then((data) => console.log(data))
// .catch((error) => console.log(error))


// fetch without async await

// const getallProducts = async () => {
//   try {
//     const response = await fetch('https://dummyjson.com/products');
//   const data = await response.json();
//   console.log(data);
//   }catch (error) {
//     console.log(error);
//   }
// }

// getallProducts();