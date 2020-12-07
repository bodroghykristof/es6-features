import Teacher, { promote } from './teacher';

function sayHelloWithVar() {
  for (var varIndex = 0; varIndex < 10; varIndex++) {
    // console.log(varIndex);
  }
  // console.log(varIndex);
}

// function sayHelloWithLet() {
//   for (let letIndex = 0; letIndex < 10; letIndex++) {
//     console.log(letIndex);
//   }
//   console.log(letIndex);
// }

sayHelloWithVar();

// RESULTS IN ERROR
// sayHelloWithLet();

const person = {
  name: 'Mosh',
  walk: function () {
    // console.log("I'm walking");
  },
  talk() {
    // console.log(this);
    // console.log("I'm talking");
  },
};

person.talk();
person.walk();

const targetMember = 'name';
person[targetMember.value] = 'Bill';

const talk = person.talk.bind(person);
// console.log(talk);
talk();

// -------------------- //

const square = (number) => number * number;
// console.log(square(5));

const jobs = [
  { id: 1, isActive: true },
  { id: 2, isActive: true },
  { id: 3, isActive: false },
];

// console.log(jobs.filter((job) => job.isActive));

const human = {
  talk() {
    setTimeout(function () {
      console.log('This');
      console.log(this);
    }, 1000);
  },
};

const humanNewVersion = {
  talk() {
    setTimeout(() => {
      console.log('This');
      console.log(this);
    }, 1000);
  },
};

// human.talk();
// humanNewVersion.talk();

// ----------------------------- //
const colors = ['red', 'blue', 'green'];
colors.filter((color) => color !== 'green').map((color) => color.toUpperCase());
// .forEach((color) => console.log(`Color ${color}`));

// colors.forEach((color) => console.log(`Color ${color}`));

// ----------------------------- //

const address = {
  street: 'Kelő',
  city: 'Pécel',
  number: 43,
};

// const street = address.street;
// const city = address.city;
// const number = address.number;

const { street: st, city, number } = address;

const first = [1, 2, 3];
const second = [4, 5, 6];

// const combined = first.concat(ssecond);
const combined = [...first, 3.14, ...second, 7];
const firstClone = [...first];
first[0] = 0;
// first.forEach((element) => console.log(element));
// firstClone.forEach((element) => console.log(element));

const fistObject = { first: 'Australia' };
const secondObject = { second: 'Oceania' };
// console.log({ ...fistObject, ...secondObject, direction: 'south' });

// const personFromClass = new Person('John');
// console.log(personFromClass.name);
const teacher = new Teacher('Herr Müller', 'PHD');
console.log(teacher.name);
teacher.walk();
teacher.teach();
