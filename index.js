const apikey="6aff970586df2b30529d76b6dc84e492";

const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox=document.querySelector(".search input");
const searchbutton=document.querySelector(".search button");

const weathericon=document.querySelector(".weathericon");

async function checkweather(city){
    const response=await fetch( apiurl + city + `&appid=${apikey}`);

        if(response.status==404){
            document.querySelector(".error").style.display="block";
            document.querySelector(".weather").style.display="none";
        }
        else{


      var data=await response.json();
      document.querySelector(".city").innerHTML= data.name;
      document.querySelector(".temp").innerHTML= Math.round(data.main.temp)+ "°C";
      document.querySelector(".humidity").innerHTML= data.main.humidity +"%";
      document.querySelector(".wind").innerHTML= data.wind.speed+" km/hr";
      document.querySelector(".lat").innerHTML= "lat : "+data.coord.lat;
      document.querySelector(".lon").innerHTML= "lon : "+data.coord.lon;
      document.querySelector(".wdh").innerHTML= "weather discription : "+data.weather[0].main;
      document.querySelector(".feels").innerHTML= "Actual feels like : "+data.main.feels_like+"°C";
      document.querySelector(".wdi").innerHTML= "wind direction : "+data.wind.deg+"°";


console.log(data);


if(data.weather[0].main=="Clouds"){
    weathericon.src= "weatherimages/cloudy.webp";
}
else if(data.weather[0].main=="Clear"){
    weathericon.src= "weatherimages/clearrr.png";
}
else if(data.weather[0].main=="Rain"){
    weathericon.src= "weatherimages/4150897.png";
}
else if(data.weather[0].main=="Drizzle"){
    weathericon.src= "weatherimages/drizzle.jpg";
}
else if(data.weather[0].main=="Mist"){
    weathericon.src= "weatherimages/mist.webp";
}

document.querySelector(".weather").style.display="block";
document.querySelector(".error").style.display="none";
// document.querySelector(".moreinfo").style.display="block";
        }
}      
var more=document.getElementById("morebtn");
let a=1;
more.onclick=()=>{
    document.querySelector(".more").style.display="block";
    if(a){
        document.querySelector(".moreinfo").innerHTML="less";
        a=0;
    }
    else
    {
        document.querySelector(".more").style.display="none";
        document.querySelector(".moreinfo").innerHTML="more";
        a=1;
    }
}

var icon=document.getElementById("icon");
icon.onclick=()=>{
    document.body.classList.toggle("darktheme");
    if(document.body.classList.contains("darktheme"))
    icon.src="weatherimages/sun.png"
    else
    icon.src="weatherimages/moon.png"
}



searchbutton.addEventListener("click",()=>{

    checkweather(searchbox.value);
})








