"use strict"

document.getElementById("clickMe").addEventListener("click", loadPlanets);

function loadPlanets(){
    var xhr = new XMLHttpRequest();
    var method = "Get";
    var url = "https://swapi.co/api/planets/?format=json";

    xhr.open(method, url);

    xhr.onreadystatechange = function(){
        if(this.readyState === 4 && this.status === 200){
            // var planets = JSON.parse(this.responseText);
            // for(var i in planets){
                
            // }
            console.log(JSON.parse(xhr.responseText));
        }
    }
    xhr.send();

}