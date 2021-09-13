// JavaScript Document

const container = document.querySelector(".sunAnim")
let state = "fave"


var animation = bodymovin.loadAnimation({
    container: document.querySelector(".sunAnim"),
    renderer: "svg",
    loop: false,
    autoplay: false,
    easing: "ease-out",
    path: "scripts/sunrise-down.json"
})

animation.setSpeed(1.5);

const segments = [40, 10, 20, 61]
// const randomElement = Math.floor(Math.random() * segments.length);

var randomElement = segments[Math.floor(Math.random()*segments.length)];
setTimeout(function(){
    animation.playSegments([1, randomElement], true)
}, 2000)



console.log(randomElement)


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

    const rotation = document.querySelectorAll(".mainContent__hourly__windSpeed > img ")

    rotation.forEach(element => {
        element.style.setProperty("--randomRotation", Math.floor(Math.random() * 360) + "deg")
    });

    // random numbers: https://css-tricks.com/random-numbers-css/

