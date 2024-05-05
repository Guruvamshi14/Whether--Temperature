const apiKey = 'a9dd512fd6fc2e9e92a88d3598ddbbae'; // Replace with your actual API key


// Function to fetch weather data
async function getWeather(city) {

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);

        const data = await response.json();

    console.log(data);
    if(data?.cod === '404')
      console.log("try");
    else
      console.log("Hai");
    let temp = data.main.temp;
    temp1(temp);
    } catch (error) {
        console.log("Hai");
    }
}

// // Example usage
getWeather('ghatkesar');

// // a9dd512fd6fc2e9e92a88d3598ddbbae
function temp1(temp){
    let newPara = document.createElement('p');
    newPara.innerHTML = temp;
    document.body.appendChild(newPara);
}

// // https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

// async function getWeather1(lat,lon) {

    

//     try {
//         const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`);

//         const data = await response.json();
    
//         console.log(data);
//         let temp = data.main.temp;
//         temp1(temp);   
//     } catch (error) {
//         console.log('The Error was',error);
//     }
    


// }



// const apiKey = 'a9dd512fd6fc2e9e92a88d3598ddbbae'; // Replace with your actual API key

// // Function to fetch weather data
// async function getWeather(city) {
//   try {
//     const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
//     const data = await response.json();
//     const temp = data.main.temp;
//     displayTemperature(temp); // Call a function to handle the temperature value
//   } catch (error) {
//     console.error('Error fetching weather data:', error);
//   }
// }

// // Example usage
// getWeather('hyderabad');

// function displayTemperature(temp) {
//   let newPara = document.createElement('p');
//   newPara.innerHTML = `The temperature is ${temp}°C`; // Assuming temperature is in Celsius
//   document.body.appendChild(newPara); // Appending the paragraph to the body of the document
// }

// var x = document.getElementById("demo");
// function getLocation() {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(showPosition,showError);
//   } else {
//     x.innerHTML = "Geolocation is not supported by this browser.";
//   }
// }

// getLocation();

// function showPosition(position){
//     const latitude = position.coords.latitude;
//     const longitude = position.coords.longitude;

//     console.log(latitude);
//     console.log(longitude);

//     getWeather1(latitude,longitude);
// }

// function showError(error){
//     console.log("The error was",error);
//     getWeather1(latitude,longitude);
// }