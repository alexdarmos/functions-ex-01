//set global variable to prompt, returns number user chooses
//for ex.1 and ex.2
let radiusArg = parseInt(prompt("What is the radius of your circle?"));


//exercise pt.1
(() =>  {
  //function to calculate and log area of circle
  const getAreaOfCircle = (radius) => {
    let area = (Math.PI * Math.pow(radius, 2)).toFixed(2);
    return area;
  };
  //passes users number as arugement to function getAreaOfCircle
  console.log(`The area of the circle is ${getAreaOfCircle(radiusArg)}`);
})();



//exercise pt.2
(() =>  {
  //function calculates circumference
  const getCircumferenceOfCircle = (radius) =>  {
    let circumference = (2 * (Math.PI * radius)).toFixed(2);
    return circumference;
  }
  //passes argument into function and logs it
  console.log(`The circumference of the circle is ${getCircumferenceOfCircle(radiusArg)}`);
})();



//exercise pt.3
(() =>  {
  let sideArg = parseInt(prompt("What is the length of the side of your square?"));
  //takes user input for side parameter
  const getAreaOfSquare = (length) => {
    let area = Math.pow(length, 2).toFixed(2);
    return area;
  }
  //passes argument into function and logs it
  console.log(`The area of the square is ${getAreaOfSquare(sideArg)}`);
})();



//exercise pt.4
(() =>  {
  let baseArg = parseInt(prompt("What is the length of the base of your triangle?"));
  let heightArg = parseInt(prompt("What is the length of the height of your triangle?"));
  //takes user input for side parameter
  const getAreaOfTriangle = (base, height) => {
    let area = ((base * height)/2).toFixed(2);
    return area;
  }
  //passes argument into function and logs it
  console.log(`The area of the triangle is ${getAreaOfTriangle(baseArg, heightArg)}`);
})();
