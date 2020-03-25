const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
console.log('Hello');

// Interpolated
console.log('Hello, my name is %s Zam', 'Ann');

// Styled
console.log('%cHello', 'font-size:20px; background:green');
////// %c at the begining of first string

// warning!
console.warn('OH NOOOOO!');

// Error :|
console.error('Shit!');

// Info
console.info('info part');

// Testing
console.assert(1 === 2, 'That is wrong');
///if first part is true nothing happens, if not print in console that second part

// clearing
console.clear();


// Viewing DOM Elements

console.dir();
///all the different properties

// Grouping together
dogs.forEach(dog => {
  console.group(`${dog.name}`);
  // group could be changed to groupCollapsed
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`);
})


// counting

console.count('Wes');
console.count('Wes');
console.count('Wes');
console.count('Wes');
console.count('Ann');
console.count('Ann');
console.count('Wes');
console.count('Wes');


// timing

console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('fetching data');
    console.log(data);
  });

console.table(dogs);
