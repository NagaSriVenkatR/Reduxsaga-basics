function* myGeneratorFunction() {
  console.log("Hello generator!");
  yield "Yield result one";

  console.log("Hello generator again!");
  yield "Yield result two";

  return "Generator is done";
}

const gen = myGeneratorFunction();

console.log("Calling next the first time");
const resultOne = gen.next();
console.log(resultOne);

console.log("Calling next the second time");
const resultTwo = gen.next();
console.log(resultTwo);

console.log("Calling next the third time");
const resultThree = gen.next();
console.log(resultThree);

console.log("Calling next the fourth time");
const resultFour = gen.next();
console.log(resultFour);
// Output:

// Calling next the first time
// Hello generator!
// { value: 'Yield result one', done: false }
// Calling next the second time
// Hello generator again!
// { value: 'Yield result two', done: false }
// Calling next the third time
// { value: 'Generator is done', done: true }
// Calling next the fourth time
// { value: undefined, done: true }
function getTwoPlusTwo() {
    return 2 + 2
}

function* mathSaga() {
    const sum = yield getTwoPlusTwo()
    console.log("two plus two equals: ", sum)

    const sum2 = yield call(getTwoPlusTwo)
    console.log("two plus two again equals: ", sum2)
}

// two plus two equals:  4
// two plus two again equals:  4
function getTwoPlusTwo() {
    return 2 + 2
}

function* myGeneratorFunction() {
    const sum = yield getTwoPlusTwo()
    console.log("two plus two equals: ", sum)
}

const a = myGeneratorFunction();

console.log("calling next the first time...")
console.log("next: ", a.next())
console.log("calling next the second time...")
console.log("next: ", a.next())

// calling next the first time...
// next:  { value: 4, done: false }
// calling next the second time...
// two plus two equals:  undefined
// next:  { value: undefined, done: true }
function getTwoPlusTwo() {
    return 2 + 2
}

function* myGeneratorFunction() {
    const sum = yield getTwoPlusTwo()
    console.log("two plus two equals: ", sum)
}

const gi = myGeneratorFunction();

console.log("calling next the first time...")
console.log("next: ", gi.next())
console.log("calling next the second time...")
console.log("next: ", gi.next(5))

// calling next the first time...
// next:  { value: 4, done: false }
// calling next the second time...
// two plus two equals:  5
// next:  { value: undefined, done: true }
function getTwoPlusTwo() {
    return 2 + 2;
}

function* myGeneratorFunction() {
    const sum = yield getTwoPlusTwo();
    console.log("two plus two equals: ", sum);
}

var g = myGeneratorFunction();

console.log("calling next the first time...");
const nextObject = g.next();
const nextValue = nextObject.value;
console.log("next: ", nextObject);
console.log("calling next the second time...");
console.log("next: ", g.next(nextValue));

// calling next the first time...
// next:  { value: 4, done: false }
// calling next the second time...
// two plus two equals:  4
// next:  { value: undefined, done: true }
function getUsersAsync() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([{ name: "Bob", age: 24 }, { name: "Alice", age: 50 }])
        }, 3000)
    })
}

export function* getUsersSaga() {
    try {
        const users = yield call(getUsersAsync);
        yield put({ type: 'GET_USERS_SUCCEEDED', payload: users })
    } catch (e) {
        yield put({ type: 'GET_USERS_FAILED', payload: e })
    }
}

export default function* rootSaga() {
    yield all([
        yield takeEvery('GET_USERS_REQUESTED', getUsersSaga)
    ])
}