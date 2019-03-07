const funnyJokes = [
    "I hate perforated lines, they're tearable.",
    "Parallel lines have so much in common. It’s a shame they’ll never meet.",
    "My first time using an elevator was an uplifting experience. The second time let me down.",
    "They're making a movie about clocks. It's about time",
    "I wouldn't buy anything with velcro. It's a total rip-off.",
    "The other day, my wife asked me to pass her lipstick but I accidentally passed her a glue stick. She still isn't talking to me."
]

const jokeHolder = document.querySelector('[data-container');
const buttonPress = document.querySelector('[data-button]')

// When the user clicks the button, show a joke/fortune.
let i = 0;

function nextJoke () {
    jokeHolder.textContent = funnyJokes[i];
    i += 1;
    if (i === funnyJokes.length) {
        i = 0;
    }
}

buttonPress.addEventListener('click', nextJoke)


// When the user clicks the button again, show the next fortune.



// When the user clicks the button, and you are at the end of the array, start back from the beginning of the array.


