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

      let tempText = document.querySelector(
        "#temps-group1 > g > " + "#group-" + groupNumber + "-temp"
      );

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

    // stukje code om de current day van de gebruiker op te halen en die + vorige en volgende dagen in de html neer te zetten
    function DayAsString(dayIndex) {
      const weekdays = new Array(7);
      weekdays[0] = "Sun";
      weekdays[1] = "Mon";
      weekdays[2] = "Tue";
      weekdays[3] = "Wed";
      weekdays[4] = "Thu";
      weekdays[5] = "Fri";
      weekdays[6] = "Sat";

      return weekdays[dayIndex];
    }

    const startDate = new Date();
    const aryDates = GetDates(startDate, 7);

    function GetDates(startDate, daysToAdd) {
      let aryDates = [];

      for (let i = 0; i <= daysToAdd; i++) {
        const currentDate = new Date();

        currentDate.setDate(startDate.getDate() + i);
        aryDates.push(DayAsString(currentDate.getDay()));
        // zet alle dagen logisch in een array op basis van current date
      }

      return aryDates;
    }
    // aangepaste bron van code hierboven over de dagen: http://jsfiddle.net/JamesHill/FMadf/

    const dayTitle = document.querySelectorAll("main table tr > th");
    // de th's waar de dagen in staan in html

    dayTitle.forEach((day, index) => {
      // kijkt naar de index van de dayTitle en hangt daar een dag aan
      switch (index) {
        case 0:
          day.textContent = aryDates[6];
          break;
        case 1:
          day.textContent = aryDates[0];
          break;
        case 2:
          day.textContent = aryDates[1];
          break;
        case 3:
          day.textContent = aryDates[2];
          break;
        case 4:
          day.textContent = aryDates[3];
          break;
        case 5:
          day.textContent = aryDates[4];
          break;
        case 6:
          day.textContent = aryDates[5];
          break;
      }
    });

    // random weather icons
    const weatherIcons = document.querySelectorAll("td > img");

    console.log(weatherIcons);

    const randomIcons = [
      "images/forecast-page/cloudy-forecast-page.svg",
      "images/forecast-page/cloudy-sun-forecast-page.svg",
      "images/forecast-page/rain-forecast-page.svg",
      "images/forecast-page/thunderstorm-forecast-page.svg",
    ];

    weatherIcons.forEach((icon) => {
      const randomNumber = Math.floor(Math.random() * randomIcons.length);

      icon.src = randomIcons[randomNumber];
    });
    // Bron random img src: https://www.peachpit.com/articles/article.aspx?p=2239154&seqNum=10

    // random wind direction
    const rotation = document.querySelectorAll("tr > td > div > img");

    console.log(rotation);

    rotation.forEach((element) => {
      element.style.setProperty(
        "--randomRotation",
        Math.floor(Math.random() * 360) + "deg"
      );
    });
  } else {
    // sunrise/down animation

    // haalt de tijd van de gebruiker op in uren
    const userTimeHours = new Date().getHours();
    const userTimeMinutes = new Date().getMinutes();

    console.log(userTimeHours, userTimeMinutes);

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

    // maakt van de tijd in uren een hoeveelheid frames dat de animatie zal afspelen.
    const randomElement = userTimeHours * 2.5;
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

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


    // hide nav on scroll
    let lastScrollTop;
    navbar = document.querySelector("nav");
    window.addEventListener("scroll", function () {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        navbar.classList.add("navAnim")
      } else {
        navbar.classList.remove("navAnim")
      }
      lastScrollTop = scrollTop;
    });
  }
  // https://dev.to/areeburrub/hide-navbar-as-scroll-down-in-less-than-10-lines-of-javascript-1i00
}

Page();
