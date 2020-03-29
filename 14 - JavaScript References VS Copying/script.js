    // start with strings, numbers and booleans

    // Let's say we have an array
    const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
    console.log(players);

    // and we want to make a copy of it.

    // You might think we can just do something like this:

    // however what happens when we update that array?

    // now here is the problem!

    // oh no - we have edited the original array too!

    // Why? It's because that is an array reference, not an array copy. They both point to the same array!

    // So, how do we fix this? We take a copy instead!

    const team = players.slice();
    team[1] = 'ANIANIANAI';
    console.log(players);
    console.log("after slice", team);

    // one way

    // or create a new array and concat the old one in

    const team3 = [].concat(players);
    team3[3] = 'BLA BLA ';
    console.log("after concat and bla bla", team3);
    console.log(players);

    // or use the new ES6 Spread

    const team4 = [...players];
    team4[3] = 'heeee hawww';
    console.log(team4);

    const team5 = Array.from(players);
    console.log(team5);

    // now when we update it, the original one isn't changed

    // The same thing goes for objects, let's say we have a person object

    // with Objects
    const person = {
      name: 'Wes Bos',
      age: 80
    };

    // and think we make a copy:

    // how do we take a copy instead?
    const cap2 = Object.assign({}, person, { number: 99, age: 12 });
    console.log("cap2", cap2);
    console.log("person", person);

    // We will hopefully soon see the object ...spread

    const cap3 = {...person};
    cap3.age = 345;
    console.log("cap3", cap3);
    console.log("person", person);

    // Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.


    const wes = {
      name: 'Wes',
      age: 100,
      social: {
        twitter: '@wesbos',
        facebook: 'wesbos.developer'
      }
    };

        console.log(wes);

    const dev = Object.assign({}, wes);
    dev.social.facebook = "devfb";
    console.log('dev', dev);
    console.log('wes', wes);

    const dev2 = JSON.parse(JSON.stringify(wes));
    dev2.social.facebook = "dev2fb";
    console.log('dev2', dev2);
    console.log('wes',wes);