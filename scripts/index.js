// const zeJokes = [
//     "I hate perforated lines, they're tearable.",
//     "Parallel lines have so much in common. It’s a shame they’ll never meet.",
//     "My first time using an elevator was an uplifting experience. The second time let me down.",
//     "They're making a movie about clocks. It's about time",
//     "I wouldn't buy anything with velcro. It's a total rip-off.",
//     "The other day, my wife asked me to pass her lipstick but I accidentally passed her a glue stick. She still isn't talking to me."
// ]

const jokeHolder = document.querySelector('[data-container');
const buttonForward = document.querySelector('[data-button-next]');
const buttonBackward = document.querySelector('[data-button-prev]');
const buttonRandom = document.querySelector('[data-button-rand]');

// When the user clicks the button, show a joke/fortune.
// When the user clicks the button again, show the next fortune.
// When the user clicks the button, and you are at the end of the array, start back from the beginning of the array.

let i = -1;
function nextJoke () {
    if (i === zeJokes.length - 1) {
        i = -1;
    }
    i += 1
    jokeHolder.textContent = zeJokes[i];

    console.log(i);

}
function prevJoke () {
    i -= 1
    if ( i < 0) {
        i = (zeJokes.length - 1);
    }
    jokeHolder.textContent = zeJokes[i];
    console.log(i);

}

function randJoke () {
    let rando = Math.floor(Math.random() * Math.floor(zeJokes.length));
    jokeHolder.textContent = zeJokes[rando];
    i = rando;
    console.log(i);
}

buttonForward.addEventListener('click', nextJoke);
buttonBackward.addEventListener('click', prevJoke);
buttonRandom.addEventListener('click', randJoke);

let zeJokes = [] ;
for (let i = 0; i < 10; i++) {
    fetch('https://my-little-cors-proxy.herokuapp.com/http://yerkee.com/api/fortune')
        .then(function(r) { return r.json() })
        .then(function(jokez) {
            // console.log(jokez);
            zeJokes.push(jokez.fortune)
        });
    }
    
    console.log(zeJokes)
