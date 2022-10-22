
let countries = async () => {
  let api =
    "https://restcountries.com/v2/all";
  console.log(api);
  let res = fetch(api, {
    method: "GET",
  })
  let data = (await res).json();
 
  let details = await data;
  console.log(details);
  for(let i=0;i<details.length;i++){
  let flag=details[i].flag
  console.log(flag);
  let name=details[i].name
  let region = details[i].region;
  let population = details[i].population;
  let capital = details[i].capital;
  let lat=details[i].latlng[0];
  let lon=details[i].latlng[1];
 

  let content = `<div class="card m-2" style="width:20rem; height:30em; border:2px solid black">
 <img src="${flag}" class="card-img-top" style=" height:10em"; alt="">

 <div class="card-body" style="height:15em;">
   <h5 class="card-title">Name : ${name}</h5>
   <p class="card-text-region">Region :${region}</p>
   <p class="card-text">Capital :${capital}</p>
   <p class="card-text">Population :${population}</p>
   <div id=${details[i].name.some} ></div>
   </div>

   <div class="class-footer d-flex justify-content-center" id="search_weather">
   <button type="button" class="btn btn-primary" id="search" onclick="weather_data(${lat},${lon},${details[i].name.some})">Click for weather</button>
  </div>
   </div>`;


let countries_display=document.querySelector(".container-lg")
let display=document.createElement("div");
display.innerHTML=content;
countries_display.append(display)


}

};

 
let weather_data=async function (lat,lon,id){
let weather_info=document.getElementById(id);

let weather_api_key='da7c563e38dca417f0a5fc891eb52b49';
let api1=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weather_api_key}`
let res1=await fetch(
  api1,
  {
    method:"GET"
  }
)
let data1=await res1.json();
let temp=data1.main.temp;
let humidity=data1.main.humidity;

weather_info.innerHTML=`
<p class="card-text">Temperature :${temp}</p>
   <p class="card-text">Humidity :${humidity}</p>`
}

countries();

