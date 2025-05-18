const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokesbtn'); // Make sure this matches the button ID

jokeBtn.addEventListener('click', generateJoke);

generateJoke(); // Call it initially

async function generateJoke() {
    console.log("Fetching joke..."); // Debugging

    const config = {
        headers: { Accept: 'application/json' },
    };

    try {
        const res = await fetch('https://icanhazdadjoke.com/', config);
        const data = await res.json();

        console.log("Joke fetched:", data.joke); // Debugging
        jokeEl.innerHTML = data.joke;
    } catch (error) {
        jokeEl.innerHTML = "Oops! Couldn't fetch a joke. Try again!";
        console.error("Error fetching joke:", error);
    }
}
