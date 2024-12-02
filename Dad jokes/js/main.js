let joke = document.getElementById("joke");
let jokeBtn = document.getElementById("jokeBtn");
let fetchJoke = async () => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  const res = await fetch("https://icanhazdadjoke.com", config);
  const data = await res.json();

  joke.innerText = data.joke;
};
fetchJoke();
jokeBtn.addEventListener("click", fetchJoke);
