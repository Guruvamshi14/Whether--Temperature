const userTab = document.querySelector("[data-userWeather]");
const searchTab = document.querySelector("[data-searchWeather]");
const userContainer = document.querySelector(".weather-container");

const grantAccessContainer = document.querySelector(".grant-location-container");
const searchForm = document.querySelector("[data-searchForm]");
const loadingScreen = document.querySelector(".loading-container");
const userInfoContainer = document.querySelector(".user-info-container");

const errr = document.querySelector("[err]");

// console.log("hai");


let currentTab = userTab;
const apiKey = 'a9dd512fd6fc2e9e92a88d3598ddbbae';
currentTab.classList.add("current-tab");

grantAccessContainer.classList.add("active");

// searchForm.classList.remove("active");


function switchTab(ClickedTab){
    if(currentTab != ClickedTab){
        currentTab.classList.remove("current-tab");
        currentTab = ClickedTab;
        ClickedTab.classList.add("current-tab");
        // userInfoContainer.classList.remove("active");
        errr.classList.remove("active");
    
        if(!searchForm.classList.contains("active")){
            grantAccessContainer.classList.remove("active");
            loadingScreen.classList.remove("active");
            userInfoContainer.classList.remove("active");
            searchForm.classList.add("active");
            
        }else{
            searchForm.classList.remove("active");
            grantAccessContainer.classList.add("active");
            userInfoContainer.classList.remove("active");

        }
    }
    
}

const grantAccessButton = document.querySelector("[data-grantAccess]");
grantAccessButton.addEventListener("click", () =>{
    getYourLocation();
})

function getYourLocation(){



    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition,showError);
      } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
      }

}

function showPosition(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    console.log(latitude);
    console.log(longitude);
    grantAccessContainer.classList.remove("active");
    loadingScreen.classList.add("active");
    getWeather1(latitude,longitude);
}

function showError(error){
    console.log("The error was",error);
    grantAccessContainer.classList.add("active");
    // getWeather1(latitude,longitude);
}

async function getWeather1(lat,lon) {

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`);

        const data = await response.json();

        loadingScreen.classList.remove("active");
        userInfoContainer.classList.add("active");
        rederWetherInfo(data);
    
        console.log(data);
        let temp = data.main.temp;


        
    } catch (error) {
        console.log('The Error was',error);
    }

}

userTab.addEventListener("click",() => {
    switchTab(userTab);
});

searchTab.addEventListener("click",() => {
    switchTab(searchTab);
});

function rederWetherInfo(data){

    userInfoContainer.classList.add("active");


    const cityName = document.querySelector("[data-cityName]");
    const countryIcon = document.querySelector("[data-countryIcon]");
    const desc = document.querySelector("[data-weatherDesc]");
    const weatherIcon = document.querySelector("[data-weatherIcon]");
    const temp = document.querySelector("[data-temp]");
    const windspeed = document.querySelector("[data-windspeed]");
    const humidity = document.querySelector("[data-humidity]");
    const cloudiness = document.querySelector("[data-cloudiness]");


    // console.log(data);

    if(!data?.name){
        userInfoContainer.classList.remove("active");
        errr.classList.add("active");
        
    }



    cityName.innerText = data?.name;
    countryIcon.src = `https://flagcdn.com/144x108/${data?.sys?.country.toLowerCase()}.png`;
    desc.innerText = data?.weather?.[0]?.description;
    weatherIcon.src = `http://openweathermap.org/img/w/${data?.weather?.[0]?.icon}.png`;
    temp.innerText = `${data?.main?.temp}°C`;
    windspeed.innerText = data?.wind?.speed;
    humidity.innerText = data?.main?.humidity;
    cloudiness.innerText = data?.clouds?.all;


}



const searchInput = document.querySelector("[data-searchInput]");
const searchInput1 = document.querySelector("[data-searchInput1]");

searchInput1.addEventListener("click", (e) => {
    e.preventDefault();
    let cityName = searchInput.value;

    console.log(cityName);

    if(cityName === "")
        return;
    else 
        fetchSearchWeatherInfo(cityName);
})

// let errr = document.querySelector("[err]");

async function fetchSearchWeatherInfo(city){

    searchForm.classList.remove("active");
    loadingScreen.classList.add("active");

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
        console.log(response);
        const data = await response.json();
        console.log(data);
        loadingScreen.classList.remove("active");
        searchForm.classList.add("active");
        userInfoContainer.classList.remove("active");


        // if(data?.cod === '404')
            rederWetherInfo(data);
        // else
            // errr.classList.add("active");
        
            
        } catch (error) {
            console.log(hai);
            userInfoContainer.classList.remove("active");
            errr.classList.add("active");
        }
}