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



    const svgElement = document.querySelector(".forecast__temps")
    const svgPath = document.getElementById("path_1")

    const svgGroup3Dot = document.getElementById("group-3-dot")

    console.log(svgElement, svgPath)


    let number = 0;

    // generate random temperature number
    const randomTemperature = Math.floor(Math.random()*45)

    function ding2(){
        number = randomTemperature;

        let textDing = document.getElementById("group-2-temp")
        let root = document.getElementById("group_2")

        if(randomTemperature < 18){
            console.log("yes")
            root.style.setProperty("--translateY","-" + number + "px")

            textDing.textContent= number + "°";

        }else{
            console.log("no")
            let root = document.getElementById("group_2")
            root.style.setProperty("--translateY","-" + number + "px")

            textDing.textContent= number + "°";
        }
    }

    ding2()

    console.log(randomTemperature)

    function ding(){
        number = 20;
        let root = document.getElementById("group_1")
        root.style.setProperty("--translateY", number + "px")

        let textDing = document.getElementById("group-4-temp")

        textDing.textContent="20" + "°";
    }

    // change css variable: https://css-tricks.com/updating-a-css-variable-with-javascript/

    svgElement.addEventListener("click", function(){
        svgPath.setAttribute("points", "12,45.7 97.9,25.7 183.8,25.7 269.7,25.7 355.6,25.7 441.5,25.7")
        ding()
    })
