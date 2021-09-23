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
// const randomElement = Math.floor(Math.random() * segments.length);

var randomElement = segments[Math.floor(Math.random() * segments.length)];
setTimeout(function () {
  animation.playSegments([1, randomElement], true);
}, 2000);

// container.addEventListener("click", () => {

//     console.log(randomElement)

//     animation.playSegments([1, randomElement], true)

// })

// if(state === "fave") {
//     animation.playSegments([1, 40], true);
//     state = "unfave"
// }else {
//     animation.playSegments([40, 1], true);
//     state = "fave"
// }

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

const svgElement = document.querySelector(".forecast__temps");
const svgPath = document.getElementById("path_1");

const svgGroup3Dot = document.getElementById("group-3-dot");

console.log(svgElement, svgPath);

let number = 0;

// generate random temperature number
const randomTemperature = Math.floor(Math.random() * 44);
number = randomTemperature * 2;
// let pathNumber = randomTemperature + 2;

console.log("random temperature is", randomTemperature);

function randomlyGeneratedTemps() {
  let textDing = document.getElementById("group-1-temp");
  let root = document.getElementById("group_1");
  let pathNumber = 0;
  let plusOrMinus = "";

  // if temperatuur onder 22 graden zit
  if (randomTemperature < 22) {
    root.style.setProperty("--translateY", "-" + number + "px");

    textDing.textContent = randomTemperature + "°";

    pathNumber = randomTemperature - 22;
    pathNumber = pathNumber * 2;
    pathNumber = Math.abs(pathNumber - 0);

    // if temperatuur boven 22 graden zit
  } else {
    root.style.setProperty("--translateY", "-" + number + "px");

    textDing.textContent = randomTemperature + "°";
    pathNumber = randomTemperature - 22;
    pathNumber = pathNumber * 2;

    plusOrMinus = "-";
  }

  // functie om het path te selecteren en de attribute te veranderen
  function pathPoints(pointsList) {
    let polyline = document.getElementById("path_1");

    polyline.setAttribute("points", pointsList);
  }

  console.log("number is", number, "pathnumber is", pathNumber);

  // de nummers zijn de cods van de path points, bepaald door de hoogte van de temperatuur
  pathPoints(
    "12," +
      plusOrMinus +
      pathNumber +
      " 97.9,0 183.8,0  269.7,0  355.6,0  441.5,0"
  );
}

randomlyGeneratedTemps();

// math.abs https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
// change css variable: https://css-tricks.com/updating-a-css-variable-with-javascript/
