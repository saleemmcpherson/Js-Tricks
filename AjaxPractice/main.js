"use strict"

document.getElementById('clickMe').addEventListener('click', loadNewCard);

/**
 * this function calls getRequest() every 1000 milliseconds
 */
function loadNewCard(){
    setInterval(getRequest, 1000);
}

/**
 * this function performs ajax request on github users api
 * displays a random user picture and login name
 */
function getRequest(){
    var random = Math.floor(Math.random()*30);
    var xhr = new XMLHttpRequest(),
    method = 'GET',
    url = "http://api.github.com/users";
    
    // initializes newly created xhr object
    xhr.open(method, url);

    // xhr.onload = function(){
    //     if(this.status == 200){
    //         var users = JSON.parse(this.responseText);
    //         var output = "";
    //         output += 
    //         '<div class="user">' +
    //         '<img src="'+users[random].avatar_url+'">' +
    //         '<p>'+users[random].login+'</p>'

    //         document.getElementById("users").innerHTML = output;
    //             console.log(users[random].avatar_url);
    //             console.log(users[random].login);
    //     } 
    // }

    // checks all readyStates levels if readtState is equal to 4
    // the response is ready to be sent also checks if server status is 
    // equal to 200 response is "OK"
    xhr.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            var users = JSON.parse(this.responseText);
            
            // dont do this line 41-47
            // hard coding in string output to the document is inefficient
            // do it programmatically using js
            var output = "";
            output += 
            '<div class="user">' +
            '<img src="'+users[random].avatar_url+'">' +
            '<p>'+users[random].login+'</p>'

            document.getElementById("users").innerHTML = output;
                console.log(users[random].avatar_url);
                console.log(users[random].login);
        }
    }
    // sends the request
    xhr.send();
}

