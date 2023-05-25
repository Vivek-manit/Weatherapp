// alert("hi Iam her");
const cutyName = document.getElementById('cityname');
const submitBtn = document.getElementById('submitBtn');
const temp = document.getElementById('temp');
const temp_min = document.getElementById('temp_min');
const temp_max = document.getElementById('temp_max');
const description = document.getElementById('description');
const c_name = document.getElementById('name');
const country = document.getElementById('country');
const weather_icon = document.getElementById('weather-icon');
const weatherBox = document.getElementById('weatherBox');
const getInfo=async(event)=>{
    event.preventDefault();
    let cityname= cutyName.value;
    if(cityname===""){
        alert("Please Enter the name of city");
    }
    else{
        
        try{
            let url = "https://api.openweathermap.org/data/2.5/weather?q="+cityname+"&units=metric&appid=bebb79dfa69bc6b9a9d5ec4a7f801ab5";
            const response = await fetch(url);
            // console.log(response);
            const data =await response.json();
            weatherBox.classList.remove('data_hidden');
            console.log(data);
            arrData = [data];
            temp.innerText =arrData[0].main.temp;
            temp_min.innerText=arrData[0].main.temp_min;
            temp_max.innerText=arrData[0].main.temp_max;
            description.innerText=arrData[0].weather[0].description;
            c_name.innerText = arrData[0].name;
            country.innerText=arrData[0].sys.country;
            const icon = arrData[0].weather[0].icon;
            weather_icon.src =  " http://openweathermap.org/img/wn/"+icon+"@2x.png";

        }
        catch{
            alert("Please Enter the name of city Correctly");
        }
        }
        
}
submitBtn.addEventListener('click',getInfo)