var faren = false;


/*
function displayTemp(cTemp, faren){
    if(faren) return (cTemp * 9/5 + 32) + " F";
    return cTemp + " C";
} */

function displayTemp (cTemp, f){
    if(f) return Math.round(cTemp * 9/5 + 32) + " F";
    return Math.round(cTemp) + " C";
}

function render(wd, faren){
   var currentLocation = wd.name;
   var currentWeather = wd.weather[0].description;  
   var currentTemp = displayTemp(wd.main.temp, faren);
   var high = displayTemp(wd.main.temp_min, faren);
   var low = displayTemp(wd.main.temp_max, faren);
   var icon = wd.weather[0].icon;
            
    $('#currentLocation').html(currentLocation);
    $('#currentWeather').html(currentWeather);
    $('#currentTemp').html('now: ' + currentTemp);
    $('#high-low').html('high/low: ' + high + ' / ' + low);
    $('#icon').html('<img src="' + icon + '">');
}

$(function(){
    
    var loc;
    
    $.getJSON('https://ipinfo.io', function(d){
        console.log("assigning the data...");
        loc = d.loc.split(",");
        console.log(loc);

        $.getJSON('https://fcc-weather-api.glitch.me/api/current?lat=' + loc[0] + '&lon=' + loc[1], function(apiData){
            wd = apiData;

            render(apiData, faren);

            $('#toggle').click(function(){
                    faren = !faren;
                    console.log(faren);
                    render(wd, faren);
            });          

        });
      
    });
})