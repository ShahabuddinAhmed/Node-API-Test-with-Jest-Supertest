export const sum = (a, b) =>  {
    if (typeof (a) !== "number" || typeof(b) !== "number") {
      throw Error("parameter must be number")
    }
    return a + b;
}

// ekta test likhben
// api call localhost:1338/api/v1/home
// check korbe request er status ta 200 kina


