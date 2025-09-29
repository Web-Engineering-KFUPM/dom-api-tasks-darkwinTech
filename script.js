/*
=======================================
📘 JavaScript & Web APIs Lab
All tasks in one file (script.js)
=======================================
*/

/*  
=======================================
TODO1: Welcome Board
---------------------------------------
When the page loads, display a welcome message 
inside the <p> element with id="t1-msg".

✅ Task:
- Select the element with id "t1-msg".
- Change its text to "Hello, World!".

💡 Hint:
document.getElementById("t1-msg").innerHTML = "Hello, World!";
*/
document.getElementById("t1-msg").innerHTML = "Hello, World!";
/*
=======================================
TODO2: Interaction Corner
---------------------------------------
There is a button with id="t2-btn".
When the button is clicked, change the text inside 
the <p> with id="t2-status" to:
    "You clicked the button!"

✅ Task:
- Get the button element.
- Add a click event listener.
- Inside the event, change the text of the status paragraph.

💡 Hint:
button.addEventListener("click", function () {
    // change text here
});
*/
const btn2=document.getElementById("t2-btn");
const status2=document.getElementById("t2-status");
btn2.addEventListener("click",()=>{status2.textContent="You clicked the Reavel Note button"});
/*  
=======================================
TODO3: Inspiring Quote Board
---------------------------------------
Use the Quotable API to display a random quote.

🌍 API Link:
https://dummyjson.com/quotes/random

✅ Task:
- When the button with id="t3-loadQuote" is clicked:
    - Fetch a random quote from the API.
    - Display the quote text inside the <p> with id="t3-quote".
    - Display the author inside the <p> with id="t3-author".

💡 Hint:
The API returns JSON like:
{
  "content": "Do not watch the clock. Do what it does. Keep going.",
  "author": "Sam Levenson"
}

Use:
data.content   // the quote text
data.author    // the author
*/

const btn3 = document.getElementById("t3-loadQuote");
const quote = document.getElementById("t3-quote");
const author = document.getElementById("t3-author");

btn3.addEventListener("click", async () => {
    quote.textContent = "Loading...";
    author.textContent = "";
    try {
        const response = await fetch("https://dummyjson.com/quotes/random");
        if (!response.ok) throw new Error("HTTP " + response.status);
        const data = await response.json();

        console.log(data);
        quote.textContent = `"${data.quote}"`;
        author.textContent = `- ${data.author}`;

    } catch (e) {
        quote.textContent = "Couldn't fetch quotes.";
        console.log(e);
    }
});

/*  
=======================================
TODO4: Dammam Weather Now
---------------------------------------
Use the OpenWeatherMap API to display live weather data.

🌍 API Link:
https://api.openweathermap.org/data/2.5/weather?q=Dammam&appid=API_KEY=metric

⚠️ Replace YOUR_API_KEY with your actual API key from:
https://openweathermap.org/api

✅ Task:
- When the button with id="t4-loadWx" is clicked:
    - Fetch current weather data for Dammam.
    - Show temperature in the element with id="t4-temp".
    - Show humidity in the element with id="t4-hum".
    - Show wind speed in the element with id="t4-wind".

💡 Hint:
data.main.temp      → temperature (°C)
data.main.humidity  → humidity (%)
data.wind.speed     → wind speed (m/s)
*/
const btn4 = document.getElementById("t4-loadWx");
const tempEl = document.getElementById("t4-temp");
const humEl = document.getElementById("t4-hum");
const windEl = document.getElementById("t4-wind");
const errEl = document.getElementById("t4-err");
const API_KEY = "9c29da573838fd8cdd561179419142d7";

btn4.addEventListener("click", async () => {
    errEl.textContent = "";
    tempEl.textContent = "…";
    humEl.textContent = "…";
    windEl.textContent = "…";

    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=Dammam&units=metric&appid=${API_KEY}`;
        const res = await fetch(url);

        if (!res.ok) throw new Error("Weather data not found");
        const data = await res.json();

        tempEl.textContent = `${data.main.temp} °C`;
        humEl.textContent = `${data.main.humidity} %`;
        windEl.textContent = `${data.wind.speed} m/s`;
    } catch (err) {
        errEl.textContent = "Error fetching weather data.";
        console.error(err);
    }
});
