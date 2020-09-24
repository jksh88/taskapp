const add = (a, b) => {
  return new Promise((resolve, reject) => {
    if (a < 0 || b < 0) {
      reject("numbers cannot be negative");
    }
    resolve(a + b);
  });
};

// doWork(1, 5)
//   .then((result) => console.log("result: ", result))

//   .catch((e) => console.log("Error ;", e));

const testAsync = async () => {
  const sumF = await add(1, 3);
  const sumS = await add(sumF, -11);
  const sumT = await add(sumS, 100);
  try {
    return sumT;
  } catch {
    return error;
  }
};

testAsync()
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
