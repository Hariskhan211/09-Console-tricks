const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

    function makeGreen() {
      const p = document.querySelector('p');
      p.style.color = '#BADA55';
      p.style.fontSize = '50px';
    }

    // Regular
  
console.log("helo");
    // Interpolated
    console.log("hello i am a %s string !",'$');
    // Styled
console.log("%c I am some great text","font-size:50px;color:red")
    // warning!
  console.warn("oh noooooo");
    // Error :|
  console.error("oh shit");
    // Info
console.info("tomorrow is a holiday");

    // Testing
    console.assert((1===2),'that is wrong');

    // clearing
    // console.clear      // will clear your console
    // Viewing DOM Elements
    const p = document.querySelector('p');
    console.log(p);
    console.dir(p);
    // Grouping together
  dogs.forEach(dog=>{
    console.groupCollapsed(`${dog.name}`);
    console.log(`this is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.log(`${dog.name} is ${dog.age * 7} dog years old`);
    console.groupEnd(`${dog.name}`);
  })
    // counting
console.count("haris");
console.count("khan");
console.count("haris");

    // timing
    console.time('fetching data');
    fetch('https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=f0321ed4a8303cf7e15ab1938155ab04&units=metric')
      // .then(data => data.json())
      .then(data => {
        console.timeEnd('fetching data');
        console.log(data);
      })


      // axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=f0321ed4a8303cf7e15ab1938155ab04&units=metric`)
      // .then(function (response) {
      //     // handle success
      //     console.log(response.data);
      //   })
      //   .catch(function (error) {
      //     // handle error
      //     console.log(error);
      //   })