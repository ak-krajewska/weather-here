$(function(){
    
    var loc;
    
    $.getJSON('https://ipinfo.io', function(d){
        console.log("assigning the data...");
        loc = d.loc.split(",");
        console.log(loc);
    
        // call to the weather API
        //$('#location').text(loc);
        
        $.getJSON('https://fcc-weather-api.glitch.me/api/current?lat=' + loc[0] + '&lon=' + loc[1], function(wd){
            console.log("got the data " + wd);
            console.log(wd.name); //the city
            
            var currentLocation = wd.name;
            var currentWeather = wd.weather[0].description;
            console.log(currentWeather);
            var currentTemp = wd.main.temp;
            console.log(currentTemp);
            var high = wd.main.temp_min;
            var low = wd.main.temp_max;
            var icon = wd.weather[0].icon;
            
            $('#currentLocation').html(currentLocation);
            $('#currentWeather').html(currentWeather);
            $('#currentTemp').html(currentTemp);
            $('#high').html(high);
            $('#low').html(low);
            $('#icon').html('<img src="' + icon + '">');


        });
      
    })
})