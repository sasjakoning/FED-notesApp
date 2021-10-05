// JavaScript Document

function Page() {
  if (document.querySelector("body").classList.contains("forecast__page")) {
    // Forecast page dynamic temperatures

    const tempGroup1 = document.querySelectorAll("#temps-group1 > g");

    let pathNumber1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    tempGroup1.forEach((group, index) => {

      const randomTemperature = Math.floor(Math.random() * 22);
      number = randomTemperature * 2;
      groupNumber = index + 1;

      let tempText = document.querySelector("#temps-group1 > g > " + "#group-" + groupNumber + "-temp");

      console.log(tempText, index);

      if (randomTemperature < 11) {
        group.style.setProperty("--translateY", "-" + number + "px");

        tempText.textContent = randomTemperature + "°";

        pathNumber1[index] = 22 + (11 - randomTemperature) * 2;
      } else {
        group.style.setProperty("--translateY", "-" + number + "px");

        tempText.textContent = randomTemperature + "°";

        pathNumber1[index] = 22 + (11 - randomTemperature) * 2;
      }
    });

    
    function pathPoints1(pointsList) {
      let polyline = document.getElementById("path_1");

      polyline.setAttribute("points", pointsList);
    }

    pathPoints1(
      "12," +
        pathNumber1[0] +
        " 97.9," +
        pathNumber1[1] +
        " 183.8," +
        pathNumber1[2] +
        " 269.7," +
        pathNumber1[3] +
        " 355.6," +
        pathNumber1[4] +
        " 441.5," +
        pathNumber1[5]
    );

    const tempGroup2 = document.querySelectorAll("#temps-group2 > g");

    let pathNumber2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    tempGroup2.forEach((group, index) => {

      const randomTemperature = Math.floor(Math.random() * (44 - 23)) + 23;
      number = randomTemperature * 2;
      groupNumber = index + 1;

      let tempText = document.querySelector(
        "#temps-group2 > g > " + "#group-" + groupNumber + "-temp"
      );

      if (randomTemperature < 33) {
        group.style.setProperty("--translateY", "-" + number + "px");

        tempText.textContent = randomTemperature + "°";

        pathNumber2[index] = 22 + (2 - randomTemperature) * 2;
      } else {
        group.style.setProperty("--translateY", "-" + number + "px");

        tempText.textContent = randomTemperature + "°";

        pathNumber2[index] = 22 + (2 - randomTemperature) * 2;
      }

    });

    function pathPoints2(pointsList) {
      let polyline = document.getElementById("path_2");

      polyline.setAttribute("points", pointsList);
    }

    // assign values to each path point matching the temperature

    pathPoints2(
      "12," +
        pathNumber2[0] +
        " 97.9," +
        pathNumber2[1] +
        " 183.8," +
        pathNumber2[2] +
        " 269.7," +
        pathNumber2[3] +
        " 355.6," +
        pathNumber2[4] +
        " 441.5," +
        pathNumber2[5]
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
