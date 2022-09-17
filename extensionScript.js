function getWeather(){
  //console.log("hello")
  let loc = document.querySelector(".location");
  let temp = document.querySelector(".temp");
  let icon = document.querySelector(".icon");
  let summary = document.querySelector(".summary");
  let air=document.querySelector(".msg");
  let time=document.querySelector(".time");
  let city=document.querySelector("#searchbar").value;
  fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`)
  .then((data) => data.json())
  .then((apiResponse) => {
	  console.log(apiResponse);
	  temp.innerHTML=Math.round(apiResponse.current.temp_c) + " °C";
	  loc.innerHTML=apiResponse.location.name+", "+apiResponse.location.region+", "+apiResponse.location.country;
	  time.innerHTML=apiResponse.location.localtime;
	  summary.innerHTML=apiResponse.current.condition.text;
	  let icon1 = "https:"+apiResponse.current.condition.icon;
      icon.innerHTML = `<img src="${icon1}" style= 'height:1.2rem'/>`;
	  //console.log(`Current temperature in ${apiResponse.location.name} is ${apiResponse.current.temp_c}°C`);
	  let msg1=apiResponse.current.air_quality["us-epa-index"];
	  //console.log(msg1);
	  let val;
	  let col;
	  if(msg1==1)
	  {
		  val="Good";
		  col="#0BDA51"; //Malachite
		  
	  }
	  else if(msg1==2){
		  val="Moderate";
		  col="#ffbf00";//amber
	  }
	  else if(msg1==3){
		  val="Unhealthy for sensitive Groups";
		  col="#FF5F1F";//Neon Orange
	  }
	  else if(msg1==4){
		  val="Unhealthy"; 
		  col="#FF0000";//red
	  }
	  else if(msg1==5){
		  val="Very Unhealthy";
		  col="#ff3131"; //neon red
	  }
	  else{
		  val="Hazardous";
		  col="#DC143C"; //crimson
		  
	  }
	  air.innerHTML=val;
	  air.style.color=col;
    });
  
}
document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('searchbar');
	document.getElementById("searchbar").onchange = function() {getWeather()};
});
