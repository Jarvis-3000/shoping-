

function getLocation() {
  if (navigator.geolocation) {
      
    navigator.geolocation.getCurrentPosition(function(position){

var Latitude=JSON.stringify(position.coords.latitude) ;
var Longitude=JSON.stringify(position.coords.longitude);

if(c==2)
{

    //openweathermap api se liya gaya hai
fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${JSON.parse(Latitude)}&lon=${JSON.parse(Longitude)}&appid=<your api key>`)
.then(response=>response.json())
.then(data=>{

let print=`
<h1>${data.weather[0].main}</h1>
`;
   document.getElementsByClassName("reference")[0].style.display="none";
   document.getElementsByClassName("reference")[1].style.display="none";
   document.getElementsByClassName("reference")[2].style.display="block";
   document.getElementsByClassName("reference")[2].innerHTML=print+"<br><br>"; 
});


}
else if(c==1){
    
  for(var loc of Location)
  {
      if(Latitude.indexOf((loc.lat).toString()) && Longitude.indexOf((loc.lng).toString()))
      {
          
         var li=document.getElementsByClassName("slider-nav__item");
           var first = `
             <span style="font-size:5vh;border-bottom:1px solid white;margin-top:10px">${loc.state}</span><br><br>
              <span style="font-size:3vh">${loc.Country}</span><br><br>`;

            document.getElementsByClassName("reference")[0].style.display="none";
            document.getElementsByClassName("reference")[2].style.display="none";
            document.getElementsByClassName("reference")[1].style.display="block";
            document.getElementsByClassName("reference")[1].innerHTML=first;   

          break;
      }
  }}
    });
  } 
  
  else {
    console.log("Geolocation is not supported by this browser.");
  }
}

var Location=[
    {
        Country:"India",
        state:"Gujarat",
        city:"Ahmedabad",
        lat:23.0396,
        lng:72.5660

    },
    {
        Country:"India",
        state:"Gujarat",
        city:"Surat",
        lat:21.195,
        lng: 72.8194

    },
        {
        Country:"India",
        state:"Gujarat",
        city:"Bhavnagar",
        lat:21.7645,
        lng:72.1519

    },
        {
        Country:"India",
        state:"Gujarat",
        city:"Vadodra",
        lat:22.3073,
        lng:73.1811

    },
        {
        Country:"India",
        state:"Gujarat",
        city:"Anand",
        lat:22.5609,
        lng:72.9548

    },
        {
        Country:"India",
        state:"Gujarat",
        city:"Gandhinagar",
        lat:23.2294,
        lng:72.652

    },
        {
        Country:"India",
        state:"Gujarat",
        city:"Modasa",
        lat:23.4601,
        lng:73.2954

    },
        {
        Country:"India",
        state:"Gujarat",
        city:"Patan",
        lat:23.8508,
        lng:72.1148

    },
        {
        Country:"India",
        state:"Gujarat",
        city:"Naroda",
        lat:23.2944,
        lng:73.5771

    },
        {
        Country:"India",
        state:"Gujarat",
        city:"Dahod",
        lat:22.8323,
        lng:74.2535

    },
        {
        Country:"India",
        state:"Gujarat",
        city:"Jamnagar",
        lat:22.4707,
        lng:70.0577

    },
        {
        Country:"India",
        state:"Gujarat",
        city:"Porbandar",
        lat: 21.6417,
        lng:69.6293

    }
];



