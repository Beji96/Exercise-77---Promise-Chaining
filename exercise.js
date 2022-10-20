const isLogged = true;
function firstPromise(isLogged) {
  return new Promise((res, rej) => {
    if (isLogged) {
      res(Math.random());
    }
    rej("You are not logged in!");
  });
}

function secondPromise(number) {
  return new Promise((res, rej) => {
    if (number > 0.5) {
      res({ name: "John", age: 24 });
    }
    rej("Something went wrong.");
  });
}