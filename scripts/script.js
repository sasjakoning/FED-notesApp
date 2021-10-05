// JavaScript Document

function Page() {
  if (document.querySelector("body").classList.contains("forecast__page")) {
    let pathNumber = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let plusOrMinus = ["", "", "", "", "", "", "", "", "", "", "", ""];

    let tempGroup = document.querySelectorAll("#temps-group1 > g");

    console.log(tempGroup);

    tempGroup.forEach((group, index) => {
      const randomTemperature = Math.floor(Math.random() * 22);
      number = randomTemperature * 2;
      groupNumber = index + 1;

      let tempText = document.querySelector("#group-" + groupNumber + "-temp");

      console.log(tempText, index);

      if (randomTemperature < 11) {
        group.style.setProperty("--translateY", "-" + number + "px");

        tempText.textContent = randomTemperature + "°";

        pathNumber[index] = 22 + (11 - randomTemperature) * 2;
      } else {
        group.style.setProperty("--translateY", "-" + number + "px");

        tempText.textContent = randomTemperature + "°";

        pathNumber[index] = 22 + (11 - randomTemperature) * 2;
      }
    });

    function pathPoints1(pointsList) {
      let polyline = document.getElementById("path_1");

      polyline.setAttribute("points", pointsList);
    }

    pathPoints1(
      "12," +
        pathNumber[0] +
        " 97.9," +
        pathNumber[1] +
        " 183.8," +
        pathNumber[2] +
        " 269.7," +
        pathNumber[3] +
        " 355.6," +
        pathNumber[4] +
        " 441.5," +
        pathNumber[5]
    );





  } else {

    // sunrise/down animation

    const container = document.querySelector(".sunAnim");
    let state = "fave";

    const animation = bodymovin.loadAnimation({
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
  }
}

Page();
