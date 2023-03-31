const btnEl =document.getElementById("btn");
const jokeEl = document.getElementById("joke");
async function getJoke(){
    const joke = await fetch("https://icanhazdadjoke.com/",{
        headers:{
            'Accept':'application/json'
        }
    })
    const jokeData = await joke.json();
    jokeEl.innerHTML=`${jokeData.joke}`;
    console.log(jokeData.joke);
}

btnEl.addEventListener("click",getJoke);