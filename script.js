const getButton = document.getElementById('getJokeBtn');
const jokeCont = document.getElementById('jokeCont');
const punchCont = document.getElementById('punchLine');
const url = "https://official-joke-api.appspot.com/jokes/programming/random";

async function getJoke() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data)
        jokeCont.textContent = data[0].setup;
        punchCont.textContent = data[0].punchline

    } catch (error) {
        console.log("ERROR", error);
    }
};
getButton.addEventListener('click', function () {
    getJoke();
})