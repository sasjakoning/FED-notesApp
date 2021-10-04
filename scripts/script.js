// JavaScript Document

const container = document.querySelector(".sunAnim");
let state = "fave";

var animation = bodymovin.loadAnimation({
  container: document.querySelector(".sunAnim"),
  renderer: "svg",
  loop: false,
  autoplay: false,
  easing: "ease-out",
  path: "scripts/sunrise-down.json",
});

animation.setSpeed(1.5);

const segments = [40, 10, 20, 61];

var randomElement = segments[Math.floor(Math.random() * segments.length)];
setTimeout(function () {
  animation.playSegments([1, randomElement], true);
}, 2000);


// random wind speed direction

const rotation = document.querySelectorAll(
  ".mainContent__hourly__windSpeed > img "
);

rotation.forEach((element) => {
  element.style.setProperty(
    "--randomRotation",
    Math.floor(Math.random() * 360) + "deg"
  );
});

// random numbers: https://css-tricks.com/random-numbers-css/


let pathNumber = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let plusOrMinus = ["", "", "", "", "", "", "", "", "", "", "", ""];

let tempGroup = document.querySelectorAll("#temps-group > g")

console.log(tempGroup)

tempGroup.forEach((group, index) => {

  // console.log(group.firstChild.nextSibling, index)

  const randomTemperature = Math.floor(Math.random() * 44);
  number = randomTemperature * 2;

  let tempText = document.querySelector("text")

  if(randomTemperature < 22) {
    group.style.setProperty("--translateY", "-" + number + "px")

    tempText.textContent = randomTemperature + "°";

    pathNumber[index] = randomTemperature - 22;
    pathNumber[index] = pathNumber[index] * 2;
    pathNumber[index] = Math.abs(pathNumber[index] - 0);

  }else {
    group.style.setProperty("--translateY", "-" + number + "px")
    
    tempText.textContent = randomTemperature + "°";

    pathNumber[index] = randomTemperature - 22;
    pathNumber[index] = pathNumber[index] * 2;

    plusOrMinus[index] = "-";
  }

  console.log(randomTemperature, pathNumber[index])

  // console.log(tempText.textContent, index)

  // function pathPoints(pointsList) {
  //   let polyline = document.getElementById("path_1");
  
  //   polyline.setAttribute("points", pointsList);
  // }
  
  // pathPoints(
  //   "12," +
  //     plusOrMinus +
  //     pathNumber +
  //     " 97.9,0 183.8,0  269.7,0  355.6,0  441.5,0"
  // );

  // switch(index) {
  //   case 0 :
  //     console.log("hello")
  //     break;
  //   case 1 :
  //     console.log("hello")
  //     break;
  //   case 2 :
  //     console.log("hello")
  //     break;
  //   default:
  //     console.log("doesnt work")
  // }

})


function pathPoints(pointsList) {
  let polyline = document.getElementById("path_1");

  polyline.setAttribute("points", pointsList);
}

pathPoints(
  "12," +
    plusOrMinus[0] +
    pathNumber[0] +
    " 97.9," + plusOrMinus[1] +
    pathNumber[1] +
    " 183.8," + plusOrMinus[2] +
    pathNumber[2] +
    " 269.7," + plusOrMinus[3] +
    pathNumber[3] +
    " 355.6," + plusOrMinus[4] +
    pathNumber[4] +
    " 441.5," + plusOrMinus[5] +
    pathNumber[5]
);

console.log(plusOrMinus, pathNumber)